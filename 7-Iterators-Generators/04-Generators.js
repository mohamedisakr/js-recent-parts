// iterators: declarative iterator
var obj = {
  a: 1,
  b: 2,
  c: 3,
  *[Symbol.iterator]() {
    for (let key of Object.keys(this)) {
      yield this[key];
    }
  }
};

const items = [...obj];
console.log(items);
