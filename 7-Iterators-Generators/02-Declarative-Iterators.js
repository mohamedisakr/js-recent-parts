// iterators => declarative iteration
const str = "hello";
const letters = [...str];
console.log(letters);

/*
// iterators => declarative iteration
const str = "hello";
const it = str[Symbol.iterator]();

for (let v of it) {
  console.log(v);
}
*/
