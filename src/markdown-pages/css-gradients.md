---
title: "Gradients"
date: "2020-03-02"
---

### Gradients

Creating a gradient with two axis. Currently there isn't an option to define a gradient in this way as a single property. Instead it requires the combination of two linear-gradients that are defined at right angles to one another.

```css
body {
  background: linear-gradient(90deg, red, cyan);
  min-height: 100vh;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    mask-image: linear-gradient(to bottom, transparent, black);
    background: linear-gradient(90deg, hotpink, rebeccapurple);
  }
}
```
