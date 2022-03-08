import * as math from './lib/math.js';
import * as objects from './lib/objects.js';
import * as strings from './lib/strings.js';
import * as control from "./lib/control.js"


/**
 * @author <a href="WebsiteLink">Borecjeborec1</a>
 * @see <a href="GithubLink">Github</a>
 * @license MIT
 * @version 1.0.0
 */
class AtzukiDollar {
  // Constants 
  private readonly version: string;

  // Math Functions
  public randInt: Function;
  public randBool: Function;
  public max: Function;
  public min: Function;
  public isEqual: Function;

  // Objects Functions
  public flatten: Function;
  public sortByKey: Function;
  public sortByValue: Function;
  public shuffle: Function;

  // Strings Functions
  public replaceAll: Function;

  // Control Functions
  public loop: Function;

  constructor() {
    // Constants 
    this.version = "1.0.0";

    // Math Functions
    this.randInt = math.randInt;
    this.randBool = math.randBool;
    this.max = math.max;
    this.min = math.min;
    this.isEqual = math.isEqual;

    // Objects Functions
    this.flatten = objects.flatten;
    this.sortByKey = objects.sortByKey;
    this.sortByValue = objects.sortByValue;
    this.shuffle = objects.shuffle;

    // Strings Functions
    this.replaceAll = strings.replaceAll;

    // Control Functions
    this.loop = control.loop;
  }

  public get getVersion(): string {
    return this.version;
  }

}


if (typeof window === "undefined") {
  // @ts-ignore
  module.exports = AtzukiDollar;
}