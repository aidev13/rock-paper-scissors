
var wins = 0,
    losses = 0,
    ties = 0
    choices = ["ROCK", "PAPER", "SCISSORS"]

// human chooses R, P, S
var keepPlaying = true

while (keepPlaying) {

    // human chooice 
    var humanChoice = prompt("Choose Rock, Paper, Scissors")
    if (humanChoice) {
        humanChoice = humanChoice.toUpperCase()
    }

    if (!choices.includes(humanChoice)) {
        alert("Nice try! Guns and Bombs cannot be used. Try again!")
    }
   

    // Computer choice
    var randomNum = Math.floor(Math.random() * 3)
    var computerChoice = choices[randomNum]



    if (
        humanChoice === "SCISSORS" && computerChoice === "PAPER" ||
        humanChoice === "PAPER" && computerChoice === "ROCK" ||
        humanChoice === "ROCK" && computerChoice === "SCISSORS"
    ) {
        alert("You WON!")
        wins++
    }
    else if (humanChoice === computerChoice) {
        alert("This round has been tied")
        ties++
    }

    else {
        alert("You are a loser! Try again")
        losses++
    }

    alert("WINS: " + wins + "\nTies: " + ties + "\nLosses: " + losses)

    keepPlaying = confirm("Would you like to play agian?")

}

alert("Play Again Soon!")