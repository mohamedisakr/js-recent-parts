function data() {
  return {
    a: 1,
    b: { c: 3, d: 4 }
  };
}

const { a, b: { c, d } = {} } = data() || {};
console.log(a, c, d);
