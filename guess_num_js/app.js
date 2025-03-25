const max=prompt("Enter the maximum number..");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("guess the number");
while(true){
    if(guess=="quite"){
        console.log("user quite..");
        break;
    }
    if(guess=random){
        console.log("you are right! congrats!");
        break;
    }
    else{
     guess=   prompt("your guess was wrong. please try again");
    }
}