// console.log(4 === 3); // False
// console.log(5 > 2); // True
// console.log(12 > 12); // False
// console.log(3 < 0); // False
// console.log(3 >= 3); // True
// console.log(11 <= 11); // True
// console.log(3 <= 2); // False

let player = {
    name: "Chris",
    chips: 120
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function startGame(){
    if (player.chips <= 0){
        messageEl.textContent = "You balance is too low to place another bet. Please fund your account to continue enjoying your games."
    }else{
        isAlive = true;
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards = [firstCard, secondCard];
        sum = firstCard + secondCard;
        renderGame();
        startButton = document.getElementById("start-game");
        startButton.style.display = "none";
        player.chips -= 10
        playerEl.textContent = player.name + ": $" + player.chips;
    }
}

function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard === 1){
        randomCard = 11; 
    } else if (randomCard > 10){
        randomCard = 10;
    }
    return randomCard;    
}

function renderGame(){
    cardsEl.textContent = "Cards: " 
    
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20){
        message = "Do you want to draw a new card? ";
    }else if(sum === 21){
        message = "Wohoo! You've got Blackjack! ";
        hasBlackJack = true;
        player.chips += 50
        playerEl.textContent = player.name + ": $" + player.chips;
        startButton.style.display = "block";
    }else{
        message = "You're out of the game! ";
        isAlive = false;
        startButton.style.display = "block";
    }
    messageEl.textContent = message;
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard(); 
        sum += card;
        cards.push(card);
        renderGame();
    }
}
