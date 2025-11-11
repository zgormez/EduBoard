package com.it4us.todo.backend.repository;

import com.it4us.todo.backend.model.PasswordResetToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, String> {}
