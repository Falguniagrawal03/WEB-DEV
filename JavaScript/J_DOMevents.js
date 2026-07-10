//onclick for single button
// let btn = document.querySelector('button');
// console.dir(btn);

// btn.onclick = function(){
//     console.log("button clicked");
// };

//onclick & onmouseenter for all buttons together
// let btns = document.querySelectorAll('button');
// for(btn of btns){
//     btn.onclick = sayHello;
//     btn.onmouseenter = function(){
//         console.log('you entered button')
//     };
// }

// function sayHello(){
//     console.log("HELLO!")
// }

console.log('---------------------------------------------------------')

//DOM Event Listeners
let bttns = document.querySelectorAll('button')
for(btnn of bttns){
    btnn.addEventListener('click', Greet);
    btnn.addEventListener('click', Msg);
}

function Greet(){
    console.log("HIII!");
};

function Msg(){
    console.log("WELCOME");
};
