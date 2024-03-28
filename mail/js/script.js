// TEST
// alert("ciao");

// ARRAY DELLE MAIL AUTORIZZATE
const mails = ["ylenia@gmail.com", "luca@gmail.com", "chiara@gmail.com", "matteo@gmail.com"]
// RACCOLTA DATI
const result = document.getElementById("result");
// chiediamo all'utente la sua mail
const userMail = prompt("scrivi la tua mail");
console.log(userMail);

// creo una variabile flag che di base sarà false
let login = false;

// ESECUZIONE LOGICA
// imposto un ciclo for per controllase se la mail è nella lista delle mail autorizzate
for (let i = 0; i < mails.length; i++) {
    if (userMail === mails[i]) {
        login = true;
        break;
    } else {
        console.log("mail non autorizzata");
    }
}

// OUTPUT
// stampo un messaggio sull'esito del controllo
if (login) {
    result.innerHTML = "accesso consentito"
} else {
    result.innerHTML = "acesso non consentito"
}