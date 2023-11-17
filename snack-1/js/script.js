let newAry = [];
let sumNums = 0;

while(sumNums < 50) {
    let inputNum = parseInt(prompt("Inserisci numero: "));
    sumNums += inputNum;
    if(sumNums < 50) {
        newAry.push(inputNum);
    }
    console.log(sumNums);
}
console.log(newAry);