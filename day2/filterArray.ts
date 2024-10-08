type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
  const newArray: number[] = [];
  arr.forEach((item,index) => {
    const satisfiedCondition = fn(item,index);
    if (satisfiedCondition) {
      newArray.push(item);
    }
  });
  return newArray;
}
