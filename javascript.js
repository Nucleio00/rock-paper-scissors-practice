// alow user to input rock paper or scissors
// generate a random number between 0 and 3
// Assign that number a value of rock, paper, or scissors
// check win within functions

const gameList = ["rock", "paper", "scissors"]

const playerGuess = prompt("guess, rock, paper, or scissors")
const computerGuess = gameList[Math.floor(Math.random() * gameList.length)]

console.log(playerGuess)
console.log(computerGuess)

function guessRock(computerGuess) {
    if ("rock" === computerGuess) {console.log("tie")}
    else if (computerGuess === "paper") {console.log("lose")}
    else if (computerGuess === "scissors") {console.log("win")}
}

function guessPaper(computerGuess) {
    if ("paper" === computerGuess) {console.log("tie")}
    else if (computerGuess === "scissors") {console.log("lose")}
    else if (computerGuess === "rock") {console.log("win")}
}

function guessScissors(computerGuess) {
    if ("scissors" === computerGuess) {console.log("tie")}
    else if (computerGuess === "rock") {console.log("lose")}
    else if (computerGuess === "paper") {console.log("win")}
}

function checkWin (playerGuess, computerGuess) {
    if (playerGuess === "rock") { 
        return guessRock(computerGuess);
    } else if (playerGuess === "paper") {
        return guessPaper(computerGuess);
    } else if (playerGuess === "scissors") {
        return guessScissors(computerGuess);
    } else {
        return "invalid input"
    }
}
