let userScore = 0;
let compScore = 0;
let userPoint = document.querySelector("#user-score");
let compPoint = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");
let moves =document.querySelectorAll(".move");



const gameDraw = () => {
    console.log("Game is a Draw");
    msg.innerText = `Game is a Draw!! Try again.`;
    msg.style.backgroundColor = "#6a82b2";
}
const genMove = () => {
    const options = ["rock", "paper", "scissor"];
    let i = Math.floor(Math.random() * 3);
    return options[i];
}

let showWinner = (userWin, userMove, compMove) => {
    if(userWin){
            console.log("You Win");
            msg.innerText = `You Won!! Your ${userMove} beats ${compMove}`;
            msg.style.backgroundColor = "green";
            userScore++;
            userPoint.innerText = `${userScore}`
        } else {
            console.log("You Lose");
            msg.innerText = `You Lose!! ${compMove} beats your ${userMove}`;
            msg.style.backgroundColor = "red";
            compScore++;
            compPoint.innerText = `${compScore}`
        };
    };

const playGame = (userMove) => {
    console.log("user move =", userMove);
    compMove = genMove();
    console.log("comp move =", compMove);
    if(userMove === compMove){
        gameDraw()
    } else {
        let userWin = true;
        if (userMove === "rock") {
            //paper sciossor//
            userWin = compMove === "paper" ? false : true ;
            userWin = compMove === "scissor" ? true : false ;
        } else if (userMove === "paper") {
            //rock scissor//
            userWin = compMove === "rock" ? true : false ;
            userWin = compMove === "scissor" ? false : true ;
        } else if (userMove === "scissor") {
            //rock paper//
            userWin = compMove === "rock" ? false : true ;
            userWin = compMove === "paper" ? true : false ;
        };
        showWinner(userWin, userMove, compMove);
    }
}

moves.forEach ((choice) => {
    choice.addEventListener("click", () => {
        const userMove = choice.getAttribute("id");
        playGame(userMove);
    })
})

