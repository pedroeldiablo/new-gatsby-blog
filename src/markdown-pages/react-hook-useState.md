---
title: "React Hooks useState"
date: "2020-01-13"
description: "useState"
---

# useState

```
const [state, setState] = useState(initialState);
```

Breaking this down. Array destructuring.

useState takes one arguement. This is the initial state. It returns a pair.

`state` is the current state.
`setState` is a function that allows you to update the state.

Unlike normal variables which only exist at runtime, the state variables are preserved by React. So state can persist.

#### Example

```
const [age, setAge ] = useState(37);
```

Initial state is 37.
`age` on initialisation will be 37.
`setAge` is a function that we can define to update `age`.

```js
import React, { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```
