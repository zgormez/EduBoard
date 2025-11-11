package com.it4us.todo.backend.model;

import jakarta.persistence.*;
import java.time.Instant;
import java.util.UUID;

@Entity
public class PasswordResetToken {
    @Id
    private String token = UUID.randomUUID().toString();

    @ManyToOne(optional = false)
    private User user;

    private Instant expiresAt;

    public PasswordResetToken() {}
    public PasswordResetToken(User user, Instant expiresAt) {
        this.user = user;
        this.expiresAt = expiresAt;
    }

    public String getToken() { return token; }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
    public Instant getExpiresAt() { return expiresAt; }
    public void setExpiresAt(Instant expiresAt) { this.expiresAt = expiresAt; }
}
