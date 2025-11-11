package com.it4us.todo.backend.util;

public final class Regex {
    private Regex() {} // prevent creating an instance

    // 2.3.6 Email format rules
    public static final String EMAIL =
            "^(?=.{1,64}@)[A-Za-z0-9]+([._-][A-Za-z0-9]+)*@" +
                    "[A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*\\.[A-Za-z]{2,}$";

    // 2.3.5 Username: 4–15 chars, start with letter, letters/digits/single underscore
    public static final String USERNAME =
            "^[A-Za-z](?:[A-Za-z0-9]|_(?!_)){3,14}$";

    // 2.3.7 Password: 8–15 chars, 1 uppercase, 1 lowercase, 1 digit, 1 symbol
    public static final String PASSWORD =
            "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[^A-Za-z0-9])[A-Za-z\\d[^\\p{L}]]{8,15}$";
}
