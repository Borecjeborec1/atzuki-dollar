/**
  * Create a for loop.
  */
export function loop(amount: number = 10, callback: Function): void {
  for (let i = 0; i < amount; i++) {
    callback(i);
  }
}