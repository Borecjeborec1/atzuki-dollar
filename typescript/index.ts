/**
 * 
 * THIS FILE IS BUILT AUTOMATICLY.
 * 
 * DO NOT EDIT CONTENT IN THIS FILE!
 * 
 * EVERY AUTOMATION IS DONE INSIDE build/compact.js
 * 
 */


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
 * Check if number is prime.
 */
function isPrime(n: number): boolean {
  for (let i = 3; i <= Math.sqrt(n); i += 2)
    if (n % i === 0) return false;
  return n % 2 != 0 && n > 1 || n == 2;
}

/**
 * Find the greatest common divisor of two numbers.
 */
function greatestCommonDivisor(a: number, b: number): number {
  if (b === 0) return a;
  return greatestCommonDivisor(b, a % b);
}

/**
 * Find the least common multiple of two numbers.
 */
function leastCommonMultiple(a: number, b: number): number {
  return (a * b) / greatestCommonDivisor(a, b);
}

/**
 * Check if Numbers is palindrome.
 */
function isPalindrome(n: number): boolean {
  return n.toString() === n.toString().split('').reverse().join('');
}

/**
 * Check if Numbers is even.
 */
function isEven(n: number): boolean {
  return n % 2 === 0;
}

/**
 * Check if Numbers is odd.
 */
function isOdd(n: number): boolean {
  return n % 2 !== 0;
}

/**
 * Returns all divisors of a number.
 */
function divisors(n: number): number[] {
  let divisors = [];
  for (let i = 1; i * i <= n; i++)
    if (n % i === 0) {
      divisors.push(i);
      if (i !== n / i) divisors.push(n / i);
    }
  return divisors;
}

/**
 * Return a number representing the given base taken to the power of the given exponent.
 */
