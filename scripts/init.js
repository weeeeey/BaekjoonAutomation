const fs = require('fs');
const path = require('path');
const crawling = require('./crawling');
const makeTextFile = require('./makeTextFile');
const makeSolutionFile = require('./makeSolutionFile');

const args = process.argv.slice(2); // -- 뒤 인자
const folderName = args[0];

if (!folderName) {
    console.error('폴더 이름(번호)을 입력하세요!');
    process.exit(1);
}

const folderPath = path.join(__dirname, '..', folderName);
(async () => {
    try {
        const problemInfo = await crawling(folderName);
        // 폴더 생성
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        // 문제 파일 생성
        makeSolutionFile({
            problem: folderName,
            folderPath,
        });
        makeTextFile({
            folderPath,
            inputs: problemInfo.sampleInputs,
            outputs: problemInfo.sampleOutputs,
        });

        console.log(`✅ 폴더와 파일 생성 완료: ${folderPath}`);
    } catch (error) {
        console.log(error);
    }
})();
