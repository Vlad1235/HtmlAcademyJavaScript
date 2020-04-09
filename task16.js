/* 
Примитивы: числа, строки, булевские значения, null и undefined. 
Все остальное — объекты.
*/
var test1 = "abcdef";
var test1 = 12345;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];
function test9() {return "abcdef"};
var test10 = null;
if(isNaN(test1)){
    console.log('check successful');
};
console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10); // object