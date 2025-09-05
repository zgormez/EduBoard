package com.it4us.todo.backend.web;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/health")
public class HealthController {

    @GetMapping
    public ResponseEntity<Health> health() {
        return ResponseEntity.ok(new Health("ok", "backend up"));
    }

    public record Health(String status, String message) {}
}
