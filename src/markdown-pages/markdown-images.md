---
title: "Markdown Images"
date: "2019-12-02"
---

# Adding Images 

## Inline Images

### Square Brackets

Exclamation point followed by square brackets around the alt text and round brackets containing a url and if required a string which becomes the image title. 

`![A link in square brackets followed by (https://peter-ldn-gatsby-blog.netlify.com/static/48feca0b8b79eef483ad5b6ffa6bd751/19d57/thinking-about-code.png)](https://peter-ldn-gatsby-blog.netlify.com/static/48feca0b8b79eef483ad5b6ffa6bd751/19d57/thinking-about-code.png "This is either a small dude or a huge laptop")`

![A link in square brackets followed by (https://peter-ldn-gatsby-blog.netlify.com/static/48feca0b8b79eef483ad5b6ffa6bd751/19d57/thinking-about-code.png)](https://peter-ldn-gatsby-blog.netlify.com/static/48feca0b8b79eef483ad5b6ffa6bd751/19d57/thinking-about-code.png "This is either a small dude or a huge laptop")

## Reference Images

Links can also be referenced. Exclamation mark followed by square brackets around the alt text followed by another set of square brackets around a reference text or number. This matches to a reference that takes the format of a set of square brackets followed by a colon and then the url. 

[A reference link to the image created by omitting the preceeding ! Referenced by text][The referenced link]

`![A reference link to my portfolio][The referenced link]`

![A reference link to my portfolio][The referenced link]

[A reference link to the image created by omitting the preceeding ! Referenced by number][1]

`![A reference link to the contact page of my portfolio][1]`

![A reference link to the contact page of my portfolio][1]

`[The referenced link]: https://peter-ldn-gatsby-blog.netlify.com/static/48feca0b8b79eef483ad5b6ffa6bd751/19d57/thinking-about-code.png "Title text"`


`[1]: https://peter-ldn-gatsby-blog.netlify.com/static/48feca0b8b79eef483ad5b6ffa6bd751/19d57/thinking-about-code.png "The other title text"`

[The referenced link]: https://peter-ldn-gatsby-blog.netlify.com/static/48feca0b8b79eef483ad5b6ffa6bd751/19d57/thinking-about-code.png "Title text"
[1]: https://peter-ldn-gatsby-blog.netlify.com/static/48feca0b8b79eef483ad5b6ffa6bd751/19d57/thinking-about-code.png "The other title text"
