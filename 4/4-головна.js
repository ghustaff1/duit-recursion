function countStepsRecursive(n) {
  if (n === 1) {
      return 1;
  }
  if (n === 2) {
      return 2;
  }
  return countStepsRecursive(n - 1) + countStepsRecursive(n - 2);
}

const n = 6;
if(n>=-1 && n <=45){
  console.log(`Кількість унікальних комбінацій для n = ${n}: ${countStepsRecursive(n)}`);
}
else{
  console.log('-1<=n<=45')
}
