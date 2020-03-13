function data() {
  return [1, undefined, 4]; //[2, 3]
}

var temp = data();
var [first, [second, third] = [], forth] = temp || [];
console.log(first, second, third, forth);

/*
var x = 10;
var y = 20;
[y, x] = [x, y];
console.log(x, y);
*/

/*
var temp;
var [first, , third, ...forth] = data();
console.log(first, third, forth);
*/

/*
var temp; //= data();
var obj = [];
[obj[3], obj[10] = 10, obj[42], ...obj[100]] = temp = data();
console.log(obj);
console.log(temp);
*/

/*
var temp = data();
var obj = [];
[obj[3], obj[10] = 10, obj[42], ...obj[100]] = temp;
console.log(obj[3], obj[10], obj[42], obj[100]);
*/

/*
// var temp = data();
// var first, second, third, forth;
var obj = {};
[obj.first, obj.second = 10, obj.third, ...obj.forth] = data();
console.log(obj.first, obj.second, obj.third, obj.forth);
// console.log(first, second, third, forth);
*/
