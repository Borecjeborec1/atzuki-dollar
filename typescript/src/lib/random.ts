/**
 * Generate a random floating point number between the given interval. 
 */
export function randFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}


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

/**
 * Generate random password
 */
export function randPassword(length: number = 10): string {
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
export function randString(length: number = 10): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let string = '';
  for (let i = 0; i < length; i++) {
    string += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return string;
}