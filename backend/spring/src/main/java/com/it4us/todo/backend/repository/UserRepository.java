package com.it4us.todo.backend.repository;

import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.Set;

@Repository
public class UserRepository {

    private final Set<String> usernames = new HashSet<>();

    public boolean existsByUsername(String username) {
        return usernames.contains(username);
    }

    public void save(String username) {
        usernames.add(username);
    }
}
