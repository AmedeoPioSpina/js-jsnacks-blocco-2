const wordsCheck = (word1, word2) => {
    if(word1.lenght > word2.lenght) {
        return word1
    }
    else if(word1.lenght < word2.lenght) {
        return word2
    }
    return word1 + " " + word2;
};

const printElement = (text) => {
    let newElement = document.createElement("p");
    newElement.textContent = text;
    let body = document.querySelector("body");
    body.appendChild(newElement);
    return 0;
};

const addValueToAry = (aryInput, aryOutput) => {
    for(let i = 0; i < aryOutput.lenght; i++){
        console.log(aryOutput[i].value);
        aryInput.push(aryOutput[i].value);
    }
    return aryInput;
}

const start = () => {
    let inputList = document.querySelectorAll("input");
    let btn = document.querySelector("button");
    let valueAry = [];
    btn.addEventListener("click",(e) => {
        e.preventDefault();
        debugger;
        addValueToAry(valueAry, inputList);
        const newText = wordsCheck(valueAry[0], valueAry[1]);
        console.log(newText);
        printElement(newText);
    })    

}

start();