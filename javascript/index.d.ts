declare function max(...args: number[]): number;
declare function min(...args: number[]): number;
declare function isEqual(a: number, b: number): boolean;
declare function isPrime(n: number): boolean;
declare function greatestCommonDivisor(a: number, b: number): number;
declare function leastCommonMultiple(a: number, b: number): number;
declare function isPalindrome(n: number): boolean;
declare function isEven(n: number): boolean;
declare function isOdd(n: number): boolean;
declare function divisors(n: number): number[];
declare function pow(base: number, exponent: number): number;
declare function factorial(n: number): number;
declare function fibonacci(n: number): number;
declare function isDivisibleBy(n: number, by: number): boolean;
declare function randFloat(min: number, max: number): number;
declare function randInt(min: number, max?: number): number;
declare function randBool(): boolean;
declare function randPassword(length?: number): string;
declare function randString(length?: number): string;
declare function flatten(obj: any): any;
declare function sort(obj: number[] | string[]): number[] | string[];
declare function sortByKey<T>(object: T): T;
declare function sortByValue(object: any): any;
declare function shuffle<T>(array: T[]): T[];
declare function each(array: any[], cb: (element: any, index?: number) => void): void;
declare function replaceAll(string: string, search: string, replace: string): string;
declare function camelCase(string: string): string;
declare function kebabCase(string: string): string;
declare function snakeCase(string: string): string;
declare function pascalCase(string: string): string;
declare function sentenceCase(string: string): string;
declare function titleCase(string: string): string;
declare function upperCase(string: string): string;
declare function lowerCase(string: string): string;
declare function reverse(string: string): string;
declare function loop<T>(amount: number, cb: (i: number) => T): void;
declare function log(...args: any[]): void;
declare function type(value: any): string;
declare function id(id: string): HTMLElement | null;
declare function el(name: string): HTMLElement | null;
declare function text(el: HTMLElement): string;
declare class AtzukiDollar {
    private readonly version;
    id: Function;
    el: Function;
    text: Function;
    randInt: Function;
    randFloat: Function;
    randBool: Function;
    randPassword: Function;
    randString: Function;
    isDivisibleBy: Function;
    fibonacci: Function;
    factorial: Function;
    pow: Function;
    isPalindrome: Function;
    max: Function;
    min: Function;
    isEqual: Function;
    isPrime: Function;
    greatestCommonDivisor: Function;
    leastCommonMultiple: Function;
    isEven: Function;
    isOdd: Function;
    divisors: Function;
    flatten: Function;
    sort: Function;
    sortByKey: Function;
    sortByValue: Function;
    shuffle: Function;
    each: Function;
    replaceAll: Function;
    camelCase: Function;
    kebabCase: Function;
    snakeCase: Function;
    pascalCase: Function;
    sentenceCase: Function;
    titleCase: Function;
    upperCase: Function;
    lowerCase: Function;
    reverse: Function;
    loop: Function;
    log: Function;
    type: Function;
    constructor();
    get getVersion(): string;
}
