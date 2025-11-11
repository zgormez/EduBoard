package com.it4us.todo.backend.dto;

import jakarta.validation.constraints.*;
import com.it4us.todo.backend.util.Regex;

public record ForgotPasswordRequest(
        @NotBlank @Pattern(regexp = Regex.EMAIL, message = "Please enter a valid email address")
        String email
) {}
