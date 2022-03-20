
# Atzuki Dollar

Atzuki dollar is personal Javascript library for both, the browser and the server. 
The main purpose of this library is to provide a simple, easy and fast way to use *day to day* Javascript functions.

## Installation
  NPM
```bash
npm i atzuki_dollar
```

  CDN
```html
<script src="https://cdn.jsdelivr.net/npm/atzuki_dollar/javascript/index.min.js"></script>
```

## Initialization
```javascript
const $ = require('atzuki_dollar');
```

## Use
```javascript
$.loop(10, (i) => {
  console.log(i);// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
});
$.flatten([1, 2, 3, [4, 5, 6]]); // [1, 2, 3, 4, 5, 6]
$.randBool(); // true
```

### Functions

- [camelCase](Readme.md#camelcase)
- [divisors](Readme.md#divisors)
- [each](Readme.md#each)
- [el](Readme.md#el)
- [factorial](Readme.md#factorial)
- [fibonacci](Readme.md#fibonacci)
- [flatten](Readme.md#flatten)
- [greatestCommonDivisor](Readme.md#greatestcommondivisor)
- [id](Readme.md#id)
- [isDivisibleBy](Readme.md#isdivisibleby)
- [isEqual](Readme.md#isequal)
- [isEven](Readme.md#iseven)
- [isOdd](Readme.md#isodd)
- [isPalindrome](Readme.md#ispalindrome)
- [isPrime](Readme.md#isprime)
- [kebabCase](Readme.md#kebabcase)
- [leastCommonMultiple](Readme.md#leastcommonmultiple)
- [log](Readme.md#log)
- [loop](Readme.md#loop)
- [lowerCase](Readme.md#lowercase)
- [max](Readme.md#max)
- [min](Readme.md#min)
- [pascalCase](Readme.md#pascalcase)
- [pow](Readme.md#pow)
- [randBool](Readme.md#randbool)
- [randFloat](Readme.md#randfloat)
- [randInt](Readme.md#randint)
- [randPassword](Readme.md#randpassword)
- [randString](Readme.md#randstring)
- [replaceAll](Readme.md#replaceall)
- [reverse](Readme.md#reverse)
- [sentenceCase](Readme.md#sentencecase)
- [shuffle](Readme.md#shuffle)
- [snakeCase](Readme.md#snakecase)
- [sort](Readme.md#sort)
- [sortByKey](Readme.md#sortbykey)
- [sortByValue](Readme.md#sortbyvalue)
- [text](Readme.md#text)
- [titleCase](Readme.md#titlecase)
- [type](Readme.md#type)
- [upperCase](Readme.md#uppercase)

## Functions

### camelCase

▸ **camelCase**(`string`): `string`

Transform string to camelCase.

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

#### Defined in

index.ts:226

___

### divisors

▸ **divisors**(`n`): `number`[]

Returns all divisors of a number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`number`[]

#### Defined in

index.ts:68

___

### each

▸ **each**(`array`, `cb`): `void`

Loop for each element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `cb` | (`element`: `any`, `index?`: `number`) => `void` |

#### Returns

`void`

#### Defined in

index.ts:211

___

### el

▸ **el**(`name`): `HTMLElement` \| ``null``

document.querySelector wrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`HTMLElement` \| ``null``

#### Defined in

index.ts:323

___

### factorial

▸ **factorial**(`n`): `number`

Return the factorial of the given number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`number`

#### Defined in

index.ts:88

___

### fibonacci

▸ **fibonacci**(`n`): `number`

Return the fibonacci number of the given index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`number`

#### Defined in

index.ts:95

___

### flatten

▸ **flatten**(`obj`): `any`

Flatten the given array or object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`any`

#### Defined in

index.ts:154

___

### greatestCommonDivisor

▸ **greatestCommonDivisor**(`a`, `b`): `number`

Find the greatest common divisor of two numbers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`number`

#### Defined in

index.ts:32

___

### id

▸ **id**(`id`): `HTMLElement` \| ``null``

document.getElementById wrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`HTMLElement` \| ``null``

#### Defined in

index.ts:316

___

### isDivisibleBy

▸ **isDivisibleBy**(`n`, `by`): `boolean`

Check if given numbers is divisible by another number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `by` | `number` |

#### Returns

`boolean`

#### Defined in

index.ts:102

___

### isEqual

▸ **isEqual**(`a`, `b`): `boolean`

Check if numbers are equal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`boolean`

#### Defined in

index.ts:16

___

### isEven

▸ **isEven**(`n`): `boolean`

Check if Numbers is even.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`boolean`

#### Defined in

index.ts:54

___

### isOdd

▸ **isOdd**(`n`): `boolean`

Check if Numbers is odd.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`boolean`

#### Defined in

index.ts:61

___

### isPalindrome

▸ **isPalindrome**(`n`): `boolean`

Check if Numbers is palindrome.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`boolean`

#### Defined in

index.ts:47

___

### isPrime

▸ **isPrime**(`n`): `boolean`

Check if number is prime.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`boolean`

#### Defined in

index.ts:23

___

### kebabCase

▸ **kebabCase**(`string`): `string`

Transform string to kebab-case.

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

#### Defined in

index.ts:235

___

### leastCommonMultiple

▸ **leastCommonMultiple**(`a`, `b`): `number`

Find the least common multiple of two numbers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`number`

#### Defined in

index.ts:40

___

### log

▸ **log**(...`args`): `void`

Console.log() shortcut. Each argument will be separated by a space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

index.ts:303

___

### loop

▸ **loop**<`T`\>(`amount`, `cb`): `void`

Create a for loop.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |
| `cb` | (`i`: `number`) => `T` |

#### Returns

`void`

#### Defined in

index.ts:294

___

### lowerCase

▸ **lowerCase**(`string`): `string`

Transform string to lower case.

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

#### Defined in

index.ts:281

___

### max

▸ **max**(...`args`): `number`

Get the greater of values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `number`[] |

#### Returns

`number`

#### Defined in

index.ts:4

___

### min

▸ **min**(...`args`): `number`

Get the lesser of values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `number`[] |

#### Returns

`number`

#### Defined in

index.ts:10

___

### pascalCase

▸ **pascalCase**(`string`): `string`

Transform string to PascalCase.

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

#### Defined in

index.ts:249

___

### pow

▸ **pow**(`base`, `exponent`): `number`

Return a number representing the given base taken to the power of the given exponent.

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | `number` |
| `exponent` | `number` |

#### Returns

`number`

#### Defined in

index.ts:81

___

### randBool

▸ **randBool**(): `boolean`

Get random boolean, true or false

#### Returns

`boolean`

#### Defined in

index.ts:124

___

### randFloat

▸ **randFloat**(`min`, `max`): `number`

Generate a random floating point number between the given interval.

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

`number`

#### Defined in

index.ts:108

___

### randInt

▸ **randInt**(`min`, `max?`): `number`

Generate a random number between min and max

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max?` | `number` |

#### Returns

`number`

#### Defined in

index.ts:117

___

### randPassword

▸ **randPassword**(`length?`): `string`

Generate random password

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `length` | `number` | `10` |

#### Returns

`string`

#### Defined in

index.ts:131

___

### randString

▸ **randString**(`length?`): `string`

Generate random string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `length` | `number` | `10` |

#### Returns

`string`

#### Defined in

index.ts:143

___

### replaceAll

▸ **replaceAll**(`string`, `search`, `replace`): `string`

Replace all occurrences of a string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |
| `search` | `string` |
| `replace` | `string` |

#### Returns

`string`

#### Defined in

index.ts:219

___

### reverse

▸ **reverse**(`string`): `string`

Reverse string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

#### Defined in

index.ts:288

___

### sentenceCase

▸ **sentenceCase**(`string`): `string`

Transform string to sentence case.

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

#### Defined in

index.ts:258

___

### shuffle

▸ **shuffle**<`T`\>(`array`): `T`[]

Shuffle the given array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |

#### Returns

`T`[]

#### Defined in

index.ts:200

___

### snakeCase

▸ **snakeCase**(`string`): `string`

Transform string to snake_case.

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

#### Defined in

index.ts:242

___

### sort

▸ **sort**(`obj`): `number`[] \| `string`[]

Sort given array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `number`[] \| `string`[] |

#### Returns

`number`[] \| `string`[]

#### Defined in

index.ts:169

___

### sortByKey

▸ **sortByKey**<`T`\>(`object`): `T`

Sort given object by their keys.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `T` |

#### Returns

`T`

#### Defined in

index.ts:185

___

### sortByValue

▸ **sortByValue**(`object`): `any`

Sort given object by their values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

`any`

#### Defined in

index.ts:192

___

### text

▸ **text**(`el`): `string`

InnerText of the given element

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |

#### Returns

`string`

#### Defined in

index.ts:330

___

### titleCase

▸ **titleCase**(`string`): `string`

Transform string to Title case.

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

#### Defined in

index.ts:265

___

### type

▸ **type**(`value`): `string`

Return type of the given value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

index.ts:310

___

### upperCase

▸ **upperCase**(`string`): `string`

Transform string to upper case.

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

#### Defined in

index.ts:274
