package com.it4us.todo.backend.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;

@Service
public class JwtService {
    private final Key key;
    private final long expMs;

    public JwtService(@Value("${app.jwt.secret}") String secret,
                      @Value("${app.jwt.exp-ms}") long expMs) {
        this.key = Keys.hmacShaKeyFor(secret.getBytes());
        this.expMs = expMs;
    }

    public String create(String subject) {
        long now = System.currentTimeMillis();
        return Jwts.builder()
                .setSubject(subject)
                .setIssuedAt(new Date(now))
                .setExpiration(new Date(now + expMs))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }
}
