const fs = require('fs');
const path = require('path');

function makeSolutionFile({ folderPath }) {
    const filePath = path.join(folderPath, `solution.js`);
    const templatePath = path.join(__dirname, 'sampleCode.js');

    if (!fs.existsSync(filePath)) {
        const template = fs.readFileSync(templatePath, 'utf-8');
        fs.writeFileSync(filePath, template);
    }
}

module.exports = makeSolutionFile;
