// alow user to input rock paper or scissors
// generate a random number between 0 and 3
// Assign that number a value of rock, paper, or scissors
// check win within functions

let playerScore = 0
let computerScore = 0

// const computerGuess = gameList[Math.floor(Math.random() * gameList.length)]

// console.log(playerGuess)
// console.log(computerGuess)


function computerGuess() {
    const gameList = ["rock", "paper", "scissors"]
    return gameList[Math.floor(Math.random() * gameList.length)]
}

function guessRock(computerGuess) {
    if ("rock" === computerGuess) {console.log("tie")}
    else if (computerGuess === "paper") {console.log("lose"), computerScore +=1}
    else if (computerGuess === "scissors") {console.log("win"), playerScore +=1}
}

function guessPaper(computerGuess) {
    if ("paper" === computerGuess) {console.log("tie")}
    else if (computerGuess === "scissors") {console.log("lose"), computerScore +=1}
    else if (computerGuess === "rock") {console.log("win"), playerScore +=1}
}

function guessScissors(computerGuess) {
    if ("scissors" === computerGuess) {console.log("tie")}
    else if (computerGuess === "rock") {console.log("lose"), computerScore +=1}
    else if (computerGuess === "paper") {console.log("win"), playerScore +=1}
}

function displayScores () {
    console.log(`Playerscore = ${playerScore}`);
    console.log(`Computerscore = ${computerScore}`);
}

function playRound () {

    let currentGuess = computerGuess();
    let playerGuess = prompt("guess, rock, paper, or scissors");

    if (playerGuess === "rock") { 
        guessRock(currentGuess);
        displayScores();
    } else if (playerGuess === "paper") {
        guessPaper(currentGuess);
        displayScores();
    } else if (playerGuess === "scissors") {
        guessScissors(currentGuess);
        displayScores();
    } else {
        "invalid input"
    }

}

function playgame() {
    roundsPlayed = 0
    confirmation = confirm("want to play?")
    if (confirmation === true) {
        while (roundsPlayed < 5) {
            playRound()
            roundsPlayed += 1
        } 
        if (playerScore === computerScore){
            displayScores()
            console.log("game tie")
        }
        if (computerScore > playerScore){
            displayScores()
            console.log("computer wins")
        }
        else {
            displayScores()
            console.log("Player wins")
        }
    } else{
        console.log("bye")
    }
    }

playgame()