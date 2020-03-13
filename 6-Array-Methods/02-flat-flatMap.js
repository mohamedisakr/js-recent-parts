const result = [1, 2, 3].flatMap(function tuples(v) {
  return [v * 2, String(v * 2)];
});
//   .flat();
console.log(result);

/*
const nestedValues = [1, [2, 3], [[]], [4, [5]], 6];
const flatedValues = nestedValues.flat(2);
console.log(flatedValues);
*/
