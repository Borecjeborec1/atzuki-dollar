/**
  * Flatten the given array or object.
  */
export function flatten(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.reduce((acc, val) => acc.concat(flatten(val)), []);
  } else if (typeof obj === "object") {
    return Object.keys(obj).reduce((acc, key) => {
      return acc.concat(flatten(obj[key]));
    }, []);
  } else {
    return [obj];
  }
}

/**
 * Sort given array.
 */
export function sort(obj: number[] | string[]): number[] | string[] {
  for (let i = 0; i < obj.length; i++) {
    for (let j = i + 1; j < obj.length; j++) {
      if (obj[i] > obj[j]) {
        const temp = obj[i];
        obj[i] = obj[j];
        obj[j] = temp;
      }
    }
  }
  return obj
}

/**
 * Sort given object by their keys.
 */
export function sortByKey<T>(object: T): T {
  return Object.keys(object).sort().reduce((r: any, k: string) => (r[k] = object[k as keyof T], r), {})
}

/**
  * Sort given object by their values.
  */
export function sortByValue(object: any): any {
  return Object.keys(object).sort((a, b) => object[a] - object[b]).reduce((r: any, k: string) => (r[k] = object[k], r), {})
}

/**
 * Shuffle the given array.
 */

export function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * Loop for each element.
 */
export function forEach(array: any[], cb: (element: any, index?: number) => void): void {
  for (let i = 0; i < array.length; i++) {
    cb(array[i], i);
  }
}