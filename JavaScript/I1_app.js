///Practice Qs
//Q1 
let para1 = document.createElement("p");
para1.innerText = "Hi I am red!";
document.querySelector("body").append(para1);

para1.classList.add('red');

//Q2
let heading3 = document.createElement("h3");
heading3.innerText = "I'm a blue h3!";
document.querySelector("body").prepend(heading3);

heading3.classList.add('blue');

//Q3
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a div..div's child";
para2.innerText = "Me Too";

div.append(h1);
div.append(para2);
div.classList.add('box');

document.querySelector("body").append(div);

///Assignment Qs
//Q1 
let inpt = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = 'Click Me';

document.querySelector("body").append(inpt);
document.querySelector("body").append(btn);

//Q2
inpt.setAttribute('placeholder', 'username');
btn.setAttribute('id', 'btn1');

//Q3
let btn1 = document.querySelector('#btn1');
btn1.classList.add('btnStyle');

//Q4
let heading1 = document.createElement('h1');
heading1.innerHTML = '<u>DOM Practice</u>';
document.querySelector("body").append(heading1);

heading1.classList.add('h1');

//Q5
let paragraph = document.createElement('p');
paragraph.innerHTML = 'Apna College <b>Delta</b> Practice';
document.querySelector("body").append(paragraph);
