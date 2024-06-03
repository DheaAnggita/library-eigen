function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return `${longest}: ${longest.length} character`;
}
const sentence = "Saya sangat senang mengerjakan soal algoritma";
const longestWordInSentence = longestWord(sentence);
console.log(longestWordInSentence);