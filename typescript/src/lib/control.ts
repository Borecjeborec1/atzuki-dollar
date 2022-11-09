/**
  * Create a for loop.
  */
export function loop<T>(amount: number, cb: (i: number) => T, startValue: number = 0, ignoredValues: number[] = []): void {
  for (let i = startValue; i < amount + startValue; i++) {
    if (ignoredValues.includes(i)) continue;
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