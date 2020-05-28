"use strict";

// const box = document.getElementById("box");

// console.log(box);

// const btns = document.getElementsByTagName("button")[1]; 

// console.log(btns);


// const circles = document.getElementsByClassName("circle");

// console.log(circles);


// const hearts = document.querySelectorAll(".heart");
// hearts.forEach(function(item){
//     console.log(item);
// })


// const oneHeart = document.querySelector(".heart");
// console.log(oneHeart);

// const newCircles = document.querySelectorAll(".circle");
// console.log(newCircles);

// const newButtons = document.querySelectorAll("button");
// console.log(newButtons);

// const newBox = document.querySelectorAll("#box");
// console.log(newBox);

// const newBox2 = document.querySelector("box");
// console.log(newBox2);


// const box = document.getElementById("box"),
//     btns = document.getElementsByTagName("button"),
//     circles = document.getElementsByClassName("circle"),
//     wrapper = document.querySelectorAll(".wrapper"),
//     hearts = wrapper.querySelectorAll(".heart"),
//     oneHeart = wrapper.querySelector(".heart");


const box = document.getElementById("box"),
    btns = document.getElementsByTagName("button"),
    circles = document.getElementsByClassName("circle"),
    wrapper = document.querySelector(".wrapper"),
    hearts = document.querySelectorAll(".heart"),
    oneHeart = document.querySelector(".heart");

    


// console.dir(box);
// box.style.backgroundColor = "blue";
// box.style.width = "500px";



btns[1].style.borderRadius = "100%";
circles[2].style.backgroundColor = "green";

const width = 500;
box.style.cssText = `background-color: blue; width: ${width}px`;

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = "yellow";
}

hearts.forEach(function (item) {
    item.style.backgroundColor = "pink";
});



const text = document.createTextNode("Тут был Вася");

// const div = document.createElement("div");
// div.classList.add("black");
// document.body.append(div); 


// const div2 = document.createElement("div");
// div2.classList.add("yellow");
// wrapper[0].append(div2);

// const div3 = document.createElement("div");
// div3.classList.add("grey");
// document.body.prepend(div3);



// hearts[1].before(div3);
// hearts[0].after(div3);

// circles[0].remove();

// hearts[0].replaceWith(circles[3]);

// wrapper[0].insertBefore(div,hearts[0]);

// wrapper[0].removeChild(hearts[1]);

// wrapper[0].replaceChild(circles[0],hearts[0]);

// const div = document.createElement("div");
// div.classList.add("black");
// wrapper[0].prepend(div);
// // div.innerHTML = "<h2>Hello World</h2>";
// div.textContent = "<h2>Hello World</h2>";
// // div.textContent = "Hey";


// const div = document.createElement("div");
// div.classList.add("black");
// wrapper[0].prepend(div);
// div.innerHTML = "<h2>Hello World</h2>";

// div.insertAdjacentHTML("afterend","<h2>Hello</h2>");

