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

  // DOM Functions
  public id: Function;
  public el: Function;
  public text: Function;

  // Random Functions
  public randInt: Function;
  public randBool: Function;
  public randPassword: Function;
  public randString: Function;

  // Math Functions
  public max: Function;
  public min: Function;
  public isEqual: Function;
  public isPrime: Function;
  public greatestCommonDivisor: Function;
  public leastCommonMultiple: Function;

  // Objects Functions
  public flatten: Function;
  public sort: Function;
  public sortByKey: Function;
  public sortByValue: Function;
  public shuffle: Function;
  public each: Function;


  // Strings Functions
  public replaceAll: Function;
  public camelCase: Function;
  public kebabCase: Function;
  public snakeCase: Function;
  public pascalCase: Function;
  public sentenceCase: Function;
  public titleCase: Function;
  public upperCase: Function;
  public lowerCase: Function;

  // Control Functions
  public loop: Function;
  public log: Function;
  public type: Function;

  constructor() {
    // Constants 
this.version = '1.0.10';

    // DOM Functions
    this.id = _dom.id;
    this.el = _dom.el;
    this.text = _dom.text;

    // Random Functions
    this.randInt = _random.randInt;
    this.randBool = _random.randBool;
    this.randPassword = _random.randPassword;
    this.randString = _random.randString;

    // Math Functions
    this.max = _math.max;
    this.min = _math.min;
    this.isEqual = _math.isEqual;
    this.isPrime = _math.isPrime;
    this.greatestCommonDivisor = _math.greatestCommonDivisor;
    this.leastCommonMultiple = _math.leastCommonMultiple;

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