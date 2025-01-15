let arr = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name: "Azhan",
    chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;


function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    arr = [firstCard, secondCard];
    sum = firstCard + secondCard;
    console.log(sum);
    return renderGame();
}
function renderGame(){
if(sum < 21){
   message = "Do you want to draw another card?"
} else if(sum === 21){
    message = "You've got blackjack.";
    hasBlackJack = true;
} else if(sum > 21){
    message = "You've lost the game";
    isAlive = false;
}
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for(i=0; i<arr.length; i++){
    cardsEl.textContent += arr[i] + " ";
  }
}

function newCard(){
    if(isAlive && hasBlackJack ==false){
    let card = getRandomCard();
    sum+=card;
    arr.push(card);
    renderGame();
    } 
}

function getRandomCard(){
    let number = Math.floor(Math.random()*13) + 1;
    if(number == 1){
        return 11;
    }
    else if(number > 10){
        return 10;
    }
    else{
        return number;
    }
    
}

