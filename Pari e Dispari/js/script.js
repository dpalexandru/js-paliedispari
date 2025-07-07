//Chiediamo all' utente pari o dispari e numero
const pariODispari = prompt("Scegli pari o dispari")
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"))

console.log(`Hai scelto ${pariODispari} e il numero ${numeroUtente}`)

// generiamo numero random per computer 
function numeroRandom() {
  const numeroCasuale = Math.floor(Math.random() * 5) + 1;
  return numeroCasuale;
}

//stampiamo per test
const numeroPc = numeroRandom();
console.log("Il numero dell'avversario è: ",numeroPc);

//sommiamo i due numeri 
const totale = numeroUtente + numeroPc;
console.log("Il totale delle vostre giocate è: ",totale);

