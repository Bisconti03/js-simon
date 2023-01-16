const randomNumberList = [];
const promptNumberList = [];
let randomNumber;
let promptNumber;
const numbersDiv = document.getElementById('numbers')
// creiamo tramite il randomNumGen dei numeri casuali,prendiamone 5 
for (let i = 0; i < 5; i++) {
  randomNumber = randomNumGen(1, 500);
  console.log(randomNumber);
  randomNumberList.push(randomNumber);

  // e li facciamo visualizzare all'utente in pagina
 numbersDiv.innerHTML ='Ricorda questi numeri, hai 30 secondi: '+ randomNumberList;
}



// creiamo una timing function che si attiverà dopo 30000ms dove facciamo scomparire i numeri
setTimeout(function() {

  numbersDiv.innerHTML = '';

  
}, 30000);

// creiamo una seconda timing function che si attiverà subito dopo la scomparsa dei numeri
// chiediamo all'utente di scrivere i vari numeri che ricorda
// il programma poi calcola quanti numeri ha indovinato e quali sono e con un alert dà l'esito all'utente
setTimeout(function() {
  for (let i = 0; i < 5; i++) {
    promptNumber = parseInt(prompt("inserisci i numeri che ricordi"));

    for (let j = 0; j < randomNumberList.length; j++) {
      if (promptNumber == randomNumberList[j]) {
        promptNumberList.push(promptNumber);
      }
    }

  }
  alert("Hai indovinato " + promptNumberList.length + " numeri. Esattamente i numeri: " + promptNumberList)
  console.log(promptNumberList)
}, 30100)

// randomNumGen
function randomNumGen(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}