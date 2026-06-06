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


///else-if
let age1 = 24;

if(age1>=18){
    console.log("you can vote");
}
else if(age1>=18){
    console.log("you cannot vote");
}
else if(age1<18){
    console.log("you cannot vote2");
}

let marks = 75;

if(marks>=80){
    console.log("A+");
}
else if(marks>=60){
    console.log("B+");
}
else if(marks>=40){
    console.log("C+");
}
else if(marks<30){
    console.log("F");
}


///else
let color1 = "white";

if(color1 === "red"){
    console.log("Stop!");
}
else if(color1 === "yellow"){
    console.log("Ready!");
}
else if(color1 === "green"){
    console.log("Go!");
}
else{
    console.log("traffic light is broken!");
}


///Question(Price Popcorn)
let size = "L";

if(size === "XL"){
    console.log("Price is 250.");
}
else if(size === "L"){
    console.log("Price is 200.");
}
if(size === "M"){
    console.log("Price is 100.");
}
if(size === "S"){
    console.log("Price is 50.");
}


///nested if-else
let mrks = 33;

if(mrks>=33)
{
    console.log("Pass");
    if(mrks>=80){
        console.log("Grade : O");
    }
    else{
        console.log("Grade : A");
    }
}
else
{
    console.log("better luck next time!");
}


//Logical Operators{&&, ||, !}
console.log(true&&true);
console.log(false&&true);
console.log((5>3)&&(6<3));

console.log(false||false);
console.log(true||false);

console.log(!(true));

let Marks=25;
if((Marks > 33 && Marks <= 80)|| !false){
    console.log("PASS")  
}


///Question(Good String)
let str = "aeroplane";
if((str[0]==="a") && (str.length > 3)){
    console.log("Good String");
}
else{
    console.log("Not a Good String")
}

///Predict the output
let n = 12;
if((n % 3 === 0) && ((n+1==15)||(n-1==11))){
    console.log("Safe");
}
else{
    console.log("Unsafe");
}


//Switch Statement
let Color = "yellow";
switch (Color)
{
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Traffic light is broken");
}
