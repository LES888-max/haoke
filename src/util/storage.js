class Storage {
  get(key) {
    key = localStorage.getItem(key);
    try {
      return JSON.parse(key);
    } catch {
      return key;
    }
  }

  set(key, value) {
    if (typeof value === "object" && value !== null) {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }

  remove(key) {
    localStorage.removeItem(key);
  }
}

export default new Storage();
