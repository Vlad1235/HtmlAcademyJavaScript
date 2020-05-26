"use strict";

// a = 15;
// console.log(a);


let number = 4.6;
console.log(4 / 0);
console.log('string' * 9);

const bool = false;


const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(obj.isMarried);

let array = ['plum.png', {
    obj
}, 'orange.jpg', 6, 'apple.bmp'];
console.log(array[1]);


// alert("hello");
// const result = confirm("are u here?");
// const answer = prompt("Вам есть 18?", "18");
// console.log(typeof(answer));

const answers = [];
answers[0] = prompt('Как Ваше имя?', '');
answers[1] = prompt('Как Ваша фамилия?', '');
answers[2] = prompt('Сколько Вам лет?', '');

document.write(answers);

const category = 'toys';
console.log(`https://someurl.com/${category}/5`);
console.log("https://someurl.com/" + category + "/" + 5);

// const user = "Ivan";
// alert(`Привет,${user}`);

