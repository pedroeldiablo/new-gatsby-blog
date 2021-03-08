---
title: 'React Hooks useContext'
date: '2020-01-14'
description: 'useContext'
---

# useContext

Context is a way to share data down through a React component tree. Rather than manually passing down props through intermediaries, all components inside a Context can access them. 

### Declaring a Context

```js
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};
```

`const ThemeContext = React.createContext(themes.dark)`

In the above `ThemeContext` is the context object. `themes.dark` is the defaultValue. 

### Context.Provider

```js
function App() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
``` 

In this example the ThemedButton is inside the Toolbar component which is inside the ThemeContext.Provider that is returned from App. 

This means it has access to the values of the theme.light even though these aren't passed as props down through the Toolbar component. 

By setting `const theme = useContext(ThemeContext);` the button looks up the the nearest ThemeContext.Provider and can read its values. It's also subscribed to changes, so if the value of the provider changes it will rerender. (This is true even if an ancestor uses `React.memo` or for class based components `shouldComponentUpdate`)

If we replaced the `Toolbar` with the code below, the context of the button would now be provided by the Toolbar. Which means that instead of the light theme the values of the dark theme would be rendered.

```js
function Toolbar(props) {
  return (
    <div>
      <ThemeContext.Provider value={themes.dark}>
        <ThemedButton />
      </ThemeContext.Provider>
    </div>
  );
}
```
