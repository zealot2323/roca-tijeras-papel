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

console.log(getComputerResponse());