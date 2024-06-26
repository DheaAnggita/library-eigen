function subtractDiagonals(matrix) {
    let diagonal1Sum = 0;
    let diagonal2Sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        diagonal1Sum += matrix[i][i];
        diagonal2Sum += matrix[i][matrix.length - 1 - i];
    }
    const result = diagonal1Sum - diagonal2Sum;
    return result;
}

const matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
];
const result = subtractDiagonals(matrix);
console.log(result); 