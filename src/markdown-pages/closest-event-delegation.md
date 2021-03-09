---
title: "Event Listeners, Event Delegation and Closest()"
date: "2020-03-09"
---

### Adding Event Listeners, Event Delegation and Closest()

DOM elements that are added dynamically can be a headache when it comes to event listeners.

If you have a script that adds event listeners to an element that is run on load then these new elements wont have existed and so wont have the listeners added.

An example might be a shop page. When a filter is applied the whole page could be reloaded, however another option is to fetched the products and related data based on the query and then only render them. This has the benefit of not requiring the whole page to be fetched and then painted, however the newly rendered items wont have any event listeners attached as the script that loaded these ran onload.

Event delegation provides a route around this by adding the event listener to a parent element on the page that isn't changed. This way the element that the listener is attached to still exists even if it's content has changed.

### event.target, this, and event.currentTarget

The `event.target` is the deepest nested element in DOM tree on which the event was triggered. The event then bubbles up the DOM tree.

The `this` for the event handler is the element that the event handler is attached to. This is also the `event.currentTarget` in the context of the event handler.

```js
const p = document.querySelector('p');

document.addEventListener('click', e => {
    const isOutside = !e.target.closest('.model-inner');
    p.textContent = `You Clicked ${isOutside ? 'Outside' : 'Inside'}!`};
});
```

Find the first paragraph in the document, and save this as the variable p.

Add an eventListener for click events on the document. In the context of the event set the variable to be the return of `!e.target.closest('.model-inner')`. The .closest() method traverses from the element through any parents of the element until it finds a node that matches the selector or reaches the root. It returns the matching node or if no nodes match 'null'.

In this case it will look for a parent that has the class of 'model-inner'. If there is a match it means that the click event was triggered on an element inside the model-inner and so the value of isOutside would be false.

### Where did my event go?

The bubbling process that carries the event up can be stopped. In most case the effect is intentional however it can have unintended impacts.

An eventHandler can call `event.stopPropagation()`. In the context of that handler the event will no longer bubble-up. However an element may have multiple listeners attached. You can also call `event.stopImmediatePropagation()` this prevents subsequent handlers on the current element from running and stops bubbling.

The impact of these methods would be that the events are no longer bubbled, and so they would no longer trigger the delegated events.
