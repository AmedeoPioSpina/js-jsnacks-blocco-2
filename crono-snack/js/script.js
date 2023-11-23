let tempo = () => {
    sec += 1;
    console.log(sec);
}

let sec = 0;
let btnList = document.querySelectorAll("button");

btnList[0].addEventListener("click", () => {
    let cronometro = setInterval(tempo, 1000, 0);
    btnList[1].addEventListener("click", () => {
        clearInterval(cronometro);
    });
})