/**
 * 缓存工具类
 * 默认过期时间 10 分钟
 */
const DEFAULT_TTL = 1000 * 60 * 10;

export default class Cache {
  cache = new Map();
  ttl;

  constructor(options) {
    this.ttl = options?.ttl || DEFAULT_TTL;
  }

  /**
   * 缓存组件信息
   * @param key
   * @param valu e
   */
  set(key, value) {
    this.cache.set(key, {
      expireAt: Date.now() + this.ttl,
      value,
    });
  }

  /**
   * 获取组件信息
   * @param key 组件key
   * @returns 组件信息
   */
  get(key) {
    const value = this.cache.get(key);
    if (!value) return undefined;

    if (value.expireAt <= Date.now()) {
      this.cache.delete(key);
      return undefined;
    }

    return value.value;
  }

  delete(key) {
    this.cache.delete(key);
  }

  clear() {
    this.cache.clear();
  }
}
