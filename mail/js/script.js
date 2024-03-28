// TEST
// alert("ciao");

// ARRAY DELLE MAIL AUTORIZZATE
const mail = ["ylenia@gmail.com", "luca@gmail.com", "chiara@gmail.com", "matteo@gmail.com"]
// RACCOLTA DATI
// chiediamo all'utente la sua mail
const userMail = prompt("scrivi la tua mail");
console.log(userMail);

// creo una variabile flag che di base sarà false
let login = false;

// ESECUZIONE LOGICA
// imposto un ciclo for per controllase se la mail è nella lista delle mail autorizzate
for (let i = 0; i < mail.length; i++) {
    if (userMail === mail[i]) {
        login = true;
        break;
    } else {
        console.log("mail non autorizzata");
    }
    // OUTPUT
// stampo un messaggio sull'esito del controllo

    const resultLogin = document.getElementById("result");
    if (login) {
        resultLogin.innerHTML = "accesso consentito"
    } else {
        resultLogin.innerHTML = "acesso non consentito"
    }
}


