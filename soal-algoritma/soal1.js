function reverseAlphabet(word) {
    let letter = word.match(/[a-zA-Z]/g).reverse().join('');
    let number = word.match(/\d+/g).join('');
    return letter + number;
}

result = reverseAlphabet("NEGIE1")
console.log(result);