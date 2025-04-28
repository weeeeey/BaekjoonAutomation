const fs = require('fs');
const path = require('path');
const solution = require('./solution');

// 파일 경로
const inputPath = path.join(__dirname, 'inputs.txt');
const outputPath = path.join(__dirname, 'outputs.txt');

// 파일 읽기
const inputs = fs.readFileSync(inputPath, 'utf-8').trim().split('\n\n');
const outputs = fs.readFileSync(outputPath, 'utf-8').trim().split('\n\n');

// 테스트 실행
inputs.forEach((inputBlock, index) => {
    const inputLines = inputBlock.trim().split('\n');
    const expectedOutput = outputs[index].trim();

    const result = solution(inputLines);

    if (String(result).trim() === expectedOutput) {
        console.log(`✅ Test ${index + 1}: Passed`);
    } else {
        console.log(`❌ Test ${index + 1}: Failed`);
        console.log(`  Expected: ${expectedOutput}`);
        console.log(`  Received: ${result}`);
    }
});
