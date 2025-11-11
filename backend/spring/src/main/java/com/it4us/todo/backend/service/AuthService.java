package com.it4us.todo.backend.service;

import com.it4us.todo.backend.model.*;
import com.it4us.todo.backend.repository.*;
import com.it4us.todo.backend.dto.*;
import com.it4us.todo.backend.security.JwtService;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import java.time.Instant;
import java.time.temporal.ChronoUnit;

@Service
public class AuthService {
    private final UserRepository users;
    private final PasswordResetTokenRepository tokens;
    private final PasswordEncoder encoder;
    private final JwtService jwt;
    private final JavaMailSender mail;
    private final String baseUrl;

    public AuthService(UserRepository users, PasswordResetTokenRepository tokens,
                       PasswordEncoder encoder, JwtService jwt,
                       JavaMailSender mail,
                       @Value("${app.frontend.base-url}") String baseUrl) {
        this.users = users;
        this.tokens = tokens;
        this.encoder = encoder;
        this.jwt = jwt;
        this.mail = mail;
        this.baseUrl = baseUrl;
    }

    @Transactional
    public void signUp(SignUpRequest r) {
        if (users.existsByEmail(r.email()))
            throw new IllegalArgumentException("This email already exist. Please login or try another one.");

        String username = (r.username() == null || r.username().isBlank())
                ? generateUsernameFromEmail(r.email()) : r.username();

        if (users.existsByUsername(username))
            throw new IllegalArgumentException("This name already exists. Please try another name.");

        if (!r.password().equals(r.confirmPassword()))
            throw new IllegalArgumentException("Passwords does not match");

        User u = new User();
        u.setEmail(r.email());
        u.setUsername(username);
        u.setPasswordHash(encoder.encode(r.password()));
        users.save(u);

        sendLoginLink(u.getEmail());
    }

    public AuthResponse login(LoginRequest r) {
        User u = users.findByEmail(r.email())
                .orElseThrow(() -> new IllegalArgumentException("Your email or password is incorrect. Please try again."));
        if (!encoder.matches(r.password(), u.getPasswordHash()))
            throw new IllegalArgumentException("Your email or password is incorrect. Please try again.");
        return new AuthResponse(jwt.create(u.getEmail()));
    }

    public void forgotPassword(ForgotPasswordRequest r) {
        users.findByEmail(r.email()).ifPresent(user -> {
            PasswordResetToken t = new PasswordResetToken(user, Instant.now().plus(1, ChronoUnit.HOURS));
            tokens.save(t);
            String link = baseUrl + "/create-new-password?token=" + t.getToken();
            sendMail(user.getEmail(), "Password Reset", "Click to create new password: " + link);
        });
    }

    public void resetPassword(ResetPasswordRequest r) {
        if (!r.newPassword().equals(r.confirmPassword()))
            throw new IllegalArgumentException("Passwords does not match");

        PasswordResetToken t = tokens.findById(r.token())
                .orElseThrow(() -> new IllegalArgumentException("Invalid or expired token"));

        if (t.getExpiresAt().isBefore(Instant.now()))
            throw new IllegalArgumentException("Invalid or expired token");

        User u = t.getUser();
        u.setPasswordHash(encoder.encode(r.newPassword()));
        users.save(u);
        tokens.delete(t);
    }

    private void sendLoginLink(String email) {
        String link = baseUrl + "/login?email=" + email;
        sendMail(email, "Login Link", "Click to log in: " + link);
    }

    private void sendMail(String to, String subject, String text) {
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(to);
        msg.setSubject(subject);
        msg.setText(text);
        mail.send(msg);
    }

    private String generateUsernameFromEmail(String email) {
        String base = email.split("@")[0].replaceAll("[^A-Za-z0-9]", "");
        if (base.length() < 4) base = (base + "user").substring(0, 4);
        base = base.substring(0, Math.min(10, base.length()));
        String candidate = base;
        int i = 1;
        while (users.existsByUsername(candidate)) candidate = base + i++;
        return candidate;
    }
}
