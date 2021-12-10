// // Crea due array che hanno un numero di elementi diversi.
// //  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

// //creo due array

// const firstArr = ["1", "2", "3", "4", "5",];
// const secondArr = ["1", "2",];

// while (firstArr.length != secondArr.length) {

//     const randNumber = Math.floor(Math.random() * 10);
//     secondArr.push(randNumber);
// }

// console.log(secondArr);


// // for (let i = 0; i < 3; i++) {

// //     const randNumber = Math.floor(Math.random() * 10);

// //      //metto quel numero nell'array

// //      secondArr.push(randNumber);
// //      console.log(secondArr);

// // }






// Crea un array vuoto e chiedi all’utente un numero
// da inserire nell’array. Continua a chiedere i numeri
// all’utente e a inserirli nell’array fino a quando
// a somma degli elementi è minore di 50.

// let userArr = [];

// let sum = 0;


// while (sum < 50) {

//     let userNumber = parseInt(prompt("Inserisci un numero"));

//     userArr.push(userNumber);

//     sum += userNumber;
    
//     console.log(sum);
// }

// console.log(userArr);



// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

// const zucchine = [
//     {
//         varietà: "boh",
//         peso: 3,
//         lunghezza: "10cm" 
//     },

//     {
//         varietà: "boh",
//         peso: 3,
//         lunghezza: "10cm" 
//     },

//     {
//         varietà: "boh",
//         peso: 3,
//         lunghezza: "10cm" 
//     },

//     {
//         varietà: "boh",
//         peso: 3,
//         lunghezza: "10cm" 
//     },

//     {
//         varietà: "boh",
//         peso: 3,
//         lunghezza: "10cm" 
//     },

//     {
//         varietà: "boh",
//         peso: 3,
//         lunghezza: "10cm" 
//     },

//     {
//         varietà: "boh",
//         peso: 3,
//         lunghezza: "18cm" 
//     },

//     {
//         varietà: "boh",
//         peso: 3,
//         lunghezza: "18cm" 
//     },

//     {
//         varietà: "boh",
//         peso: 3,
//         lunghezza: "18cm" 
//     },

//     {
//         varietà: "boh",
//         peso: 3,
//         lunghezza: "18cm" 
//     },
// ]

// // let sum = 0;

// for (let i = 0; i < zucchine.length; i++) {

//     const obj = zucchine[i];

 
//     sum += obj.peso;
// }

// console.log(sum);





// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


// const arrMin = [];
// const arrMax = [];

// let smallSum = 0;
// let bigSum = 0;

// for (let i = 0; i < zucchine.length; i++) {
    
//     const obj = zucchine[i];
//     console.log(obj.lunghezza);

//     if (obj.lunghezza < "15"){

//         arrMin.push(obj.lunghezza)
//         smallSum += obj.peso;

//     } else if (obj.lunghezza > "15") {

//         arrMax.push(obj.lunghezza)
//         bigSum += obj.peso;
//     }
// }

// console.log(arrMin, smallSum + "kg peso finale");
// console.log(arrMax, bigSum + "kg peso finale");



// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const arrLetters = ["a", "b", "c", "d", "e", "f"];

const arrNumbers = [1, 2, 3, 4, 5, 6,];

const arrMerged = []


for (let i = 0; i < arrLetters.length; i++) {
    
    function mergeArraysElement (arr1, arr2) {
    
        return arr1[i] + arr2[i];
    }
    
    let elementMerged = mergeArraysElement (arrLetters, arrNumbers);
        arrMerged.push(elementMerged)

}

console.log(arrMerged);


//lascio questa variante un po' particolare, se sbagliata attendo vostre :)
