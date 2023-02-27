/*  
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito 
del controllo.
*/

/*  - crea un array dove inserisci tutte le email
    che possono accedere
    - chiedi all'utente l'email in un campo di input
    con evento al click sul pulsante e memorizza il
    valore ottenuto in una variabile
    ? SE L'email inserita dall'utente corrisponde 
      ad una di quelle inserita nella liste di quelle
      che possono accedere
    -  ° stampa messaggio di approvazione
    : ALTRIMENTI 
       ° resetta i valori e stampa un messaggio nella
         quale si chiede di riprovare
*/

let containerEl = document.getElementById("container");
let userEmailEl = document.getElementById("userEmail");
let submitEl = document.getElementById("submit");
let canAccesAccepted = false;

let canAccess = ["domenico.bacoli@gmail.com", "bacoli.domenico@gmail.com", "domenicobacoli@gmail.com"];

submitEl.addEventListener("click", function() {
    canAccesAccepted = false;
    containerEl.append("");

    for(let i = 0; i < canAccess.length; i++){
        
        if(userEmailEl.value == canAccess[i]){
            canAccesAccepted = true;
        }
    }

    if(canAccesAccepted == true) {
        containerEl.append("Accesso Eseguito");
        
    } else {
        userEmailEl.value = "";
        containerEl.append("Accesso Negato! Riprova"); 
    }

});

// Gioco dei Dadi

/* 

Generare un numero random da 1 a 6,
sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio 
più alto.

*/
/*
  - genera un numero da 1 a 6 random con Math.random per il giocatore
  - prendi  quel numero e inseriscilo in una variabile
*/

