
package io.sirchri.ess.repository.specification;

import io.sirchri.ess.model.Event;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import java.time.ZonedDateTime;
import java.util.List;
import org.springframework.data.jpa.domain.Specification;

public class EventSpecifications {
    public static Specification<Event> recurring() {
        return (Root<Event> root, CriteriaQuery<?> query, CriteriaBuilder cb) -> {
            return cb.equal(root.get("recurring"), true);
        };
    }
    
    private static Predicate betweenDatesPredicate(Root<Event> root, CriteriaQuery<?> query, CriteriaBuilder cb, ZonedDateTime start, ZonedDateTime end) {
        /**
             * |-------------| (EVENT) |---------| window.start < end_date &&
             * end_date < window.end
             *                   |--------|     window.end > start_date && start_date > window.start
             * |---------------------| window.start > start_date && window.end <
             * end_date
             *
             * recurring && start_date < window.end && until_date > window.start
             */
            Predicate res = cb.or(
                    //recurring AND start_date <= :end AND (CASE WHEN until_date IS NOT NULL THEN until_date >= :start ELSE true END)                
                    cb.and(
                            cb.equal(root.get("recurring"), true),
                            cb.lessThanOrEqualTo(root.get("dtStart"), end),
                            cb.equal(cb.<Boolean>selectCase().when(
                                    cb.isNotNull(root.get("untilDate")), 
                                    cb.greaterThanOrEqualTo(root.get("untilDate"), start))
                                    .otherwise(cb.literal(true)), cb.literal(true))
                    ),
                    //NOT coalesce(recurring, false) AND :start <= end_date AND end_date <= :end
                    cb.and(
                            cb.not(cb.coalesce(root.get("recurring"), false)),
                            cb.greaterThanOrEqualTo(root.get("dtEnd"), start),
                            cb.lessThanOrEqualTo(root.get("dtEnd"), end)
                    ),
                    //NOT coalesce(recurring, false) AND :end >= start_date AND start_date >= :start
                    cb.and(
                            cb.not(cb.coalesce(root.get("recurring"), false)),
                            cb.greaterThanOrEqualTo(root.get("dtStart"), start),
                            cb.lessThanOrEqualTo(root.get("dtStart"), end)
                    ),
                    //NOT coalesce(recurring, false) AND :start >= start_date AND :end <= end_date
                    cb.and(
                            cb.not(cb.coalesce(root.get("recurring"), false)),
                            cb.lessThanOrEqualTo(root.get("dtStart"), start),
                            cb.greaterThanOrEqualTo(root.get("dtEnd"), end)
                    )
            );
            
            return res;
    }
    
    public static Specification<Event> betweenDates(ZonedDateTime start, ZonedDateTime end) {
        return (Root<Event> root, CriteriaQuery<?> query, CriteriaBuilder cb) -> {
            return betweenDatesPredicate(root, query, cb, start, end);
        };
    }
    
    public static Specification<Event> betweenDatesAndGroups(ZonedDateTime start, ZonedDateTime end, List<Long> groups) {
        return (Root<Event> root, CriteriaQuery<?> query, CriteriaBuilder cb) -> {
            Predicate res = betweenDatesPredicate(root, query, cb, start, end);
            
            if (groups != null)
                res = cb.and(res,
                    root.get("employeeFk").in(groups)
                );
            
            return res;
        };
    }
}
