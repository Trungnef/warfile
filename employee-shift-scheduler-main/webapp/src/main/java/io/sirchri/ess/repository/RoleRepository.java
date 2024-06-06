

package io.sirchri.ess.repository;

import io.sirchri.ess.model.ERole;
import io.sirchri.ess.model.Role;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
}