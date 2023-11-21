const start = () => {
    let squareNum = parseInt(prompt("How many square?"));
    squareGen(squareNum);
}

const squareGen = (number) => {
    for(let i = 0; i < number; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("square");
        let container = document.querySelector(".container");
        container.appendChild(newDiv);
    }
}

start();