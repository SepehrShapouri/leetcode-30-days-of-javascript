function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  let newArray: number[] = [];

  for (const element of arr) {
    let newValue = fn(element, arr.indexOf(element));
    newArray.push(newValue);
  }
  return newArray;
}

const array = [1, 2, 3];
function plusOne(n: number) {
  return n + 1;
}

function plusI(n: number, i: number) {
  return n + i;
}
function constant() {
  return 42;
}
console.log(map(array, plusI));
