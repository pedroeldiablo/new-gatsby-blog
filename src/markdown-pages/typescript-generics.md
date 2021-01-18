---
title: "Generics"
date: "2021-01-16"
description: "What are Generics and how do they help code reusability"
---

# Generics

Generics allow you to maintain type consistency without having to compromise reusability.

```ts
// type definition - const lastNumber: (arr: Array<number>) => number
const lastNumber = (arr: Array<number>): number => {
  return arr[arr.length - 1]
}
```

lastNumber is a function which accepts and array of numbers.

The function returns the last element in the array which is also a number. In the definition we have explicitly stated these types.

However if we just want to return the last element in an array we don't need to know what the array is made. The function to do this works the same whether we are looking at an array of numbers, strings, objects etc. Find the element are index one less than the array length.

We could make our function accept an array of type any.
This will let us pass in an array strings or numbers, or objects or booleans etc.
What we lose in doing this is some of the type definition.
If we pass in an array of strings we would expect to get a string returned. However the type definition will tell us that we are returning a type any. We've lost this specificity in the definition.

```ts
// type definition - const lastAny: (arr: Array<any>) => any
const lastAny = (arr: Array<any>) => {
  return arr[arr.length - 1]
}
```

lastGen and lastGeneric are functions that accept an array of type T. T is just a variable name, but this is the commonly used name. It stands for the generic type. We could just have easily have said Element or some other name instead of T, however for someone else reading it, this pattern is more recognisable.
The function returns the last element in the array which also inferred as type T.

