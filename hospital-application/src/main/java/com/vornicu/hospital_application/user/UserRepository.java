package com.vornicu.hospital_application.user;

import com.vornicu.hospital_application.role.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findByEmail(String email);

    @Query("""
        SELECT DISTINCT u.specialization
        FROM User u
        WHERE u.specialization IS NOT NULL
""")
    List<String> findAllSpecializations();

    @Query("""
       SELECT DISTINCT u.hospital
       FROM User u
       WHERE u.specialization = :specialization
       AND u.hospital IS NOT NULL
       """)
    List<String> findHospitalsBySpecialization(@Param("specialization") String specialization);
    @Query("""
        SELECT u
        FROM User u
        WHERE u.specialization = :specialization
        AND u.hospital = :hospital
     """)
    List<User> findDoctorsBySpecializationAndHospital(@Param("specialization") String specialization,
                                                      @Param("hospital") String hospital);


    boolean existsByCnp(String cnp);

    Optional<User> findByCnp(String cnp);

    List<User> findByRoles_Name(String role);
}