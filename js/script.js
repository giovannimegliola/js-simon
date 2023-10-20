"use strict";



// Generazione numeri casuali
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// Verifica se il numero è già presente nell'array. In caso negativo lo aggiunge
function controlRandomNumber(array, number){
    let check = false
    while(check === false){
        if(!array.includes(number)){ 
            check = true; 
        }
    }    
    return true;
}


// preleva i numeri inseriti dall'utente tramite prompt 
function getUserNumber(){
    let userNumber = [];

    while(userNumber.length < 5){
        let number = parseInt(prompt('Inserisci i numeri che hai memorizzato, singolarmente:'));

        if(!userNumber.includes(number)){
            userNumber.push(number);
        }
    }
    return userNumber;
}

let randomNumber = []; // array numeri randomici


for (let i = 0; i < 5; i++){
    let number = getRndInteger (1, 100);

    if(controlRandomNumber(randomNumber,number)){
        randomNumber.push(number);
    }
}

document.getElementById("randomNum").innerHTML = randomNumber;


// funzione timer durata di visualizzazione dei 5 numeri

setTimeout(function(){

  document.getElementById("randomNum").style.display = "none"; 
  document.getElementById("results").innerHTML = 'Tempo scaduto! Inserisci i numeri che ricordi:';

},3000);  //settato a 3 secondi per testare il funzionamento rapidamente



// prompt per inserire i numeri che l'utente ricorda

setTimeout(function(){

  let userNumber = getUserNumber();
  let guessedNum = []; // numeri indovinati
  let score = 0; 
  
  for(let i = 0; i < userNumber.length; i++){

      if(randomNumber.includes(userNumber[i])){
          guessedNum.push(userNumber[i]);
          score++;
      }
     
  }
   
  if (score !== 0){
      document.getElementById("results").innerHTML = `Hai indovinato ${score} numeri. I numeri corretti sono ${guessedNum}`;
  }
  else if (score === 0){
      document.getElementById("results").innerHTML = `Non hai indovinato nessun numero, riprova.`;
  }
  
},4000); 



