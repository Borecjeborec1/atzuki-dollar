/**
  * Get the greater of values.
  */
export function max(...args: number[]): number {
  return Math.max(...args);
}
/**
 * Get the lesser of values.
 */
export function min(...args: number[]): number {
  return Math.min(...args);
}
/**
 * Check if numbers are equal.
 */
export function isEqual(a: number, b: number): boolean {
  return a === b;
}

/**
 * Check if number is prime.
 */
export function isPrime(n: number): boolean {
  for (let i = 3; i <= Math.sqrt(n); i += 2)
    if (n % i === 0) return false;
  return n % 2 != 0 && n > 1 || n == 2;
}

/**
 * Find the greatest common divisor of two numbers.
 */
export function greatestCommonDivisor(a: number, b: number): number {
  if (b === 0) return a;
  return greatestCommonDivisor(b, a % b);
}

/**
 * Find the least common multiple of two numbers.
 */
export function leastCommonMultiple(a: number, b: number): number {
  return (a * b) / greatestCommonDivisor(a, b);
}

/**
 * Check if Numbers is palindrome.
 */
export function isPalindrome(n: number): boolean {
  return n.toString() === n.toString().split('').reverse().join('');
}

/**
 * Check if Numbers is even.
 */
export function isEven(n: number): boolean {
  return n % 2 === 0;
}

/**
 * Check if Numbers is odd.
 */
export function isOdd(n: number): boolean {
  return n % 2 !== 0;
}

/**
 * Returns all divisors of a number.
 */
export function divisors(n: number): number[] {
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
export function pow(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

/** 
 * Return the factorial of the given number.
*/
export function factorial(n: number): number {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

/**
 * Return the fibonacci number of the given index.
 */
export function fibonacci(n: number): number {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Check if given numbers is divisible by another number.
 */
export function isDivisibleBy(n: number, by: number): boolean {
  return n % by === 0;
}

/**
 * Convert rgb color to hex color.
 */
export function rgb2hex(r: number, g: number, b: number): string {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
/**
 * 
 * Convert hex color to rgb color.
 */
export function hex2rgb(hex: string): [number, number, number] | null {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
}