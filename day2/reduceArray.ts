type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  if (!nums.length) return init;
  let finalValue = init
  nums.forEach((number, index) => {
    finalValue = fn(finalValue, number);
  });
  return finalValue;
}
