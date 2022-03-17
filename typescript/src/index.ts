import * as _math from './lib/math.js';
import * as _random from './lib/random.js';
import * as _objects from './lib/objects.js';
import * as _strings from './lib/strings.js';
import * as _control from "./lib/control.js"
import * as _dom from "./lib/dom.js"


/**
 * @author <a href="WebsiteLink">Borecjeborec1</a>
 * @see <a href="https://github.com/Borecjeborec1/atzuki-dollar">Github</a>
 * @license MIT
 * @version 1.0.6
 */
class AtzukiDollar {

  // Constants 
  private readonly version: string;

  // DOM Function Definition
  public id: Function;
  public el: Function;
  public text: Function;

  // Random Function Definition
  public randInt: Function;
  public randFloat: Function;
  public randBool: Function;
  public randPassword: Function;
  public randString: Function;

  // Math Function Definition
  public pow: Function;
  public isPalindrome: Function;
  public max: Function;
  public min: Function;
  public isEqual: Function;
  public isPrime: Function;
  public greatestCommonDivisor: Function;
  public leastCommonMultiple: Function;
  public isEven: Function;
  public isOdd: Function;
  public divisors: Function;


  // Objects Function Definition
  public flatten: Function;
  public sort: Function;
  public sortByKey: Function;
  public sortByValue: Function;
  public shuffle: Function;
  public each: Function;


  // Strings Function Definition
  public replaceAll: Function;
  public camelCase: Function;
  public kebabCase: Function;
  public snakeCase: Function;
  public pascalCase: Function;
  public sentenceCase: Function;
  public titleCase: Function;
  public upperCase: Function;
  public lowerCase: Function;
  public reverse: Function;

  // Control Function Definition
  public loop: Function;
  public log: Function;
  public type: Function;

  constructor() {
    // Constants 
this.version = '1.0.13';

    // DOM Functions
    this.id = _dom.id;
    this.el = _dom.el;
    this.text = _dom.text;

    // Random Functions
    this.randInt = _random.randInt;
    this.randFloat = _random.randFloat;
    this.randBool = _random.randBool;
    this.randPassword = _random.randPassword;
    this.randString = _random.randString;

    // Math Functions
    this.max = _math.max;
    this.pow = _math.pow
    this.isPalindrome = _math.isPalindrome
    this.min = _math.min;
    this.isEqual = _math.isEqual;
    this.isPrime = _math.isPrime;
    this.greatestCommonDivisor = _math.greatestCommonDivisor;
    this.leastCommonMultiple = _math.leastCommonMultiple;
    this.isEven = _math.isEven;
    this.isOdd = _math.isOdd;
    this.divisors = _math.divisors;

    // Objects Functions
    this.flatten = _objects.flatten;
    this.sort = _objects.sort;
    this.sortByKey = _objects.sortByKey;
    this.sortByValue = _objects.sortByValue;
    this.shuffle = _objects.shuffle;
    this.each = _objects.each;

    // Strings Functions
    this.replaceAll = _strings.replaceAll;
    this.camelCase = _strings.camelCase;
    this.kebabCase = _strings.kebabCase;
    this.snakeCase = _strings.snakeCase;
    this.pascalCase = _strings.pascalCase;
    this.sentenceCase = _strings.sentenceCase;
    this.titleCase = _strings.titleCase;
    this.upperCase = _strings.upperCase;
    this.lowerCase = _strings.lowerCase;
    this.reverse = _strings.reverse;


    // Control Functions
    this.loop = _control.loop;
    this.log = _control.log;
    this.type = _control.type;
  }

  public get getVersion(): string {
    return this.version;
  }

}


if (typeof window === "undefined") {
  // @ts-ignore
  module.exports = new AtzukiDollar();
}