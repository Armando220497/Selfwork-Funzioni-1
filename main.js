gioco();

function gioco() {

    let tiri = prompt("Quanti tiri devono effettuare i giocatori?");



    // verifica numero valido
    if (tiri <= 0) {
        console.log("Per favore, inserisci un numero valido di tiri.");
        return;
    }

    // Funzione per generare un numero casuale tra 1 e 6
    function tiraDado() {
        return Math.floor(Math.random() * 6) + 1;
    }

    // Calcola il punteggio per ogni giocatore
    let punteggioGiocatore1 = 0;
    let punteggioGiocatore2 = 0;

    for (let i = 0; i < tiri; i++) {
        punteggioGiocatore1 += tiraDado();
        punteggioGiocatore2 += tiraDado();
    }

    // Stampa i punteggi finali
    console.log("Punteggio Giocatore 1: " + punteggioGiocatore1);
    console.log("Punteggio Giocatore 2: " + punteggioGiocatore2);

    // Determina il vincitore
    if (punteggioGiocatore1 > punteggioGiocatore2) {
        console.log("Il Giocatore 1 ha vinto!");
    } else if (punteggioGiocatore1 < punteggioGiocatore2) {
        console.log("Il Giocatore 2 ha vinto!");
    } else {
        console.log("È un pareggio!");
    }
}



