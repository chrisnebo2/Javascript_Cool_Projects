let count = 0;
let countEl = document.getElementById("count-el");

function increment(){
    count += 1;
    countEl.innerText = count;
}

let saveEl = document.getElementById("save-el");

function save(){
    let savedCount = count + " - ";
    saveEl.innerHTML += savedCount;
    count = 0;
    countEl.textContent = count;
}


// let username = "Chris";
// let message = "You have three new notifications"

// let messageToUser = message + ", " + username + "!";

// console.log(messageToUser);

// let name = "Christian Nebo";
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + name;

// console.log(myGreeting);

// let welcomeEl = document.getElementById("welcome-el");
// let name = "Christian Nebo";
// let greeting = "Welcome back " + name;

// welcomeEl.innerText = greeting;