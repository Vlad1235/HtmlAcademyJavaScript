'use strict';

const box = document.querySelector(".box"),
btn = document.querySelector("button");

// const width = box.clientWidth;
// const height = box.clientHeight;

// console.log(width,height);  // 383 334

// const width = box.offsetWidth;
// const height = box.offsetHeight;
// console.log(width,height); // 400 350

// const width = box.scrollWidth;
// const height = box.scrollHeight;
// console.log(width,height); // 383 1382


// btn.addEventListener("click", () =>{
//     // box.style.height = box.scrollHeight + "px";

//     console.log(box.scrollTop);
// });


// console.log(box.getBoundingClientRect().top);


// const style = window.getComputedStyle(box);
// console.log(style.display); // block


console.log(document.documentElement.scrollTop);



