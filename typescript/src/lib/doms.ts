/**
 * document.getElementById wrapper
 */
export function id(id: string): HTMLElement | null {
  return document.getElementById(id);
}

/**
 * document.querySelector wrapper
 */
export function selector(name: string): HTMLElement | null {
  return document.querySelector(name);
}