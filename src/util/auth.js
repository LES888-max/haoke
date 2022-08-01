import storage from "./storage";

const city = "hkzf_city";

export const getCity = () => storage.get(city);

export const setCity = (value) => storage.set(city, value);

export const removeCity = () => storage.remove(city);
