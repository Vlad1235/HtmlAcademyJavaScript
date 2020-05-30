"use strict";


const btn = document.querySelector(".btn");


function myAnimation() {
    const element = document.querySelector(".box");
    let position = 0;

    function frame() {
        if (position === 300) {
            clearInterval(id);
        } else {
            position++;
            element.style.top = position + "px";
            element.style.left = position + "px";
        }
    }

    const id = setInterval(frame, 10);
}


btn.addEventListener("click",myAnimation);


// const timerId = setTimeout(function () {
//     console.log("hello");
// }, 2000);




// const timerId2 = setTimeout(function (text) {
//     console.log(text);
// }, 2000, "Hello");


// 

// let timerId;
// let intervalId;

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//     // clearInterval(timerId);
//     clearInterval(intervalId);
// });
// // timerId = setTimeout(logger, 2000);



// intervalId = setInterval(logger, 2000);



// let timerId, i = 0;

// btn.addEventListener("click", () => {
//     timerId = setInterval(logger, 500);
// });


// function logger() {
//     console.log('text');
// }



// let id = setTimeout(function log() {
//     console.log("hello");
//     id = setTimeout(log, 500);
// }, 500);