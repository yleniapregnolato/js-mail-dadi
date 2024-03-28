// TEST
// alert("ciao")

// RACCOLTA DATI
// genero un numero random da 1 a 6 sia per il giocatore che per il computer
let randomNumUser = Math.floor(Math.random () * 6) + 1;
console.log(randomNumUser);

let randomNumComputer = Math.floor(Math.random() * 6) + 1;
console.log(randomNumComputer);

// ottengo i risultati del giocatore e del computer, stampo il risultato nel DOM
const user = randomNumUser;
document.getElementById("user-result").innerHTML = user;

const computer = randomNumComputer;
document.getElementById("computer-result").innerHTML = computer;

// ESECUZIONE LOGICA E OUTPUT
// stabilire il vinctore in base a chi fa il punteggio più alto
const winnerElem = document.getElementById("winner");
if (user > computer) {
    winnerElem.innerHTML = "giocatore"
} else if (user < computer){
    winnerElem.innerHTML = "computer"
} else {
    winnerElem.innerHTML = "pareggio"
}
