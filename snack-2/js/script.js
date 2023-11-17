let namesList = [
    "Mario",
    "Luigi",
    "Antonio",
    "Francesco",
    "Lorenzo"
];

let surnamesList = [
    "Spina",
    "Ciccone",
    "Rico",
    "Silvestri",
    "Rossi"
];

let guessList = [];

for(let i = 0; i< 5; i++){
    let index1Random = Math.floor(Math.random() * 4);
    let index2Random = Math.floor(Math.random() * 4);
    let guessGenerator = namesList[index1Random] + " " + surnamesList[index2Random];
    guessList.push(guessGenerator);
}

console.log(guessList);