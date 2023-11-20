const start = () => {
    let num1 = parseInt(prompt());
    let num2 = parseInt(prompt());

    let result = maxOrMin(num1, num2);

    console.log(result)
}

const maxOrMin = (value1 , value2) => {
    if(value1 === value2){
        return value1;
    }
    else if(value1 % value2 === 0){
        return true;
    }
    else if(value1 % value2 !== 0){
        return false;
    }
}

start();