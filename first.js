const max = prompt("Enter the Max. Number");

const random = Math.floor(Math.random()*max)+1;

let guess = prompt("Guess the Number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("Awesome!, YOU ARE RIGHT random number was", random);
        break;
    }
    else if(guess < random){
        guess = prompt("your guess was too small. TRY AGAIN");
    }
    else if(guess>random){
        guess = prompt("your guess was too big. TRY AGAIN");
    }
   
}