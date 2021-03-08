---
title: "Markdown Mastery - Links"
date: "2019-12-02"
---

# How to Link

## Inline Links

### URLS

URLS in <> angle brackets will be automatically turned into links. <http://www.peternicholaswilliams.com/about/>.

Some versions of markdown will automatically make all URLs links, but Github doesn't.

### Square Brackets

Square brackets around the visible text followed by round brackets containing a url and if required a string which becomes the link title.

[A link in square brackets followed by (https://www.google.com "I'm gonna go to Google")](https://www.google.com "I'm gonna go to Google")

## Reference Links

Links can also be referenced. Square brackets around the visible text followed by another set of square brackets around a reference text or number. This matches to a reference that takes the format of a set of square brackets followed by a colon and then the url.

[A reference link to my portfolio][the referenced link]

[A reference link to the contact page of my portfolio][1]

[the referenced link]: http://www.peternicholaswilliams.com/
[1]: http://www.peternicholaswilliams.com/contact.html

If a second set of square brackets isn't supplied with reference text then the display text is match to a reference link.

[http://www.peternicholaswilliams.com/projects/]

or case insensitive so these both referenc ethe same link.

[The referenced link][the referenced link]

[http://www.peternicholaswilliams.com/projects/]: http://www.peternicholaswilliams.com/projects/
