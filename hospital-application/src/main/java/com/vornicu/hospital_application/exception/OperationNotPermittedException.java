package com.vornicu.hospital_application.exception;

public class OperationNotPermittedException extends RuntimeException{
    public OperationNotPermittedException(String msg){ super(msg);}
}
