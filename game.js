console.log("Hello RPS!")


var wins = 0,
    losses = 0,
    ties = 0
    choices = ["rock", "Paper", "Scissors"]

// human chooses R, P, S
// var humanChoice = prompt("Choose Rock, Paper, Scissors")
// console.log(humanChoice)
    //get choice from users input
    // computer randomly chooses
var randomNum = Math.floor( Math.random() * 3)
console.log(randomNum)

// computer choices
    // if humanChoice is S and pcChoice is P OR
    // if humanChoice is R and pdChoice is S OR
    // if humanChoice is P and pcChoice is R
        // wins
        // alert that human wins
        // increase wins
    // if humanChoice === psChoice
        // ties
        // alert human tie
        //increase tie
    //else
        // alert human had lost
        // increase lossses

    // ask user "do you want to play again?""
        // if yes, restart game
        // if no, end game - close application.

