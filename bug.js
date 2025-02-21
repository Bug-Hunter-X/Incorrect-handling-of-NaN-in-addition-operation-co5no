function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Correct behavior
  } else if (a === 0) {
    return b; // Correct behavior
  } else if (b === 0) {
    return a; // Correct behavior
  } else {
    return a + b; // Incorrect behavior if a or b are NaN
  }
}

console.log(foo(1,2)); // 3
console.log(foo(0,0)); // 0
console.log(foo(0, 2)); // 2
console.log(foo(NaN, 2)); // NaN