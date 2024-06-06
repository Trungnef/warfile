
package io.sirchri.ess.repository;

import io.sirchri.ess.model.Event;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends  GenericRepository<Event> {
    public List<Map> eventsInRange(ZonedDateTime start, ZonedDateTime end, List<Long> groups, boolean detailed);
    
    public List<Map> eventsInRangePrint(ZonedDateTime start, ZonedDateTime end, List<Long> groups);
}