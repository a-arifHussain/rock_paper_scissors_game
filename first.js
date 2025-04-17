
let choices = document.querySelectorAll(".choice");
// console.log(choice);

let userChoice ;
let compChoice ;
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");
let you =0;
let comp =0;
let msg = document.querySelector("#msg");
let youChoice = document.querySelector("#userChoice");
let comChoice = document.querySelector("#compChoice");




choices.forEach(choice =>{
    choice.addEventListener("click",()=>{

    console.log("click by user");
    userChoice=choice.getAttribute("id");
    console.log(userChoice);

    let idx = Math.floor(Math.random()*3);
    // console.log(comp);
    let gameArr=["rock","paper","scissors"];
    // console.log(gameArr[comp]);
     compChoice =gameArr[idx];
    console.log("computer choice "+compChoice);
    

    if (userChoice===compChoice){
        console.log("game draw");
        msg.innerText="GAME IS DRAW.....PLAY AGAIN....";
        msg.style.backgroundColor="blue";
        youChoice.innerText=userChoice;
        comChoice.innerText=compChoice;

    }

    else{
        if(userChoice==="rock" && compChoice==="scissors"){
            console.log("you win!");
            you++;
            userScore.innerText=you;
            msg.innerText="BOOYAH!!!.. YOU WIN!";
            msg.style.backgroundColor="green";
            youChoice.innerText=userChoice;
            comChoice.innerText=compChoice;

        }else if (userChoice==="rock" && compChoice==="paper") {
            console.log("you lose!");
            comp++;
            compScore.innerText=comp;
            msg.innerText="OOHO !!!.. YOU LOSE!";
            msg.style.backgroundColor="red";
            youChoice.innerText=userChoice;
            comChoice.innerText=compChoice;


        }else if (userChoice==="paper" && compChoice==="rock") {
            console.log("you win!");
            you++;
            userScore.innerText=you;
             msg.innerText="BOOYAH!!!.. YOU WIN!";
            msg.style.backgroundColor="green";
            youChoice.innerText=userChoice;
            comChoice.innerText=compChoice;


        }else if (userChoice==="paper" && compChoice==="scissors") {
            console.log("you lose!");
            comp++;
            compScore.innerText=comp;
            msg.innerText="OOHO !!!.. YOU LOSE!";
            msg.style.backgroundColor="red";
            youChoice.innerText=userChoice;
            comChoice.innerText=compChoice;


        }else if (userChoice==="scissors" && compChoice==="paper") {
            console.log("you win!");
            you++;
            userScore.innerText=you;
            msg.innerText="BOOYAH!!!.. YOU WIN!";
            msg.style.backgroundColor="green";
            youChoice.innerText=userChoice;
            comChoice.innerText=compChoice;


        }else if (userChoice==="scissors" && compChoice==="rock") {
            console.log("you lose!");
            comp++;
            compScore.innerText=comp;
            msg.innerText="OOHO !!!.. YOU LOSE!";
            msg.style.backgroundColor="red";
            youChoice.innerText=userChoice;
            comChoice.innerText=compChoice;


        }
    }

    })  
})


