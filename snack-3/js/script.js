const wordsCheck = (word1, word2) => {
    console.log(word1, word2);
    if(word1.lenght > word2.lenght) {
        return word1
    }
    else if(word1.lenght < word2.lenght) {
        return word2
    }
    else if(word1.lenght === word2.lenght){
        return word1 + " " + word2;
    }
};

const start = () => {
    let value1 = prompt();
    let value2 = prompt();
    const result = wordsCheck(value1, value2);
    console.log(result)
}

start();