---
title: 'React Hooks useMemo'
date: '2020-01-15'
description: 'useMemo'
---

# useMemo

Memoization is an optimisation technique that stores the result of a function call. If the function is called again with the same inputs, rather than completing the function again the stored value is used. 

In React terms this means that if a component is given the same state and props it would be expected to be rendered the same. Rather than rendering what would be an identical component memoized components will only be re-rendered if passed in different state or props. 