function pow(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

/** 
 * Return the factorial of the given number.
*/
function factorial(n: number): number {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

/**
 * Return the fibonacci number of the given index.
 */
function fibonacci(n: number): number {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Check if given numbers is divisible by another number.
 */
function isDivisibleBy(n: number, by: number): boolean {
  return n % by === 0;
}

/**
 * Convert rgb color to hex color.
 */
function rgb2hex(r: number, g: number, b: number): string {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
/**
 * 
 * Convert hex color to rgb color.
 */
function hex2rgb(hex: string): [number, number, number] | null {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
}
/**
 * Generate a random floating point number between the given interval. 
 */
function randFloat(min: number, max: number): number {
  if (!max) return Math.random() * min;
  return Math.random() * (max - min + 1) + min;
}


/**
 * Generate a random number between min and max
 */
function randInt(min: number, max?: number): number {
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
 * Generate random password
 */
function randPassword(length: number = 10): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

/**
 * Generate random string
 */
function randString(length: number = 10): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let string = '';
  for (let i = 0; i < length; i++) {
    string += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return string;
}

/*
  * Generate random  color
  */
function randColor(): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
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
function sortByKey<T>(object: T): T {
  return Object.keys(object).sort().reduce((r: any, k: string) => (r[k] = object[k as keyof T], r), {})
}

/**
  * Sort given object by their values.
  */
function sortByValue(object: any): any {
  return Object.keys(object).sort((a, b) => object[a] - object[b]).reduce((r: any, k: string) => (r[k] = object[k], r), {})
}

/**
 * Shuffle the given array.
 */

function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * Loop for each element.
 */
function each(array: any[], cb: (element: any, index?: number) => void): void {
  for (let i = 0; i < array.length; i++) {
    cb(array[i], i);
  }
}

/**
 * Remove duplicates from array
 */
function removeDuplicates(array: any[]): any[] {
  return [...(new Set([...array]))]
}

/**
  * Replace all occurrences of a string.
  */
function replaceAll(string: string, search: string, replace: string): string {
  return string.split(search).join(replace);
}

/**
 * Transform string to camelCase.
 */
function camelCase(string: string): string {
  return string.replace(/\s(.)/g, function (match, group1) {
    return group1.toUpperCase();
  }).replace(/\s/g, '');
}

/**
 * Transform string to kebab-case.
 */
function kebabCase(string: string): string {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Transform string to snake_case.
 */
function snakeCase(string: string): string {
  return string.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}

/**
 * Transform string to PascalCase.
 */
function pascalCase(string: string): string {
  return string.replace(/\s(.)/g, function (match, group1) {
    return group1.toUpperCase();
  });
}

/**
 * Transform string to sentence case.
 */
function sentenceCase(string: string): string {
  return string.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\s+/g, ' ').trim();
}

/**
 * Transform string to Title case.
 */
function titleCase(string: string): string {
  return string.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

/**
 * Transform string to upper case.
 */
function upperCase(string: string): string {
  return string.toUpperCase();
}

/**
 * Transform string to lower case.
 */
function lowerCase(string: string): string {
  return string.toLowerCase();
}

/**
 * Reverse string.
 */
function reverse(string: string): string {
  return string.split('').reverse().join('');
}
/**
  * Create a for loop.
  */
function loop<T>(amount: number, cb: (i: number) => T): void {
  for (let i = 0; i < amount; i++) {
    cb(i);
  }
}

/**
 * Console.log() shortcut. Each argument will be separated by a space.
 */
function log(...args: any[]): void {
  console.log(...args);
}

/**
 * Return type of the given value.
 */
function type(value: any): string {
  return Object.prototype.toString.call(value).slice(8, -1);
}
/**
 * document.getElementById wrapper
 */
function id(id: string): HTMLElement | null {
  return document.getElementById(id);
}

/**
 * document.querySelector wrapper
 */
function el(name: string): HTMLElement | null {
  return document.querySelector(name);
}

/**
 * InnerText of the given element
  */
function text(el: HTMLElement): string {
  return el.innerText;
}


/**
 * @author <a href="WebsiteLink">Borecjeborec1</a>
 * @see <a href="https://github.com/Borecjeborec1/atzuki-dollar">Github</a>
 * @license MIT
 * @version 1.0.6
 */
class AtzukiDollar {

  // Constants 
  private readonly version: string;

  // DOM Function Definition
  public id: Function;
  public el: Function;
  public text: Function;

  // Random Function Definition
  public randColor: Function;
  public randInt: Function;
  public randFloat: Function;
  public randBool: Function;
  public randPassword: Function;
  public randString: Function;

  // Math Function Definition
  public hex2rgb: Function;
  public rgb2hex: Function;
  public isDivisibleBy: Function;
  public fibonacci: Function;
  public factorial: Function;
  public pow: Function;
  public isPalindrome: Function;
  public max: Function;
  public min: Function;
  public isEqual: Function;
  public isPrime: Function;
  public greatestCommonDivisor: Function;
  public leastCommonMultiple: Function;
  public isEven: Function;
  public isOdd: Function;
  public divisors: Function;


  // Objects Function Definition
  public removeDuplicates: Function;
  public flatten: Function;
  public sort: Function;
  public sortByKey: Function;
  public sortByValue: Function;
  public shuffle: Function;
  public each: Function;


  // Strings Function Definition
  public replaceAll: Function;
  public camelCase: Function;
  public kebabCase: Function;
  public snakeCase: Function;
  public pascalCase: Function;
  public sentenceCase: Function;
  public titleCase: Function;
  public upperCase: Function;
  public lowerCase: Function;
  public reverse: Function;

  // Control Function Definition
  public loop: Function;
  public log: Function;
  public type: Function;

  constructor() {
    // Constants 
    this.version = '1.0.21';

    // DOM Functions
    this.id = id;
    this.el = el;
    this.text = text;

    // Random Functions
    this.randInt = randInt;
    this.randColor = randColor
    this.randFloat = randFloat;
    this.randBool = randBool;
    this.randPassword = randPassword;
    this.randString = randString;

    // Math Functions
    this.max = max;
    this.hex2rgb = hex2rgb
    this.rgb2hex = rgb2hex
    this.isDivisibleBy = isDivisibleBy
    this.fibonacci = fibonacci
    this.factorial = factorial
    this.pow = pow
    this.isPalindrome = isPalindrome
    this.min = min;
    this.isEqual = isEqual;
    this.isPrime = isPrime;
    this.greatestCommonDivisor = greatestCommonDivisor;
    this.leastCommonMultiple = leastCommonMultiple;
    this.isEven = isEven;
    this.isOdd = isOdd;
    this.divisors = divisors;

    // Objects Functions
    this.flatten = flatten;
    this.removeDuplicates = removeDuplicates
    this.sort = sort;
    this.sortByKey = sortByKey;
    this.sortByValue = sortByValue;
    this.shuffle = shuffle;
    this.each = each;

    // Strings Functions
    this.replaceAll = replaceAll;
    this.camelCase = camelCase;
    this.kebabCase = kebabCase;
    this.snakeCase = snakeCase;
    this.pascalCase = pascalCase;
    this.sentenceCase = sentenceCase;
    this.titleCase = titleCase;
    this.upperCase = upperCase;
    this.lowerCase = lowerCase;
    this.reverse = reverse;


    // Control Functions
    this.loop = loop;
    this.log = log;
    this.type = type;
  }

  public get getVersion(): string {
    return this.version;
  }

}


if (typeof window === "undefined") {
  // @ts-ignore
  module.exports = new AtzukiDollar();
}