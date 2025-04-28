#!/usr/bin/env node

const path = require('path');

try {
    // 1. 번호 가져오기
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.error('문제 번호를 입력하세요!');
        process.exit(1);
    }

    const problemNumber = args[0];

    // 2. solution.js 경로 생성
    const solutionPath = path.resolve(
        __dirname,
        '..',
        problemNumber,
        'solution.js'
    );

    const main = require(solutionPath);
    main();
} catch (error) {
    console.error('solution.js 파일을 불러오거나 실행하는 데 실패했습니다.');
    console.error(error.message);
    process.exit(1);
}
