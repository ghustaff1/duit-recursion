function power(x, n) {
  if (n === 0) {
      return 1;
  }
  if (n === 1) {
      return x;
  }
  return x * power(x, n - 1);
}

const x = 2;
const n = 5;
console.log(`${x} піднесене в ступінь ${n} дорівнює: ${power(x, n)}`);