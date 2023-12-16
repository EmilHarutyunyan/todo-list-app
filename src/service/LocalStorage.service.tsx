class StorageService {
  static getDate<T>(key: string): T | null {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  }

  static setDate(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static removeDate(key: string): void {
    localStorage.removeItem(key);
  }
}

export default StorageService;
