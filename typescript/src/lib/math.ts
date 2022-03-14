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
  for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0) return false;
  return n > 1;
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