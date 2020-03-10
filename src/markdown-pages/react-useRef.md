---
title: 'useRef'
date: '2020-03-10'
description: 'The useRef Hook'
---

# useRef Hook

The useRef hook creates a plain javascript object that allows you to store a mutable value. This can be a reference to a DOM node, a function, a number etc. 

The value is stored as the .current value. 

```js
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

Mutating the `.current` value doesn't cause a re-render. 
