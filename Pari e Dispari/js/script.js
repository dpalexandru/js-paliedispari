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

//funzione per stabile se il numero è pari o dispari 
function checkPariDispari (num) {
  let risultatoControllo = " ";
  if (num %2 === 0) {
    risultatoControllo = 'pari'; 
  } else {
    risultatoControllo = 'dispari'; 
  }
  return risultatoControllo;
}

//stabiliamo se l'utente ha vinto o perso
const risultatoFInale = checkPariDispari(totale); 

if (pariODispari === risultatoFInale) {
  console.log('=========================')
  console.log('Hai vinto 20.000 $$$$$')
  console.log('=========================')

} else {
  console.log('=========================')
  console.log('VInce il banco!!!!!!')
  console.log('=========================')
}