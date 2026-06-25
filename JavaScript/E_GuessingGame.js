//Guessing Game (user enetrs a max no. and tries to guess a random geberated no. btw 1 to max)
const max = prompt("enter the max no.");
        
const random = Math.floor(Math.random() * max) + 1;
        
let guess = prompt("guess the number");

while(true)
    {
        if(guess == "quit")
        {
            console.log("user quit");
            break;
        }
        if(guess == random)
        {
            console.log("your guess is correct! congrats!! random no. was" , random);
            break;
        }
        else if(guess < random)
        {
            guess = prompt("your guess was too small. Pls try agaiin!!")
    
        }
        else
        {
            guess = prompt("hint: your guess was too large. Pls try agaiin!!")
        }
    }
