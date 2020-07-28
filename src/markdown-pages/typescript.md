---
title: "TypeScript"
date: "2020-07-27"
description: "Intro to TypeScript covering the basic principles"
---

# TypeScript

TypeScript is a superset of JavaScript. This means it includes all the features of JS but extends these further by adding static type definitions.

Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly, catching errors on compile rather than runtime.

Writing types can be optional in TypeScript, because type inference allows you to get a lot of power without writing additional code.

### Basic Types

#### Number, String and Boolean

The three most common primative types used in TypeScript are `string`, `number` and `boolean`.

These can be explicitly assigned or infered from usage.

```ts
///Explictly assigned as a string
const name: string = "Kitty Pryde"

/// Inferred type of string from usage
const codename = "Shadowcat"

///Explictly assigned as a number
const age: number = 28

///Explictly assigned as a boolean
const deceased: boolean = false

///Explictly assigned as a string. icksStrings can be defined in single or double quotes or backticks. Within a template string embedded expressions are fine.
let introduction: string = `Hello, my name is ${name}. I'm ${age +
  1} years old next month.`

///Explictly assigned as a number this would error as we are attempting to assign this to a string
const shoeSize: number = "9"
```

### Array Types

A variable can also be defined as an array. In these cases it is also possible to define the types of the content of the array.

```ts
const originalXMen: string[] = [
  "Cyclops",
  "Angel",
  "Beast",
  "Marvel Girl",
  "Iceman",
]

const originalAges: Array<number> = [18, 18, 18, 18, 16]
```

### Tuple

Tuples are an array type but with a fixed number of elements whose types are defined.

```ts
// Declare a tuple type
let xman: [string, number, boolean]
// Initialize it
xman = ["Havok", 16, false] // OK
// Initialize it incorrectly
xman = [16, "Havok", false] // Error
```

In this case when intialised incorrectly the 0th item would be a number which doesn't match the type definition of string.

### Enum

Enums allow for the declaration of a set of named constants.

These can be numeric, string or heterogeneous (a mix of numeric and string values).

Numeric enums store string values as numebers. Unless otherwise defined these start with zero and increment by 1.

```ts
enum SecondGeneration {
  Storm,
  Colossus,
  Nightcrawler,
  Wolverine,
  Banshee,
  Sunfire,
  Thunderbird,
}
```

}
