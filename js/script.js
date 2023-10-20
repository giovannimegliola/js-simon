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
    let user_number = [];

    while(user_number.length < 5){
        let number = parseInt(prompt('Inserisci i numeri che hai memorizzato, singolarmente:'));

        if(!user_number.includes(number)){
            user_number.push(number);
        }
    }
    return user_number;
}

let random_number = []; // array numeri randomici


for (let i = 0; i < 5; i++){
    let number = getRndInteger (1, 100);

    if(controlRandomNumber(random_number,number)){
        random_number.push(number);
    }
}

document.getElementById("randomNum").innerHTML = random_number;



