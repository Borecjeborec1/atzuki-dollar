/**
  * Create a for loop.
  */
export function loop(amount: number = 10, callback: Function): void {
  for (let i = 0; i < amount; i++) {
    callback(i);
  }
}

/**
 * Console.log() shortcut. Each argument will be separated by a space.
 */
export function log(...args: any[]): void {
  console.log(...args);
}