const inputs = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './inputs.txt')
    .toString()
    .trim()
    .split('\n');
