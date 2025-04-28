const fs = require('fs');
const path = require('path');

function makeTextFile({ inputs, outputs, folderPath }) {
    const inputPath = path.join(folderPath, 'inputs.txt');
    const outputPath = path.join(folderPath, 'outputs.txt');

    if (!fs.existsSync(inputPath)) {
        const inputContent = inputs.join('\n\n');
        fs.writeFileSync(inputPath, inputContent);
    }

    // output.txt 생성
    if (!fs.existsSync(outputPath)) {
        const outputContent = outputs.join('\n\n');
        fs.writeFileSync(outputPath, outputContent);
    }
}

module.exports = makeTextFile;
