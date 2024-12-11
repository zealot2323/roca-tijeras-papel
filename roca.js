let humanScore = 0;
let compScore = 0;

function getComputerResponse() {
    let ran = Math.random();
    if (ran < .333) {
        return "roca"
    } else  if (ran > .333 & ran < .666) {
        return "tijeras"
    } else {
        return "papel"
    }
}

function getHumanChoice() {
    let humanResponse = prompt("Entre roca, tijeras, o papel.", "roca");
    return humanResponse.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie!")
    } else if (humanChoice === "roca") {
        if (computerChoice === "tijeras") {
            humanScore ++;
            console.log("Human wins with Roca beating tijeras!");
        } else {
            compScore++;
            console.log("Comp wins with Paper beating roca!");
        }
    } else if (humanChoice === "tijeras") {
        if (computerChoice === "papel") {
            humanScore ++;
            console.log("Human wins with Tijeras beating papel!");
        } else {
            compScore++;
            console.log("Comp wins with Roca beating Tijeras!");
        }
    } else if (humanChoice === "papel") {
        if (computerChoice === "roca") {
            humanScore ++;
            console.log("Human wins with Papel beating roca!");
        } else {
            compScore++;
            console.log("Comp wins with Tijeras beating papel!");
        }
    }
  }
  
const humanSelection = getHumanChoice();
const computerSelection = getComputerResponse();
  
playRound(humanSelection, computerSelection);

console.log(humanSelection);
console.log(computerSelection);
console.log(humanScore);
console.log(compScore);