**_Note the trailing comma is used to prevent TS from reading `<T>` is a JSX element without a closing tag [Generic usage reported as JSX Error #15713](https://github.com/microsoft/TypeScript/issues/15713)_**

```ts

const lastGen = <T,>(arr: Array<T>) => {
    return arr[arr.length - 1];

// Equivalent

const lastGeneric = <T,>(arr: T[]) => {
    return arr[arr.length - 1];
};

```

Here we pass in an array of numbers and Typescript infers that type T is a number `const l: number`.

`const l = lastGeneric([1, 2, 3]);`

Here we pass in an array of strings, but explicitly state that the type T will be a string `const l2: string`.

`const l2 = lastGeneric<string>(["a", "b", "c"]);`

```ts
// function loggingIdentity<T>(arg: T[]): T[]
 function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
  }

// function loggingLength<T>(arg: T[]): number
  function loggingLength<T>(arg: T[]) {
    console.log(arg.length);
    return arg.length;
  }

  const log1 = loggingIdentity([1, 2, 3, 4]);
  const log2 = loggingLength([1, 2, 3]);

  console.log(log1);
  console.log(log2);

  logs to the console

// [LOG]: 4  - when log1 is initialised - this is the array.length
// [LOG]: 3 - when log2 is initialised - this is the array.length
// [LOG]: [1, 2, 3, 4] - what log1 is assigned as the array
// [LOG]: 3 - what log2 is assigned as the array length
```

We can accept more than one generic type as arguments.

```ts
const makeArr = <X, Y>(x: X, y: Y) => {
  return [x, y]
}

// v1 would implicitly return an array of numbers
// const v: number[]
let v1 = makeArr(5, 6)

// v2 would implicitly return an array of strings
// let v2: string[]
let v2 = makeArr("a", "b")

// v3 would implicitly return an array of unions
// let v3: (string | number)[]
let v3 = makeArr("a", 5)

//let v4: (string | number)[]
let v4 = makeArr(5, "b")

// v5 would explicitly return an array of unions
// let v5: (string | number | null)[]
let v5 = makeArr<string | null, number>("a", 5)
```

```ts
const makeArray = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y]
}

//let v: [number, number]
let v = makeArray(5, 6)

// let v2: [string, string]
let v2 = makeArray("a", "b")

// let v3: [string, number]
let v3 = makeArray("a", 5)

//let v4: [number, string]
let v4 = makeArray(5, "b")

// let v5: [string, number]
let v5 = makeArray(5, "a")

// This assignment meets the type definition and so will be to reassign v5 to this.
v5 = [7, "d"]
```

While from v3 we know that makeArray will accept these arguments v5 now has a definition that expects the return to be typed [number, string].

Variable v5 will be squiggly underlined. Type '[string, number]' is not assignable to type '[number, string]'.

```ts
v5 = makeArray("a", 5)
```

The string "d" will be squiggly underlined. Type 'string' is not assignable to type 'number'

The number 7 will also be squiggly underlined. Type 'number' is not assignable to type 'string'.
v5 = ["d", 7]

```ts
// let v6: [null, number]
let v6 = makeArray(null, 5)
```

Intellisense will highlight that in v7 the second argument is being explicitly typed as a number. Passing in null will not work.

```ts
// const v7: [string | null, number]
const v7 = makeArray<string | null, number>(null, null)

// This would be fine
// const v8: [string | null, number | null]
const v8 = makeArray<string | null, number | null>(null, null)
```

From v7 onwards, as we are now setting the return type of the function we get a more specific type definition. This is a tuple like array with types expected in position.

```ts
const makeArray = <X, Y>(x: X, y: Y): [X, Y | null] => {
  return [x, null]
}

//const v: [number, number]
const v = makeArray(5, 6)
// const v2: [string, string]
const v2 = makeArray("a", "b")
const v3 = makeArray("a", 5)
//const v4: (string | number)[]
const v4 = makeArray(5, "b")
// const v5: [string | null, number]
const v5 = makeArray<string | null, number>("a", 5)
// const v6: [string | null, number | null]
const v6 = makeArray<string | null, number>(null, 5)
```

In v7 Intellisense will highlight that the second argument is being explicitly typed as a number. Passing in null will not work even though it would have no impact on the return

```ts
// const v7: [string | null, number | null]
const v7 = makeArray<string | null, number>(null, null)
// This would be fine
// const v8: [string | null, number | null]
const v8 = makeArray<string | null, number | null>(null, null)
```

You can set a default value which you can then override if wanted. A common use case for this will be when setting the type to any. This allows for better type definitions going forward.

**_For disambiguation in TSX files here the arrow function is replaced with a function expression._**

```ts
const makeArray = function<X = number, Y = any>(x: X, y: Y): [X, Y | null] {
  return [x, y]
}

//const v9: [number, string | null]
// Using the defaults
let v9 = makeArray(5, "Bob")
// This will not work as it is inferred that the type of y in the return is a string. Type 'number' is not assignable to type 'string | null'.
v9 = [5, 10]

//const v10: [string, any]
// Defining the type of the first argument as a string
// Typescript no longer infers the type of y in the return so we can reassign v10 with any type for y.
let v10 = makeArray<string>("hello", "Bob")
v10 = ["bonjour", 10]

// const v11: [number, string | null]
let v11 = makeArray<number, string>(5, "hello")
// Type 'string' is not assignable to type 'number'. We can still pass in null for the value of y, as this matches the return type of y.
v11 = ["bonjour", null]
```

### Extending generics

It is possible to define a generic in such a way that we are applying some constraints.
We might want to guarantee it will have certain fields.

Someone filling in a form for example would return all the required fields, but not necessarily the optional, and we might later extend the form and want to pick-up the extra fields created.

```ts
// const makeUser: <T extends {firstName: string; middleName?: string | undefined; lastName: string;}>(obj: T) => T & {fullName: string;}
const makeFullUser = <
  T extends { firstName: string; middleName?: string; lastName: string }
>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.hasOwnProperty("middleName")
      ? `${obj.firstName} ${obj.middleName} ${obj.lastName}`
      : `${obj.firstName} ${obj.lastName}`,
  }
}

// let v4: {firstName: string;lastName: string;} & {fullName: string;}
let v4 = makeFullUser({ firstName: "bob", lastName: "hope" })

// Danger it does seem to be possible to reassign v4 without warnings
// The type definition doesn't change, but the value for fullName will
// let v4: {firstName: string;lastName: string;} & {fullName: string;}
v4 = makeFullUser({
  ...v4,
  middleName: "no",
  age: 115,
})

// Spreading the value of v4 into a new variable works and updates the type definition
// let v6: {middleName: string;age: number;firstName: string;lastName: string;fullName: string;} & {fullName: string;}
let v6 = makeFullUser({
  ...v4,
  middleName: "no",
  age: 115,
})

// const v5: {firstName: string; middleName: string;lastName: string;age: number;} & {fullName: string;}
let v5 = makeFullUser({
  firstName: "bob",
  middleName: "no",
  lastName: "hope",
  age: 115,
})

console.log(v4)
console.log(v6)
console.log(v4.fullName)
console.log(v5.age)
```

### Generics and Interfaces

```ts
interface Susan {
  id: string
}

interface Name {
  name?: string
  size: number
}

interface LabeledValue {
  label: string
}

function printLabel(labeledObj: Susan & Name) {
  console.log(labeledObj.size)
}

let myObj = { size: 10, id: "Size 10 Object" }
printLabel(myObj)
```

It's also possible to define an interface that accepts a generic. This is helpful when creating new types

```ts
interface Single<T> {
  id: string
  position: number
  data: T
}

type NumberSingle = Single<number>
type StringSingle = Single<string>

type NumberSingleDefined = {
  id: string
  position: number
  data: number
}

const Toxic: NumberSingleDefined = { id: "Britney", position: 1, data: 200 }
const Womanizer: NumberSingle = { id: "Britney", position: 1, data: 200 }
const Brave: StringSingle = { id: "Christina", position: 1, data: "Mulan" }
```

React Props

```tsx
import React, { useState } from "react"

interface Props {
  name: string
}

// As we can tell form the angle brackets Props is a generic
// State is also a generic

const HelloWorldRC: React.FC<Props> = ({ name }) => {
  const [state] = useState({ fullname: "" })

  return <div>hello {name}</div>
}

console.log(HelloWorldRC({ name: "Jill" }))

// We can override the generic and provide a better type definition

const HelloWorld: React.FC<Props> = ({ name }) => {
  const [state] = useState<{ fullname: string | null }>({
    fullname: "Katherine",
  })

  return (
    <div>
      hello {name} {state}
    </div>
  )
}

console.log(HelloWorld({ name: "Sonic" }))
```

JSX Render Props

Generics can also be used within React render props. This approach is used in Formik and React Router - Route.

The big advantages are auto completion and type safety.

```tsx
// interface FormProps<T>
interface FormProps<T> {
  values: T
  children: (values: T) => JSX.Element
}
```

```tsx
// const Form: <T extends {}>({ values, children }: FormProps<T>) => JSX.Element
const Form = <T extends {}>({ values, children }: FormProps<T>) => {
  return children(values)
}
```

```tsx
// const App: React.FC<{}>

const App: React.FC = () => {
  return (
    <div className="App">
      <Form<{ lastName: string | null }> values={{ lastName: "" }}>
        {values => <div>{values.lastName}</div>}
      </Form>
    </div>
  )
}

export default App
```

[Largely a breakdown with further examples of Ben Awad's video on generics](https://www.youtube.com/watch?v=nViEqpgwxHE)
