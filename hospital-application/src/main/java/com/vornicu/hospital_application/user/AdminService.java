package com.vornicu.hospital_application.user;

import com.vornicu.hospital_application.role.RoleRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    public List<User> getUsersByRole(String roleName) {
        return userRepository.findByRoles_Name(roleName);
    }

    @Transactional
    public void updateUser(Integer userId, AdminUserRequest updatedUser) {
        User existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Utilizatorul nu a fost găsit"));

        existingUser.setFirstname(updatedUser.getFirstname());
        existingUser.setLastname(updatedUser.getLastname());
        existingUser.setEmail(updatedUser.getEmail());
        existingUser.setPhoneNumber(updatedUser.getPhoneNumber());
        existingUser.setAddress(updatedUser.getAddress());
        existingUser.setEnabled(updatedUser.isEnabled());
        existingUser.setAccountLocked(updatedUser.isAccountLocked());

        // Verificăm rolul și actualizăm câmpurile specifice rolului
        if (existingUser.getRoles().contains(roleRepository.findByName("DOCTOR"))) {
            existingUser.setSpecialization(updatedUser.getSpecialization());
            existingUser.setHospital(updatedUser.getHospital());
        } else if (existingUser.getRoles().contains(roleRepository.findByName("PATIENT"))) {
            existingUser.setCnp(updatedUser.getCnp());
        }

        userRepository.save(existingUser);
    }
}
