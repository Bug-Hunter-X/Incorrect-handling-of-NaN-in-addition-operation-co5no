# Incorrect handling of NaN in addition operation

This repository demonstrates a common JavaScript bug related to the incorrect handling of NaN (Not a Number) during arithmetic operations. The `foo` function is designed to add two numbers, but it fails when either input is NaN. 

## Description
The `bug.js` file contains a function that should add two numbers.  The function works correctly for most inputs, however, the function fails when either input is NaN.  The solution demonstrates how to handle this edge case using type checking or `isNaN()`.

## Solution
The `bugSolution.js` file shows a corrected version of the function that explicitly handles NaN values, ensuring a more robust and predictable outcome.

## How to run

1. Clone this repository.
2. Navigate to the cloned directory.
3. Run the files using Node.js: `node bug.js` and `node bugSolution.js`
