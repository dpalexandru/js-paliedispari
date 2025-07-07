// chiedo all'utente di inserire una parola e creo la stringa 
const parolaInserita = prompt("Inserisci uan parola, ti dirò se è palidroma");
console.log(parolaInserita);

function controlloPalidroma() {
  const inversoParola = parolaInserita.reverse();
  return inversoParola;
}
controlloPalidroma();
console.log(inversoParola);