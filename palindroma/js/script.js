// **Palindroma**

// Chiedere all’utente di inserire una parola
const userWord = (prompt("Ciao utente! P.F. inserisci una parola"));
console.log (userWord)

// Creare una funzione per capire se la parola inserita è palindroma
function palindromeWord(word) {
    // trovare la lunghezza della stringa
    const userWordLength = word.length;
    console.log(userWordLength)
    // eseguire un ciclo sulla metà della stringa
    for (let i = 0; i < userWordLength / 2; i++) {
        console.log(userWordLength)
        // controllare SE la prima e l'ultima stringa sono uguali
        if (userWord[i] !== userWord[userWordLength - 1 - i]) {
            return 'NON È PALINDROMO';
        }
    }
    return 'È PALINDROMO';
}

// chiamare la funzione
const value = palindromeWord(userWord);
console.log(value);