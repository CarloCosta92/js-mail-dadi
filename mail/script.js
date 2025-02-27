/*
Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle email
*/

// creazione lista invitati

let invitati = [ "carlo@gmail.com" ,"stefano@gmail.com", "sabrina@gmail.com", "jacopo@libero.it", "alessandro@libero.it","ottavia@libero.it", "boolean@css.it", "zuccherosintattico@angela.it" ];

// inserimento mail persona che vuole partecipare

let mailUtente = prompt("Dimmi la tua mail cosi che possiamo verificare se se stato invitato");

// inserisco variabile booleana ciclo for per verificare se 

let mailValida = false;

//ciclo for per verificare se la persona può partecipare

for (let i=0 ; i < invitati.length; i++){

    if(mailUtente === invitati[i]){

        console.log("Sei stato invitato,puoi entrare!!! Divertiti");

        alert("Sei stato invitato,puoi entrare!!! Divertiti");

        mailValida = true;
        break;

    } 
}

if (!mailValida){
    console.log("Non sei stato invitato,non provare più ad imbucarti!");

    alert("Non sei stato invitato,non provare più ad imbucarti!");

}
        
    




