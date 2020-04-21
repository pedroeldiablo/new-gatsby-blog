---
title: 'Bubble Sort'
date: '2020-04-21'
description: 'Sorting Algorithms - Merge Sort'
---

Takes a *divide and conquer* approach that relies on the idea that an array consisting of a single value is already sorted. 

Split the original array into arrays with only a single value. Then progressively recombine them sorting as you do. 

As each individual array is sorted then recombining them you only need to resort values some of the time. 

i.e. if there are two arrays `array1 = [2, 3, 4, 5]` and `array2 = [6, 7, 99, 100]`. 

As the smallest value in array2 is already higher than the highest value in array1 we only need one comparison to combine them. 

### Big 0

Time complexity O(n log n)

Space O(n)

```js
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

mergeSort([10,24,76,73])
```
