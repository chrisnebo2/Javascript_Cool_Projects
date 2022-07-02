let fruit = ["apple", "orange", "apple", "apple", "orange"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function sortFruits(){
    for (let i = 0; i < fruit.length; i++){
        if(fruit[i] === "apple"){
            appleShelf.textContent += fruit[i] + " "
        }else{
            orangeShelf.textContent += fruit[i] + " "        
        }
    }
}

sortFruits();
