
package io.sirchri.ess.clr;

import io.sirchri.ess.model.Event;
import io.sirchri.ess.repository.EventRepository;
import static io.sirchri.ess.repository.specification.EventSpecifications.recurring;
import static io.sirchri.ess.util.EventUtils.eventToRRuleString;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


@Component
public class RRuleUpdater implements CommandLineRunner {
    private static final Logger logger = LoggerFactory.getLogger(RRuleUpdater.class);
    
    @Autowired
    private EventRepository eventRepository;

    @Override
    public void run(String... args) throws Exception {
        List<Event> recurringEvents = eventRepository.findAll(recurring());
        //logger.info("found {} events with empty rrule", recurringEvents.size());
        
        for (Event e : recurringEvents) {
            if (StringUtils.isEmpty(e.getRrule())) {
                e.setRrule(eventToRRuleString(e));

                eventRepository.save(e);
            }
        }
    }
}