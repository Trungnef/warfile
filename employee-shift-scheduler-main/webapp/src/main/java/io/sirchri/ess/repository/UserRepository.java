
package io.sirchri.ess.repository;

import io.sirchri.ess.model.User;
import java.util.Optional;

import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends  GenericRepository<User> {

    Optional<User> findByUsername(String username);

    Boolean existsByEmail(String email);

    Optional<User> findByUsernameOrEmail(String username, String email);

    boolean existsByUsername(String username);
}