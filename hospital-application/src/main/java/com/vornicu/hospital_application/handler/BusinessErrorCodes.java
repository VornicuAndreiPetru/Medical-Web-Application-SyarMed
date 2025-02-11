package com.vornicu.hospital_application.handler;

import lombok.Getter;
import org.springframework.http.HttpStatus;

public enum BusinessErrorCodes {
    NO_CODE(0, HttpStatus.NOT_IMPLEMENTED, "No code"),
    INCORRECT_CURRENT_PASSWORD(300, HttpStatus.BAD_REQUEST,"Current password is incorrect"),
    NEW_PASSWORD_DOES_NOT_MATCH(301, HttpStatus.BAD_REQUEST,"The new password does not match"),
    ACCOUNT_LOCKED(302, HttpStatus.FORBIDDEN, "User account is locked"),
    ACCOUNT_DISABLED(303, HttpStatus.FORBIDDEN, "User account is disabled"),
    BAD_CREDENTIALS(304, HttpStatus.FORBIDDEN, "Login and / or password is incorrect"),
    DUPLICATE_CNP(305, HttpStatus.BAD_REQUEST, "CNP-ul introdus este deja înregistrat")
    ;

    @Getter
    private final int code;
    @Getter
    private final String description;
    @Getter
    private final HttpStatus httpsStatus;

    BusinessErrorCodes(int code, HttpStatus httpsStatus, String description) {
        this.code = code;
        this.description = description;
        this.httpsStatus = httpsStatus;
    }
}
