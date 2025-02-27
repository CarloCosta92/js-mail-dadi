// bonus

//Invece di generare il numero random per l'utente, chiedilo con un prompt!


// lista numero facce del dado

let facceDado= [1,2,3,4,5,6];
console.log(facceDado);

// generazione scelta per il player

let dadoPlayer = parseInt(prompt("Scegli un numero da 1 a 6"));

// generazione casuale per il pc

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

