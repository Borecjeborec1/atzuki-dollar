/**
 * Generate a random number between min and max
 */
function randInt(min: number, max: number): number {
  if (!max) return Math.floor(Math.random() * min);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * Get random boolean, true or false
 */
function randBool(): boolean {
  return Math.random() >= 0.5;
}

/**
  * Get the greater of values.
  */
function max(...args: number[]): number {
  return Math.max(...args);
}
/**
 * Get the lesser of values.
 */
function min(...args: number[]): number {
  return Math.min(...args);
}
/**
 * Check if numbers are equal.
 */
function isEqual(a: number, b: number): boolean {
  return a === b;
}

/**
  * Flatten the given array or object.
  */
function flatten(obj: any): any {
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
function sort(obj: number[] | string[]): number[] | string[] {
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
function sortByKey(object: any): any {
  return Object.keys(object).sort().reduce((r: any, k: string) => (r[k] = object[k], r), {})
}

/**
  * Sort given object by their values.
  */
function sortByValue(object: any): any {
  return Object.keys(object).sort((a, b) => object[a] - object[b]).reduce((r: any, k: string) => (r[k] = object[k], r), {})
}

function shuffle(array: any[]): any[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
/**
  * Replace all occurrences of a string.
  */
function replaceAll(string: string, search: string, replace: string): string {
  return string.split(search).join(replace);
}

/**
  * Create a for loop.
  */
function loop(amount: number, callback: Function): void {
  for (let i = 0; i < amount; i++) {
    callback(i);
  }
}


/**
 * @author <a href="WebsiteLink">Borecjeborec1</a>
 * @see <a href="GithubLink">Github</a>
 * @license MIT
 * @version 1.0.0
 */
class AtzukiDollar {
  // Constants 
  private readonly version: string;

  // Math Functions
  public randInt: Function;
  public randBool: Function;
  public max: Function;
  public min: Function;
  public isEqual: Function;

  // Objects Functions
  public flatten: Function;
  public sortByKey: Function;
  public sortByValue: Function;
  public shuffle: Function;

  // Strings Functions
  public replaceAll: Function;

  // Control Functions
  public loop: Function;

  constructor() {
    // Constants 
    this.version = "1.0.0";

    // Math Functions
    this.randInt = randInt;
    this.randBool = randBool;
    this.max = max;
    this.min = min;
    this.isEqual = isEqual;

    // Objects Functions
    this.flatten = flatten;
    this.sortByKey = sortByKey;
    this.sortByValue = sortByValue;
    this.shuffle = shuffle;

    // Strings Functions
    this.replaceAll = replaceAll;

    // Control Functions
    this.loop = loop;
  }

  public get getVersion(): string {
    return this.version;
  }

}


if (typeof window === "undefined") {
  // @ts-ignore
  module.exports = new AtzukiDollar();
}