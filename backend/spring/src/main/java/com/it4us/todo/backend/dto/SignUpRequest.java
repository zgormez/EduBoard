package com.it4us.todo.backend.dto;

import jakarta.validation.constraints.*;
import com.it4us.todo.backend.util.Regex;

public record SignUpRequest(
        @Pattern(regexp = Regex.USERNAME, message = "Please enter a valid username")
        String username,
        @NotBlank @Pattern(regexp = Regex.EMAIL, message = "Please enter a valid email address")
        String email,
        @NotBlank @Pattern(regexp = Regex.PASSWORD, message = "Please enter a valid password")
        String password,
        @NotBlank String confirmPassword
) {}
