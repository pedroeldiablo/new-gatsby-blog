---
title: "React Hooks - useEffect"
date: "2020-01-13"
description: "useEffect"
---

# useEffect

The Effect Hook, useEffect adds the ability to complete tasks such as fetching data, manually changing the DOM or setting up subscriptions, which can affect other components and which can't be done before rendering.

They fill a role similar to the component lifecycle methods (componentDidMount, componentDidUpdate and componentWillUnmount) but as a single API.

How do they work?

useEFfect are functions that run after the changes to the DOM. By default they are run after every render - including the first.

As they are declared inside the functional component they have access to it's scope including state varibles props and state.

You can optionally specify clean up by returning a function from an effect, for example subscribing in the effect and then unsubscribing in the returned function.

```js
import React, { useState, useEffect } from "react"

function Example() {
  const [count, setCount] = useState(0)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```
