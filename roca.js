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

console.log(getComputerResponse());
console.log(getHumanChoice());
