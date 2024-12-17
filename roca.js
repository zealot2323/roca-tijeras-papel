const buttons = document.querySelector("#buttons");

buttons.addEventListener("click", (event) => {
  let target = event.target;

  switch(target.id) {
      case "roca":
            playRound("roca", getComputerResponse());
            break;
      case "tijeras":
            playRound("tijeras", getComputerResponse());
            break;
      case "papel":
            playRound("papel", getComputerResponse());
            break;
  }
});

const scorebox = document.querySelector("#score");
const scoreHelper = document.createElement("p");
const score = document.createElement("h3");

let humanScore = 0;
let compScore = 0;

function getComputerResponse() {
    let ran = Math.random();
    if (ran < .333) {
        return "roca"
    } else  if (ran > .333 && ran < .666) {
        return "tijeras"
    } else {
        return "papel"
    }
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        scoreHelper.textContent = "Tie!";
        console.log("Tie!");
    } else if (humanChoice === "roca") {
        if (computerChoice === "tijeras") {
            humanScore ++;
            updateScore("Human wins with Roca beating tijeras!");
        } else {
            compScore++;
            updateScore("Comp wins with Paper beating roca!");
        }
    } else if (humanChoice === "tijeras") {
        if (computerChoice === "papel") {
            humanScore ++;
            updateScore("Human wins with Tijeras beating papel!");
        } else {
            compScore++;
            updateScore("Comp wins with Roca beating Tijeras!");
        }
    } else if (humanChoice === "papel") {
        if (computerChoice === "roca") {
            humanScore ++;
            updateScore("Human wins with Papel beating roca!");
        } else {
            compScore++;
            updateScore("Human wins with Papel beating roca!");
        }
    }
  };

  function updateScore(message) {
    score.textContent = `Human: ${humanScore} - Computer: ${compScore}`;
    scorebox.appendChild(score);
    checkScore(message);
    scorebox.appendChild(scoreHelper);
    
  };

  function checkScore(message) {
        if(humanScore === 5 || compScore === 5) {
            if (compScore > humanScore) {
                scoreHelper.textContent = `Computer wins with ${compScore} to ${humanScore}`;
                humanScore = 0;
                compScore = 0;
            } else {
                scoreHelper.textContent = `Human wins with ${humanScore} to ${compScore}`;
                humanScore = 0;
                compScore = 0;
            }
        } else {
            scoreHelper.textContent = message;
        }
  };
