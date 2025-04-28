const inputs = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './inputs.txt')
    .toString()
    .trim()
    .split('\n\n');

function solution(input) {
    console.log(input);
}

for (const input of inputs) {
    solution(input.trim().split('\n'));
}

module.exports = solution;
