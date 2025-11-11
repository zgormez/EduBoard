package com.it4us.todo.backend.dto;

import jakarta.validation.constraints.*;
import com.it4us.todo.backend.util.Regex;

public record ResetPasswordRequest(
        @NotBlank String token,
        @NotBlank @Pattern(regexp = Regex.PASSWORD, message = "Please enter a valid password")
        String newPassword,
        @NotBlank String confirmPassword
) {}
