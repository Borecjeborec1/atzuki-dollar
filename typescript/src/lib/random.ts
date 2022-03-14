/**
 * Generate a random number between min and max
 */
export function randInt(min: number, max?: number): number {
  if (!max) return Math.floor(Math.random() * min);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * Get random boolean, true or false
 */
export function randBool(): boolean {
  return Math.random() >= 0.5;
}
