/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Bonus
Invece di generare il numero random per l'utente, chiedilo con un prompt!
*/

// lista numero facce del dado

let facceDado= [1,2,3,4,5,6];
console.log(facceDado)

// generazione casuale per il player e per il pc

//   Math.floor(Math.random() * max) //

let dadoPlayer = facceDado[Math.floor(Math.random() * facceDado.length)]; 
console.log(dadoPlayer);

let dadoComputer = facceDado[Math.floor(Math.random() * facceDado.length)]; 
console.log(dadoComputer);


// condizione if per verificare qual'è quello più alto

if (dadoPlayer > dadoComputer) {

    console.log("Hai vinto");

} else if (dadoComputer > dadoPlayer) {

    console.log("Hai perso, prova di nuovo");

} else {

    console.log("Avete lanciato lo stesso numero,pari e patta");
}

