---
title: 'Bubble Sort'
date: '2020-04-21'
description: 'Sorting Algorithms - Bubble Sort'
---

Starting at the 0 index, compares values adjacent and swap their positions if the highest value is stored at the lower index. 

General trend moves higher values towards the end. Each round moves next highest value to the next available position at the end of the array. Each round needs to sort one less value than the previous.

If no swaps happen all the values are now order so we can break. 

### Big 0

O(n^2) - realies on a nested loop. Technically each round is one less sort but approximates to a quadratic.

Can be better if data almost sorted - Best O(n).

Space complexity O(1).

```js
function bubbleSort(arr){
  let noSwaps;
  for(let i = arr.length; i > 0; i--){
    noSwaps = true;
    for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);
```
