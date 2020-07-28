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

#### Numeric

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

SecondGeneration.Storm // returns 0
SecondGeneration.Wolverine // returns 3
SecondGeneration.Thunderbird // returns 6
```

In the above Storm = 0, Colossus = 1, Nightcrawler = 2 etc.

However if we choose to we can initialise the first member with a value we define.

```ts
enum SecondGeneration {
  Storm = 3,
  Colossus,
  Nightcrawler,
  Wolverine,
  Banshee,
  Sunfire,
  Thunderbird,
}

SecondGeneration.Storm // returns 3
SecondGeneration.Wolverine // returns 6
SecondGeneration.Thunderbird // returns 9
```

Susequent members are still incremented, so for this case Colossus = 4.

We can also explictly assign each memeber a value, and these do not have to be unique or sequential.

```ts
enum SecondGeneration {
  Storm = 3,
  Colossus = 2,
  Nightcrawler = 2,
  Wolverine = 5,
  Banshee = 1,
  Sunfire = 6,
  Thunderbird = 0,
}

SecondGeneration.Storm // returns 3
SecondGeneration.Wolverine // returns 5
SecondGeneration.Thunderbird // returns 0
```

Enums can also be assigned computed values.

```ts
enum SecondGeneration {
  Storm = getPowerCode("Storm"),
  Colossus = 2,
  Nightcrawler = 2,
  Wolverine = getPowerCode("Wolverine"),
  Banshee = 1,
  Sunfire = 6,
  Thunderbird = Wolverine * 2,
}

function getPowerCode(teammateName: string): number {
  if (teammateNam === "Wolverine") {
    return 5
  }
  return 3
}

SecondGeneration.Storm // returns 3
SecondGeneration.Wolverine // returns 5
SecondGeneration.Thunderbird // returns 10
```

When including both computed and and constant members uninitialised members must either come first, or after members initialised with numeric constants.

The below will error.

```ts
enum SecondGeneration {
  Storm = getPowerCode("Storm"),
  Colossus, // Error: Enum member must have initializer
  Nightcrawler = 2,
  Wolverine = getPowerCode("Wolverine"),
  Banshee = 1,
  Sunfire = 6,
  Thunderbird = Wolverine * 2,
}

function getPowerCode(teammateName: string): number {
  if (teammateName === "Wolverine") {
    return 5
  }
  return 3
}
```

Changing the order so that a numeric value is assigned directly before the uninitiated member fixes this problem.

```ts
enum SecondGeneration {
  Wolverine = getPowerCode("Wolverine"),
  Banshee = 1,
  Nightcrawler = 2,
  Sunfire = 6,
  Colossus,
  Storm = getPowerCode("Storm"),

  Thunderbird = Wolverine * 2,
}

enum SecondGenerationA {
  Colossus,
  Storm = getPowerCode("Storm"),
  Nightcrawler = 2,
  Wolverine = getPowerCode("Wolverine"),
  Banshee = 1,
  Sunfire = 6,
  Thunderbird = Wolverine * 2,
}

function getPowerCode(teammateName: string): number {
  if (teammateName === "Wolverine") {
    return 5
  }
  return 3
}

console.log("Storm", SecondGeneration.Storm) // returns "Storm", 3
console.log("Wolverine", SecondGeneration.Wolverine) // returns "Wolverine", 5
console.log("Thunderbird", SecondGeneration.Thunderbird) // returns "Thunderbird", 10

// Access String Enum
console.log("Nightcrawler", SecondGeneration["Nightcrawler"]) // returns "Nightcrawler", 2
console.log("Colossus ", SecondGeneration["Colossus"]) // returns "Colossus", 7
console.log("Colossus ", SecondGenerationA["Colossus"]) // returns "Colossus", 0
```

#### Numeric Enum Gotchas

As it is possible for members to be assigned the same value, and as numeric values will be incremented unless defined, the following is true.

```ts
enum Color {
  Red = 3,
  Green = 2,
  Blue,
}

console.log(Color.Red === Color.Blue) //true
```

#### Strings

In the same way that we can assign numeric values to members of an enum we can also use string literals. These can be defined in single or double quotes and with backticks.

```ts
enum SecondGeneration {
  Storm = "WEATHER MANIPULATION",
  Colossus = "ORGANIC STEEL FORUM",
  Nightcrawler = "TELEPORTATION",
  Wolverine = "HEALING FACTOR",
  Banshee = "SONIC SCREAM",
  Sunfire = "ATOMIC FIRE",
  Thunderbird = "SUPERHUMAN REFLEXES",
}

console.log(SecondGeneration.Storm) // returns "WEATHER MANIPULATION"
console.log(SecondGeneration.Wolverine) // returns "HEALING FACTOR"
console.log(SecondGeneration.Thunderbird) // returns "SUPERHUMAN REFLEXES"

// Access String Enum
console.log(SecondGeneration["Nightcrawler"]) // returns "TELEPORTATION"
```

#### String Enum Gotchas

As with numeric values string literals can be the same.

```ts
enum Powers {
  Storm = "WEATHER MANIPULATION",
  Polaris = `MAGNETISM`,
  Magneto = "MAGNETISM",
}

console.log(Powers.Storm === Powers.Polaris) //false
console.log("Magneto equals Polaris?", Powers.Magneto === Powers.Polaris) //true

console.log(Powers["Magneto"]) // "MAGNETISM"
console.log(Powers["Polaris"]) // "MAGNETISM"
```

#### Heterogeneous

Enums can contain a combination of both numeric and string values.

```ts
enum SecondGeneration {
  Storm = "WEATHER MANIPULATION",
  Colossus = "ORGANIC STEEL FORUM",
  Wolverine = "HEALING FACTOR",
  Nightcrawler = 5,
  Banshee,
  Sunfire,
  Thunderbird,
}

console.log(SecondGeneration.Storm) // returns "WEATHER MANIPULATION"
console.log(SecondGeneration.Wolverine) // returns "HEALING FACTOR"
console.log(SecondGeneration.Thunderbird) // returns 8

// Access String Enum
console.log(SecondGeneration["Nightcrawler"]) // returns 5
```

Note: It is not possible to use computed values in heterogeneous enums as they result in the error `Computed values are not permitted in an enum with string valued members.`
