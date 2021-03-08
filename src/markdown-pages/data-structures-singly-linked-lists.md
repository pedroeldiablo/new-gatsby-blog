---
title: "Data Structures - Singly Linked Lists"
date: "2020-05-03"
description: "Data Structures - Singly Linked Lists"
---

Singly linked lists store data in order, with each node containing its value and a link to the next node.

There is no indexing and as such the list can only be easily read in one direction.

They can be useful if you need to track the order of something as it it is easy to add to the end and remove from the start.

Compared to an array they save space and time on indexing. This is particularly telling if you frequently need to insert or delete from the beginning. In an array this would require re-indexing the whole of the array each time.

### Big 0

Insertion is constant time. New nodes can be added to end of the list and only the old tail is updated, or added at the start and pointed at the old head.

Removal averages at O(N). As you potentially need to traverse the whole list, however removing the first item will be O(1), and most removals will be less than O(N) as only the last item would require traversing the whole list.

Search and access are also O(N) as a node could be anywhere in the list.

```js
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    var newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return undefined
    var current = this.head
    var newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }
  shift() {
    if (!this.head) return undefined
    var currentHead = this.head
    this.head = currentHead.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    currentHead.next = null
    return currentHead
  }
  unshift(val) {
    var newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(index) {
    if (index < 0 || index >= this.length) return null
    var counter = 0
    var current = this.head
    while (counter !== index) {
      current = current.next
      counter++
    }
    return current
  }
  set(index, val) {
    var target = this.get(index)
    if (target != null) {
      target.val = val
      return true
    }
    return false
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false
    else if (index === 0) {
      return !!this.unshift(val)
    } else if (index === this.length) {
      return !!this.push(val)
    } else {
      var newNode = new Node(val)
      var previous = this.get(index--)
      newNode.next = previous.next
      previous.next = newNode
      this.length++
      return true
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false
    else if (index === 0) {
      return !!this.shift()
    } else if (index === this.length - 1) {
      return !!this.pop()
    } else {
      var previous = this.get(index--)
      var target = previous.next
      previous.next = target.next
      this.length--
      return true
    }
  }
  reverse() {
    var node = this.head
    this.head = this.tail
    this.tail = node
    var next
    var prev = null
    for (var i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }
  print() {
    var arr = []
    var current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }
}

var list = new SinglyLinkedList()
list.push("hi")
list.push("handsome")
list.push("want")
list.push("some")
list.push("company")
list.push("?")
```
