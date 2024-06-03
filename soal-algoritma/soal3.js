function countWordsInInput(input, query) {
    const wordCount = {};
    input.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });
    const result = query.map(word => wordCount[word] || 0);
    return result;
}

const INPUT = ['dc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
const output = countWordsInInput(INPUT, QUERY);
console.log(output); 