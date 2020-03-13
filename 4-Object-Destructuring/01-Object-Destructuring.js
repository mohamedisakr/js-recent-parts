function data() {
  return { a: 1, b: 2, c: 3, d: 4 }; //
}

const { a: first, b: second, ...third } = data();
console.log(first, second, third);
