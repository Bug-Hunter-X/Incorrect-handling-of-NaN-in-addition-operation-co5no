function foo(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return NaN; // Handle NaN explicitly
  } else if (a === 0 && b === 0) {
    return 0;
  } else if (a === 0) {
    return b;
  } else if (b === 0) {
    return a;
  } else {
    return a + b;
  }
}

console.log(foo(1,2)); // 3
console.log(foo(0,0)); // 0
console.log(foo(0, 2)); // 2
console.log(foo(NaN, 2)); // NaN