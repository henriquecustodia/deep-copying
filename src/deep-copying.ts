export function deepCopying<T>(obj: T): T {
  if (!isObject(obj)) {
    return obj;
  }

  let target = {} as T;

  for (const key in obj) {
    const value = obj[key];

    if (isObject(value)) {
      target[key] = deepCopying(value);
    } else {
      target[key] = obj[key];
    }
  }

  return target;
}

function isObject(value: unknown): boolean {
  return Object.prototype.toString.call(value) === "[object Object]";
}
