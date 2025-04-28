const path = require('path');
const fs = require('fs');

const inputPath =
    process.platform === 'linux'
        ? '/dev/stdin'
        : path.resolve(__dirname, 'inputs.txt');

const inputs = fs.readFileSync(inputPath).toString().trim().split('\n\n');

function solution(input) {
    console.log(input);
}

function main() {
    let inputNumber = 1;
    for (const input of inputs) {
        console.log(`문제 번호 ${inputNumber++}`);
        solution(input.trim().split('\n'));
    }
}
module.exports = main;
