type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter2(init: number): Counter {
    let count = init;
    return {
        reset: function () {
            return count =  init;
        },
        decrement: function () {
            return --count;
        },
        increment: function () {
            return ++count;
        },
    };
}
