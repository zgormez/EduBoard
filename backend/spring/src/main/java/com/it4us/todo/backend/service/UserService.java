package com.it4us.todo.backend.service;

import com.it4us.todo.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean checkUsername(String username) {
        return userRepository.existsByUsername(username);
    }
}
