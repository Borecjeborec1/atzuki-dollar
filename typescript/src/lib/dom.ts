/**
 * document.getElementById wrapper
 */
export function id(id: string): HTMLElement | null {
  return document.getElementById(id);
}

/**
 * document.querySelector wrapper
 */
export function el(name: string): HTMLElement | null {
  return document.querySelector(name);
}

/**
 * InnerText of the given element
  */
export function text(el: HTMLElement): string {
  return el.innerText;
}