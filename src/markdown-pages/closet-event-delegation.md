---
title: "Event Listeners, Event Delegation and Closest()"
date: "2019-12-03"
---

### Adding Event Listeners, Event Delegation and Closest()

DOM elements that are added or removed dynamically can create headaches when it comes to adding event listeners. Event delegation provides a route around this by adding the event listener to a parent element. 

```js
const p = document.querySelector('p');

document.addEventListener('click', e => {
    const isOutside = !e.target.closest('.model-inner');
    p.textContent = `You Clicked ${isOutside ? 'Outside' : 'Inside'}!`};

});

```
