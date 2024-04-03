function powerTail(x, n, result = 1) {
  if (n === 0) {
      return result;
  }
  return powerTail(x, n - 1, result * x);
}
const x = 2;
const n = 5;
console.log(`${x} піднесене в ступінь ${n} дорівнює: ${powerTail(x, n)}`);
