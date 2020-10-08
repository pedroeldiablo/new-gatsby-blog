---
title: "React Hooks useReducer"
date: "2020-02-29"
description: "useReducer"
---

# useReducer

The useReducer hook can be used as an alternative to useState, and is particularly helpful if you have complex state logic. It also allows you to avoid having to pass down a callback, as you can pass down a dispatch instead, which can have performance benefits as well as helping simplify a

```
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

There are two options for initialising useReducer, either passing the initial state directly as the second argument or through creating the initial state lazily by passing an init function as the third argument.

Passing initial state directly

```js
const [state, dispatch] = useReducer(reducer, { count: initialCount })
```

Passing initial state from an init function.

```js
function init(initialCount) {
  return { count: initialCount }
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    case "reset":
      return init(action.payload)
    default:
      throw new Error()
  }
}

function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init)
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  )
}
```

If the same value is returned from a reducer as the current state then React bails out without firing effects or rendering the children. The component that useReducer is called on may still be rendered however it won't unnecessarily go deeper into the tree. An option for optimising if there are expensive calculations to do while rendering is to impliment useMemo.
