// iterators : imperative iterator
var obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function() {
    var keys = Object.keys(this);
    var index = 0;
    return {
      next: () =>
        index < keys.length
          ? { done: false, value: this[keys[index++]] }
          : { done: true, value: undefined }
    };
  }
};

const items = [...obj];
console.log(items);

/*
// iterators: objects not iterables => TypeError: obj is not iterable
var obj = { a: 1, b: 2, c: 3 };
// for (let v of obj) {
//   console.log(v);
// }
const items = [...obj];
console.log(items);
*/
