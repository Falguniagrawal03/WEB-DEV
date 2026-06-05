//Console.log() + //Linking JS file
console.log("Hello World!");
console.log("you are amazing!");
let a = 10;
let b = 5;
console.log("sum is:" , a+b);


let pencilPrice = 10;
let eraserPrice = 5;
console.log("The total price is:", pencilPrice + eraserPrice , "Rupees.");

let output = "The total price is: " + (pencilPrice + eraserPrice) + " Rupees. "
console.log(output);


//Template Literals
let output1 = `The total price is: ${pencilPrice + eraserPrice} Rupees.`;       //back tick`` + ${}//
console.log(output1);  // The total price is: 15 Rupees.


//Operations in JS
//Arithmetic operators
let A = 10;
let B = 5;
console.log(A+B);  //15
console.log(A-B);  //5
console.log(A*B);  //50
console.log(A/B);  //2
console.log(A%B);  //0
console.log(A**B);  //100000
//Unary operators
console.log(A++);   //10  
console.log(++A);   //12
//Assignment operator
console.log(A=B);   //A=5


//Comparison operators
let age=23;
console.log(age<18); //false
console.log(age>=18); //true
console.log(age==23); //true
console.log(age=!23); //false
console.log(5=='5')  //true bcz ignores the type only sees the value
console.log(5==='5'); //false bcz checks both type and value


//Comparison for non-numbers
console.log('a'<'A');  //false
console.log('a'>'A');  //true

//Conditional Statements
///if 
console.log("before my if statement");
let Age=23;
if(Age>=18){
    console.log("You can vote!");
    console.log("YOu can drive!");
}
if(Age<18){
    console.log("You cannot vote!")
}
console.log("after my if statement");

///
let firstName = "naman";
if(firstName=="naman"){
    console.log(`welcome ${firstName}`);
}

//Question(Traffic Light)
let color = "red";

if(color === "red"){
    console.log("Stop!");
}
if(color === "yellow"){
    console.log("Ready");
}
if(color === "green"){
    console.log("Go");
}
