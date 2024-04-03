function fibonacci(n) {
  if (n <= 1) {
      return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
const n = 10;
console.log(`Число Фібоначчі для n = ${n}: ${fibonacci(n)}`);
