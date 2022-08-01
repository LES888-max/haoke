import storage from "./storage";

const city = "hkzf_city";

const token = "token";

export const getCity = () => storage.get(city);

export const setCity = (value) => storage.set(city, value);

export const removeCity = () => storage.remove(city);

export const getToken = () => storage.get(token);

export const setToken = (value) => storage.set(token, value);

export const removeToken = () => storage.remove(token);
