---
title: "Closures"
date: "2020-03-29"
---
### What are closures?

In many programming languages variables defined outside of a function are not available inside a function. 

```js
const myName = 'Peter'

function sayMyName() {
    console.log(myName)
}

sayMyName()
```

Every scope has access to everything outside it's scope. 

In this case when the sayMyName function is called the scoped variable for myName is 'Peter'. 

If the value for the variable was redefined then the current value when the function is called would be used. 

```js
let myName = 'Peter'

function sayMyName() {
   
    console.log(myName)
}

myName = 'Willam'

sayMyName()
```

This would return 'William' as although the value of myName when the function was defined would be 'Peter' we only care about the value when it is called. 

However if the variable was defined within the scope of the function then this value would have been the one used. 


```js
let myName = 'Peter'

function sayMyName() {
    myName = 'Nicholas'
    console.log(myName)
}

myName = 'Willam'

sayMyName()
```

Now the scoped value for myName is 'Nicholas'. 

### Functions

More commonly when thinking of closures it is in regard to functions defined within functions. 

```js

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable ' + outerVariable)
        console.log('Inner Variable ' + innerVariable)
    }
}

const newFunction = outerFunction('outside')
newFunction('inside')

```

When we define newFunction we set the value of the variable outerVariable that is passed into outerFunction. The return value of this function is what is saved as the variable newFuction. 

Essentially we are saying: 

```js

const newFuction = function innerFunction(innerVariable) {
    console.log('Outer Variable ' + 'outside')
    console.log('Inner Variable ' + innerVariable)
}

```

If we called `newFunction('inside')`. It would return console logs of 'Outer Variable outside' and 'Inner Variable inside'

newFunction stores the value for the variable outerVariable that was in scope and this remains available for use within it. 


```js

function outerFunction(outerVariable) {
    const then = new Date();
    return function innerFunction(innerVariable) {
         const now = new Date();
        console.log('Outer Variable ' + outerVariable)
        console.log('Inner Variable ' + innerVariable)
        console.log('Time then ' + then)
        console.log('Time now ' + now)
    }
}

const newFunction = outerFunction('outer was then')
newFunction('inside is now')

```

>Outer Variable outer was then

> Inner Variable inside is now

> Time then Mon Mar 30 2020 00:28:20 GMT+0100 (British Summer Time)

> Time now Mon Mar 30 2020 00:28:27 GMT+0100 (British Summer Time)

```
newFunction('inside later')
```

> Outer Variable outer was then

> Inner Variable inside later

> Time then Mon Mar 30 2020 00:28:20 GMT+0100 (British Summer Time)

> Time now Mon Mar 30 2020 00:30:07 GMT+0100 (British Summer Time)

### Common uses

Fetching data

```js
function getContent(url) {
    fetch(url).then(() => {
        console.log(url + 'was got')
    })
    .catch(error => window.alert("Opps! Was there a disconnect at " + url + "?"))
    .finally(() => this.setState({ loadingUrl: false}))
}

getContent('https://peter-ldn-gatsby-blog.netlify.com/');
```
