/**
  * Create a for loop.
  */
export function loop<T>(amount: number, cb: (i: number) => T): void {
  for (let i = 0; i < amount; i++) {
    cb(i);
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