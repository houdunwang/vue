export interface IData {
  data: any
  expire?: number
}

export default {
  set(key: string, data: any, expire?: number): void {
    let cache: IData = { data }
    if (expire) {
      cache.expire = new Date().getTime() + data.expire * 1000
    }
    localStorage.setItem(key, JSON.stringify(cache))
  },
  get(key: string, defaultValue: any = null): any {
    const cacheStore = localStorage.getItem(key)
    if (cacheStore) {
      const cache = JSON.parse(cacheStore)
      const expire = cache?.expire
      if (expire && expire < new Date().getTime()) {
        localStorage.removeItem(key)
        return defaultValue
      }
      return cache.data
    }
    return defaultValue
  },
  remove(key: string) {
    localStorage.removeItem(key)
  },
}
