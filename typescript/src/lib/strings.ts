/**
  * Replace all occurrences of a string.
  */
export function replaceAll(string: string, search: string, replace: string): string {
  return string.split(search).join(replace);
}

/**
 * Transform string to camelCase.
 */
export function camelCase(string: string): string {
  return string.replace(/\s(.)/g, function (match, group1) {
    return group1.toUpperCase();
  }).replace(/\s/g, '');
}

/**
 * Transform string to kebab-case.
 */
export function kebabCase(string: string): string {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Transform string to snake_case.
 */
export function snakeCase(string: string): string {
  return string.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}

/**
 * Transform string to PascalCase.
 */
export function pascalCase(string: string): string {
  return string.replace(/\s(.)/g, function (match, group1) {
    return group1.toUpperCase();
  });
}

/**
 * Transform string to sentence case.
 */
export function sentenceCase(string: string): string {
  return string.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\s+/g, ' ').trim();
}

/**
 * Transform string to Title case.
 */
export function titleCase(string: string): string {
  return string.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

/**
 * Transform string to upper case.
 */
export function upperCase(string: string): string {
  return string.toUpperCase();
}

/**
 * Transform string to lower case.
 */
export function lowerCase(string: string): string {
  return string.toLowerCase();
}
