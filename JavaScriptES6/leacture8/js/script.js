"user strict";

// console.log(document.body);

// console.log(document.documentElement);

// console.log(document.body.childNodes);

// // console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// // console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);


// // console.log(document.querySelector("#current").parentNode.parentNode);
// // console.log(document.querySelector("#current").parentElement);
// console.log(document.querySelector("#current").parentElement.parentElement);


// const dtc = document.querySelector('[data-current="3"]');
// console.log(dtc.nextElementSibling);
// console.log(dtc.previousElementSibling);


// console.log(document.documentElement);


for (let node of document.body.childNodes) {
    if (node.nodeName === "#text") {
        continue;
    }
    console.log(node);
}