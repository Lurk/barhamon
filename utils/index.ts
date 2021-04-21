/**
 * memoization function for functions with one argument
 * uses shallow comparison
 */
export function memoize<T, R>(f: (data: T) => R): (data: T) => R {
  const cache = new Map<T, R>();
  return (data) => {
    let res = cache.get(data);
    if (!res) {
      res = f(data);
      cache.set(data, res);
    }
    return res;
  };
}
