package com.vornicu.hospital_application.user;


import com.vornicu.hospital_application.role.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("admin")
//@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
public class AdminController {
    private final AdminService service;


    @GetMapping("/get-admin-doctors")
    public ResponseEntity<List<User>> getAllDoctors() {
        return ResponseEntity.ok(service.getUsersByRole("DOCTOR"));
    }

    @GetMapping("/get-admin-patients")
    public ResponseEntity<List<User>> getAllPatients() {
        return ResponseEntity.ok(service.getUsersByRole("PATIENT"));
    }

    @PutMapping("/{userId}")
    public ResponseEntity<String> updateUser(
            @PathVariable Integer userId,
            @RequestBody AdminUserRequest updatedUser
    ) {
        service.updateUser(userId, updatedUser);
        return ResponseEntity.ok("Utilizator actualizat cu succes.");
    }
}
