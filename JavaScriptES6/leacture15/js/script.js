// "use strict";

// // const num = new Number(3);

// // function User(name, id) {
// //     this.name = name;
// //     this.id = id;
// //     this.human = true;
// //     this.hello = function () {
// //         console.log(`Hello ${this.name}`);
// //     }
// // }


// // const ivan = new User("Ivan", 28);
// // const alex = new User("Alex", 20);

// // // console.log(ivan);
// // // console.log(alex);


// // User.prototype.exit = function(){
// //     console.log(`User ${this.name} logged out`);
// // };

// // ivan.exit(); // User Ivan logged


// // function showThis(a, b) {
// //     console.log(this);

// //     function sum() {
// //         console.log(this);
// //         return this.a + this.b;
// //     }
// //     console.log(sum());
// // }
// // showThis(4,5);


// // const obj = {
// //     a: 20,
// //     b: 15,
// //     sum: function(){
// //         function shout(){
// //             console.log(this); 
// //         }
// //         shout();
// //     }
// // };
// // obj.sum();


// // function User(name, id) {
// //     this.name = name;
// //     this.id = id;
// //     this.human = true;
// //     this.hello = function () {
// //         console.log(`Hello ${this.name}`);
// //     };
// // }

// // const ivan = new User("Ivan", 28);



// // function sayName(){
// //     console.log(this);
// //     console.log(this.name);
// // }

// // const user = {
// //     name: "John"
// // };

// // sayName.call(user);
// // sayName.apply(user);


// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: "John"
// };

// sayName.call(user, " Smith");
// sayName.apply(user, [" Smith"]);



// function count(num) {
//     return this * num;
// }

// const double = count.bind(2); 
// console.log(double(3)); // 6
// console.log(double(5)); // 10


// const btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//     console.log(this); // тут контекстом вызова будет сам элемент(сама кнопка), на котором происходит событие
// });

// const obj = {
//     num: 5,
//     sayNumber: function(){
//         const say = () => {
//             console.log(this);
//         };
//         say();
//     }
// };

// obj.sayNumber();

// const double = (a) =>  a* 2;



// const btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//     this.style.backgroundColor = "red";
// });


const btn = document.querySelector("button");
btn.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "red";
});






