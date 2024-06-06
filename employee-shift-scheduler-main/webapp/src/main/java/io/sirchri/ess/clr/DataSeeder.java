package io.sirchri.ess.clr;

import io.sirchri.ess.model.ERole;
import io.sirchri.ess.model.Role;
import io.sirchri.ess.model.User;
import io.sirchri.ess.repository.RoleRepository;
import io.sirchri.ess.repository.UserRepository;
import java.util.Arrays;
import java.util.HashSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {
    @Autowired
    private UserRepository userRepository; // Assuming you have a UserRepository
    
    @Autowired
    private RoleRepository roleRepo;

    @Override
    public void run(String... args) throws Exception {
        if (roleRepo.findByName(ERole.ROLE_USER).isEmpty()) {
            Role user = new Role();
            user.setName(ERole.ROLE_USER);
            roleRepo.save(user);
            
            Role mod = new Role();
            mod.setName(ERole.ROLE_MODERATOR);
            roleRepo.save(mod);
            
            Role admin = new Role();
            admin.setName(ERole.ROLE_ADMIN);
            roleRepo.save(admin);

            // Check if the admin user already exists
            if (userRepository.findByUsername("admin").isEmpty()) {
                User adminUser = new User();
                adminUser.setUsername("admin");
                adminUser.setEmail("admin@example.com");
                adminUser.setPassword(new BCryptPasswordEncoder().encode("admin")); // Securely hash the password
                adminUser.setRoles(new HashSet<>(Arrays.asList(admin)));
                // Add any additional admin user details
                userRepository.save(adminUser);
            }
        }
    }
}