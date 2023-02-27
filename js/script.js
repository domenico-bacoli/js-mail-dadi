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
  - genera un numero da 1 a 6 con Math.random per il giocatore e memorizzalo in una variabile
    e stampalo a schermo
  - genera un numero da 1 a 6 con Math.random per il computer e memorizzalo in una variabile
    e stampalo a schermo
  - ? SE il numero del giocatore e maggiore del numero del computer 
        ° giocatore ha vinto
    : ALTRIMENTI SE il numero del computer è più alto
        ° computer ha vinto
    : ALTRIMENTI 
        ° Parità
*/

let diceContainerEl = document.getElementById("diceContainer");
let userChooseEl = document.getElementById("userChoose");
let computerChooseEl = document.getElementById("computerChoose");
let resultEl = document.querySelector(".result");
let userDiceImageEl = document.getElementById("userDiceImage");
let computerDiceImageEl = document.getElementById("computerDiceImage");
let throwButtonEl = document.getElementById("throwButton");

let diceImage = ["https://freesvg.org/img/dado-1.png",
                 "https://freesvg.org/img/dado-2.png", 
                 "https://freesvg.org/img/dado-3.png", 
                 "https://freesvg.org/img/dado-4.png", 
                 "https://freesvg.org/img/dado-5.png", 
                 "https://freesvg.org/img/dado-6.png"];

throwButtonEl.addEventListener("click", function(){

userChooseEl.style.display = "block";
computerChooseEl.style.display = "block";
resultEl.style.display = "block"


let userChoose = Math.floor( (Math.random() * 6 ) + 1);
let computerChoose = Math.floor( (Math.random() * 6 ) + 1);

//scelta dell'utente
if(userChoose == 1){
    userDiceImageEl.src = diceImage[0];
} else if (userChoose == 2){
    userDiceImageEl.src = diceImage[1];
} else if (userChoose == 3) {
    userDiceImageEl.src = diceImage[2];
} else if (userChoose == 4) {
    userDiceImageEl.src = diceImage[3];
} else if (userChoose == 5) {
    userDiceImageEl.src = diceImage[4];
} else if (userChoose == 6) {
    userDiceImageEl.src = diceImage[5];
}

//scelta del Computer 
if(computerChoose == 1){
    computerDiceImageEl.src = diceImage[0];
} else if (computerChoose == 2){
    computerDiceImageEl.src = diceImage[1];
} else if (computerChoose == 3) {
    computerDiceImageEl.src = diceImage[2];
} else if (computerChoose == 4) {
    computerDiceImageEl.src = diceImage[3];
} else if (computerChoose == 5) {
    computerDiceImageEl.src = diceImage[4];
} else if (computerChoose == 6) {
    computerDiceImageEl.src = diceImage[5];
}

if(userChoose > computerChoose){
    resultEl.innerText = ("HAI VINTO!!");

} else if (userChoose < computerChoose){
    resultEl.innerText = ("HAI PERSO!");

} else {
    resultEl.innerText = ("PARITA'");
}

})



