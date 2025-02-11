package com.vornicu.hospital_application.user;


import com.vornicu.hospital_application.dto.DoctorDto;
import com.vornicu.hospital_application.dto.PatientDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("profile")
@RequiredArgsConstructor
public class UserController {

    private final UserService service;

    @GetMapping("/profile")
    @Operation(summary = "Get User Profile", responses = {
            @ApiResponse(responseCode = "200", description = "Profile retrieved",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(oneOf = {DoctorDto.class, PatientDto.class})))
    })
    public ResponseEntity<Object> getUserProfile(Authentication authentication) {
        return ResponseEntity.ok(service.getUserProfile(authentication));
    }

    @PutMapping("/profile/update")
    public ResponseEntity<Object> updateUserProfile(@RequestBody UpdateUserRequest request, Authentication authentication) {
        return ResponseEntity.ok(service.updateUserProfile(request, authentication));
    }
}
