
package io.sirchri.ess.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Map;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class GetFilterDto {
    private Integer limit;
    private Integer page;
    private String sortDir;
    private String sortBy;
    
    // Map of field names to a map of operators and values
    private Map<String, Map<String, Object>> filters;
}