"use strict";
function randInt(min, max) {
    if (!max)
        return Math.floor(Math.random() * min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randBool() {
    return Math.random() >= 0.5;
}
function max(...args) {
    return Math.max(...args);
}
function min(...args) {
    return Math.min(...args);
}
function isEqual(a, b) {
    return a === b;
}
function flatten(obj) {
    if (Array.isArray(obj)) {
        return obj.reduce((acc, val) => acc.concat(flatten(val)), []);
    }
    else if (typeof obj === "object") {
        return Object.keys(obj).reduce((acc, key) => {
            return acc.concat(flatten(obj[key]));
        }, []);
    }
    else {
        return [obj];
    }
}
function sort(obj) {
    for (let i = 0; i < obj.length; i++) {
        for (let j = i + 1; j < obj.length; j++) {
            if (obj[i] > obj[j]) {
                const temp = obj[i];
                obj[i] = obj[j];
                obj[j] = temp;
            }
        }
    }
    return obj;
}
function sortByKey(object) {
    return Object.keys(object).sort().reduce((r, k) => (r[k] = object[k], r), {});
}
function sortByValue(object) {
    return Object.keys(object).sort((a, b) => object[a] - object[b]).reduce((r, k) => (r[k] = object[k], r), {});
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
}
function loop(amount, callback) {
    for (let i = 0; i < amount; i++) {
        callback(i);
    }
}
class AtzukiDollar {
    constructor() {
        this.version = "1.0.0";
        this.randInt = randInt;
        this.randBool = randBool;
        this.max = max;
        this.min = min;
        this.isEqual = isEqual;
        this.flatten = flatten;
        this.sortByKey = sortByKey;
        this.sortByValue = sortByValue;
        this.shuffle = shuffle;
        this.replaceAll = replaceAll;
        this.loop = loop;
    }
    get getVersion() {
        return this.version;
    }
}
if (typeof window === "undefined") {
    module.exports = new AtzukiDollar();
}
