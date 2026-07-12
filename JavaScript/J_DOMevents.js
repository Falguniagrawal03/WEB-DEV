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

///DOM Event Listeners
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
console.log('---------------------------------------------------------')

///Event Listeners for Elements
let para = document.querySelector('p');
para.addEventListener('click', function(){
    console.log('paragraph was added');
});

let box = document.querySelector('.box');
box.addEventListener('mouseenter', function(){
    console.log('mouse inside div');
});
console.log('---------------------------------------------------------')

///this in Event Listeners
let btn1 = document.querySelector('button');
btn1.addEventListener('click', function(){
    console.log(this);
    console.dir(this);
    console.log(this.innerText);
    this.style.backgroundColor = 'blue';    ///All these are running on the first button that i made above
})

//
let heading1 = document.querySelector('h1');
let heading3 = document.querySelector('h3');
let heading5 = document.querySelector('h5');

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = 'yellow';
}

heading1.addEventListener('click', changeColor);
heading3.addEventListener('click', changeColor);
heading5.addEventListener('click', changeColor);

///Keyboard Events
//1) Default Argument {Event or evt or e}
let btn2 = document.querySelector('button');

btn2.addEventListener('click', function(e){
    console.log(e);
});

btn2.addEventListener('dblclick', function(e){
    console.log(e);
});

//different properties for keyboard
let inp = document.querySelector('input');

inp.addEventListener('keydown', function(e){
    console.log(e);
    console.log('key =', e.key);
    console.log('code =', e.code);
    console.log('key was pressed');
});

// inp.addEventListener('keyup', function(){
//     console.log('key was released');
// })

///Arrow Game in Keyboard
let inp1 = document.querySelector('input');
inp1.addEventListener('keydown', function(e){
    console.log('code =', e.code)  //ArrowUp ArrowDown ArrowLeft ArrowRight
    if(e.code == 'ArrowUp'){
        console.log('character moves up');
    }
    else if(e.code == 'ArrowDown'){
        console.log('character moves down');
    }
    else if(e.code == 'ArrowLeft'){
        console.log('character moves left');
    }
    else if(e.code == 'ArrowRight'){
        console.log('character moves right');
    }
})
console.log('---------------------------------------------------------')

///Form Events
let forms = document.querySelector('form');

forms.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('form submitted');  //hua but dikha nhi kyunki bhut jldi hua 'alert' se try kr skte

    ///Extracting Form Data
    let inp = document.querySelector('input');
    console.log(inp);
    console.log(inp.value);
});

///Extracting Form Data 
let forms1 = document.querySelector('form');
forms1.addEventListener('submit', function(e){
    e.preventDefault();
    console.dir(forms1);

    let user = this.elements[0];  //forms.elements[0];
    let pswd = this.elements[1];

    // let user = document.querySelector('#user');
    // let pswd = document.querySelector('#pswd');

    console.log(`user=${user.value}`);
    console.log(`pswd=${pswd.value}`);
});

///More Events 
let form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
});
 
let user = document.querySelector('#user');

///change event 
user.addEventListener('change', function(){
    console.log('change event');
    console.log('final value =', this.value);
});
///input event
user.addEventListener('input', function(){
    console.log('input changed');
    console.log('final value =', this.value);
});
