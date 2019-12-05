---
title: "Markdown Code"
date: "2019-12-05"
---

# Including code in a markdown page

## Inline code 

Placing back-ticks around the section will highlight it as code. 

```
This whole sentence isn't code, but `this section` is and this ins't. 
```

This whole sentence isn't code, but `this section` is and this ins't. 

## Code blocks

A code block can also be included by encapsulating the code in a fence of triple back-ticks. 


```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```typescript
var s = "TypeScript syntax highlighting";
alert(s);
```

Alternatively indenting with four spaces also creates a code block. 

    var s = "JavaScript syntax highlighting";
    alert(s);

## Syntax highlighting 

Syntax highlighting isn't included in the spec for Markdown, however renderers may support it. 

If supported then generally the language name is included after the opening back-ticks. Further detail can be found at [highlight.js](https://highlightjs.org/static/demo/) 
