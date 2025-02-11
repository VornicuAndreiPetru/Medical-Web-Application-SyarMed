package com.vornicu.hospital_application.auth;


import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class DoctorRegistrationRequest extends RegistrationRequest{


    @NotEmpty(message = "Specialization is mandatory")
    @NotNull(message = "Specialization is mandatory")
    private String specialization; //doar pt doctori
    @NotEmpty(message = "Hospital is mandatory")
    @NotNull(message = "Hospital is mandatory")
    private String hospital; //doar pt doctori
}
