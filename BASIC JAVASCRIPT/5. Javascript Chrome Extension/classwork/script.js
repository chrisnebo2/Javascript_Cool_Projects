let largeCountries = ["China", "India", "USA"]
let bestFruits = ["Apples", "Bananas"]

function generateSentence(desc, arr) {
    let output
    if (desc === "Largest countries"){
        output = `The 3 Largest countries are `
        for(let i = 0; i < arr.length; i++){
            output += `${arr[i]}, `
        }
    }else if (desc === "Best fruits"){
        output = `The 2 best fruits are `
        for(let i = 0; i < arr.length; i++){
            output += `${arr[i]}, `
        }
    }
    console.log(output)
}

generateSentence("Best fruits", bestFruits)