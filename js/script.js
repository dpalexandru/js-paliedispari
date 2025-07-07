// chiedo all'utente di inserire una parola e creo la stringa 
const parolaInserita = prompt("Inserisci uan parola, ti dirò se è palidroma");
console.log("Parola inserita:", parolaInserita);

function controlloPalindroma() {
  const inputInArray = parolaInserita.split('');
  const inversoParola = inputInArray.reverse()
  return inversoParola;
};

//chaimo la funzione + test
const parolaInvertita = controlloPalindroma().join('');
console.log("Parola invertita:", parolaInvertita);


// stampo il risultato 
if (parolaInserita === parolaInvertita) {
  console.log("La parola inserita è Palindroma.")
} else {
  console.log("La parola inserita non è Palindroma.")

}