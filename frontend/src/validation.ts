export const EMAIL =
    /^(?=.{1,64}@)[A-Za-z0-9]+([._-][A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

export const USERNAME = /^[A-Za-z](?:[A-Za-z0-9]|_(?!_)){3,14}$/;

export const PASSWORD =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])[A-Za-z\d[^\\p{L}]]{8,15}$/;
