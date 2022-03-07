export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

// export default {
//   randomInt,
// };