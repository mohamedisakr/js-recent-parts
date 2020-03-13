function data() {
  //   return { a: 1, b: 2, c: 3, d: 4 };
  return;
}

const { a = 1, b = 2 } = data() || {};
console.log(a, b);

/*
const { a: first, b: second, ...third } = data() || {};
console.log(first, second, third);
*/

/*
//   const { a: first, b: second, ...third } = data();
var temp;
var first, second;
temp = { a: first, b: second } = data();
console.log(first, second);
console.log(temp);
*/
