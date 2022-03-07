
# Atzuki Dollar

Atzuki dollar is personal Javascript library for both, the browser and the server. 
The main purpose of this library is to provide a simple, easy and fast way to use *day to day* Javascript functions.

## Table of contents


### Functions

- [flatten](modules.md#markdown-header-flatten)
- [isEqual](modules.md#markdown-header-isequal)
- [loop](modules.md#markdown-header-loop)
- [max](modules.md#markdown-header-max)
- [min](modules.md#markdown-header-min)
- [randomInt](modules.md#markdown-header-randomint)
- [replaceAll](modules.md#markdown-header-replaceall)
- [sort](modules.md#markdown-header-sort)
- [sortByKey](modules.md#markdown-header-sortbykey)
- [sortByValue](modules.md#markdown-header-sortbyvalue)

## Functions

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

[index.ts:29](https://github.com/Borecjeborec1/atzuki-dollar/blob/7f85b32/typescript/index.ts#L29)

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

[index.ts:19](https://github.com/Borecjeborec1/atzuki-dollar/blob/7f85b32/typescript/index.ts#L19)

___

### loop

▸ **loop**(`amount`, `callback`): `void`

Create a for loop.

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |
| `callback` | `Function` |

#### Returns

`void`

#### Defined in

[index.ts:80](https://github.com/Borecjeborec1/atzuki-dollar/blob/7f85b32/typescript/index.ts#L80)

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

[index.ts:7](https://github.com/Borecjeborec1/atzuki-dollar/blob/7f85b32/typescript/index.ts#L7)

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

[index.ts:13](https://github.com/Borecjeborec1/atzuki-dollar/blob/7f85b32/typescript/index.ts#L13)

___

### randomInt

▸ **randomInt**(`min`, `max`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

`number`

#### Defined in

[index.ts:1](https://github.com/Borecjeborec1/atzuki-dollar/blob/7f85b32/typescript/index.ts#L1)

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

[index.ts:73](https://github.com/Borecjeborec1/atzuki-dollar/blob/7f85b32/typescript/index.ts#L73)

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

[index.ts:44](https://github.com/Borecjeborec1/atzuki-dollar/blob/7f85b32/typescript/index.ts#L44)

___

### sortByKey

▸ **sortByKey**(`object`): `any`

Sort given object by their keys.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

`any`

#### Defined in

[index.ts:60](https://github.com/Borecjeborec1/atzuki-dollar/blob/7f85b32/typescript/index.ts#L60)

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

[index.ts:67](https://github.com/Borecjeborec1/atzuki-dollar/blob/7f85b32/typescript/index.ts#L67)
