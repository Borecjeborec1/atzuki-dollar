/**
 * Generate a random number between min and max
 */
export function randInt(min: number, max: number): number {
  if (!max) return Math.floor(Math.random() * min);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * Get random boolean, true or false
 */
export function randBool(): boolean {
  return Math.random() >= 0.5;
}

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
