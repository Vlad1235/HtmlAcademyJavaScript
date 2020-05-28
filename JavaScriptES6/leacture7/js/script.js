"use strict";

const btn = document.querySelector("#btn"),
    btns = document.querySelectorAll("button");
    // overlay = document.querySelector(".overlay");

// btn.addEventListener("click",function(){
//     alert("hello!");
// });

// btn.addEventListener("click",function(){
//     alert("hello again!");
// })

// btn.addEventListener("mouseenter",function(event){
//     console.log(event.target);
//     event.target.remove();
// });


// let i = 0;
// const fulfillActionOnElement = function (event) {
//     console.log(event.currentTarget);
//     console.log(event.type);
//     // i++;
//     // if (i === 1) {
//     //     btn.removeEventListener("click", fulfillActionOnElement);
//     // }
// };

// btn.addEventListener("mouseover",function(){
//     console.log("oops!");
// });

// btn.addEventListener("click", fulfillActionOnElement);
// overlay.addEventListener("click", fulfillActionOnElement);


// const link = document.querySelector("a");
// link.addEventListener("click",function(event){
//     event.preventDefault();
//     console.log(event.currentTarget);
// });

// btns.forEach(function(x){
//     x.addEventListener('click',fulfillActionOnElement, {once: true});
// });



btn.addEventListener("mouseenter",function(event){
    console.log(event.target);
    event.target.remove();
    console.log(btn);
});