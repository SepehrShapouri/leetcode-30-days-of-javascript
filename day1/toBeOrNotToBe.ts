type ToBeOrNotToBe = {
  toBe: (val: any) => boolean | Error;
  notToBe: (val: any) => boolean | Error;
};

function expect(val: any): ToBeOrNotToBe {
  const throwError = (errorStr: string): Error => {
    throw new Error(errorStr);
  };
  return {
    toBe: (val2) => val2 == val || throwError("Not Equal"),
    notToBe: (val2) => val2 != val || throwError("Equal"),
  };
}
