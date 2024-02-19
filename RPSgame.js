let userScore = 0;
let compScore = 0;

const choices  = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    //spider , rajni , ben10

    const options = ["spider", "rajni" , "ben10"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

};


const drawGame = () => {
    // console.log(" Game was draw");
    msg.innerText = " Game was draw. Play Again.";
    msg.style.backgroundColor = "blue";


};


const showWinner = (userWin ,userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("you win!!");
        msg.innerText = `You win! .Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("you lose!!  Your");
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};



const playGame = (userChoice) => {
    console.log("user choice = " ,userChoice);
    //generate comp choice - modular way
    const compChoice = genCompChoice();
    console.log("comp choice = " ,compChoice);


    if(userChoice === compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin = true;

        if(userChoice === "spider"){
            userWin = compChoice === "rajni" ? false :  true;

        }
        else if(userChoice === "rajni"){
            userWin = compChoice === "ben10" ? false : true;

        }else{
            userWin = compChoice === "spider" ? false : true;

        }
    showWinner(userWin ,userChoice , compChoice);
    }
};



choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice  was clicked" , userChoice)
        playGame(userChoice);

    });
});


