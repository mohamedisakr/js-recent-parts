// Using generator as a computed property
var numbers = {
  *[Symbol.iterator]({ start = 0, end = 100, step = 1 } = {}) {
    for (let i = start; i <= end; i += step) {
      yield i;
    }
  }
};

console.log(
  `My lucky numbers are: ${[
    ...numbers[Symbol.iterator]({ start: 6, end: 30, step: 4 })
  ]}`
);

// old code
/*
var numbers = {
  *[Symbol.iterator](start = 0, end = 100, step = 1) {
    for (let i = start; i <= end; i += step) {
      yield i;
    }
  }
};

// should print 0..100 by 1s
// for (let num of numbers) {
//   console.log(num);
// }

// const items = [...numbers];
// console.log(items);

const items = [...numbers[Symbol.iterator](6, 30, 4)];
console.log(items);

// should print 6..30 by 4s
// console.log("My lucky numbers are: ____");
// console.log(`My lucky numbers are: ${Array.from(numbers)}`);

// Hint:
//     [...numbers[Symbol.iterator]( ?? )]
*/
