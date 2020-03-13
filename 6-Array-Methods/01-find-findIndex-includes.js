var arr = [{ a: 1 }, { a: 2 }];

const result = arr.find(function match(v) {
  return v && v.a > 1;
});

console.log(result);

const res = arr.find(function match(v) {
  return v && v.a > 10;
});

console.log(res);

const index = arr.findIndex(function match(v) {
  return v && v.a > 10;
});

console.log(index);
