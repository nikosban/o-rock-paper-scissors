function playRound(playerChoice, computerChoice) {

let result;

if (playerChoice === computerChoice) {
    result = "This is a tie";
}

else {
switch(playerChoice) {
    case "rock":
        result = computerChoice === "scissors" ?"You won" :"You lost";
        break;

    case "scissors":
        result = computerChoice === "paper" ?"You won" :"You lost";

    case "paper":
        result = computerChoice === "rock" ?"You won" :"You lost";
}

}

return result;

}


let playerChoice = prompt("Input your choice").toLowerCase();
let computerChoice = getComputerChoice();

function getComputerChoice (choice) {
    choice = Math.floor(Math.random()*3)

    if (choice === 0) {
        choice = "scissors";
    }

    else if (choice === 1) {
        choice = "paper";
    }

    else {
        choice = "rock";
    }

    return choice;
}

console.log(playRound(playerChoice,computerChoice));