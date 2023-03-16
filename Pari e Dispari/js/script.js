// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



//2. pari o dispari: scrivere una funzione per verificare se un numero è pari o dispari, quindi chiedere un numero all'utente e comunicargli se è pari o dispari

const userNumber = parseInt(prompt("Dimmi un numero e ti dirò se è pari o dispari"));
const userResult = isOddOrEven(userNumber);
    if(userResult === "odd") {
    console.log("il tuo numero è dispari");
    } else {
    console.log("il tuo numero è pari");
}

//  * Description: Controlla se un numero è pari o dispari
//  * @param {number} numberToCheck
//  * @returns {string} "even" se pari "odd" se dispari

function isOddOrEven(numberToCheck) {
    let result;
    if (numberToCheck % 2 === 0) {
    result = "even";
    } else {
    result = "odd"     }
    return result; 
}
 
//Test della funzione
// console.log(isOddOrEven(4));
