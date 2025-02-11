package com.vornicu.hospital_application;

import com.vornicu.hospital_application.role.Role;
import com.vornicu.hospital_application.role.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
@EnableAsync
public class HospitalApplication {

	public static void main(String[] args) {
		SpringApplication.run(HospitalApplication.class, args);
	}

	@Bean
	public CommandLineRunner runner(RoleRepository roleRepository){
		return args ->{
			if(roleRepository.findByName("PATIENT").isEmpty()){
				roleRepository.save(
						Role.builder().name("PATIENT").build()
				);
			}
			if(roleRepository.findByName("DOCTOR").isEmpty()){
				roleRepository.save(
						Role.builder().name("DOCTOR").build()
				);
			}
			if(roleRepository.findByName("ADMIN").isEmpty()){
				roleRepository.save(
						Role.builder().name("ADMIN").build()
				);
			}
		};
	}

}
