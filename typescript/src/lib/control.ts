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

/**
 * Return type of the given value.
 */
export function type(value: any): string {
  return Object.prototype.toString.call(value).slice(8, -1);
}