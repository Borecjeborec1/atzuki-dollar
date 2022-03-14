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
  public selector: Function;

  // Random Functions
  public randInt: Function;
  public randBool: Function;

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
  public forEach: Function;


  // Strings Functions
  public replaceAll: Function;

  // Control Functions
  public loop: Function;
  public log: Function;
  public type: Function;

  constructor() {
    // Constants 
    this.version = '1.0.8';

    // DOM Functions
    this.id = _dom.id;
    this.selector = _dom.selector;

    // Random Functions
    this.randInt = _random.randInt;
    this.randBool = _random.randBool;

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
    this.forEach = _objects.forEach;

    // Strings Functions
    this.replaceAll = _strings.replaceAll;

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