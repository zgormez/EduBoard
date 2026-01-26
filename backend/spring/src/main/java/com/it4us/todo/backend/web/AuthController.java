package com.it4us.todo.backend.web;

import com.it4us.todo.backend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/check-username")
    public ResponseEntity<?> checkUsername(@RequestBody String username) {

        boolean exists = userService.checkUsername(username);

        if (exists) {
            return ResponseEntity.badRequest().body("Username already exists");
        }

        return ResponseEntity.ok("Username available");
    }
}
