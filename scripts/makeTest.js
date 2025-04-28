const fs = require('fs');
const path = require('path');

function makeTest({ folderPath }) {
    const filePath = path.join(folderPath, `test.js`);
    const templatePath = path.join(__dirname, 'sampleTest.js');

    if (!fs.existsSync(filePath)) {
        const template = fs.readFileSync(templatePath, 'utf-8');
        fs.writeFileSync(filePath, template);
    }
}

module.exports = makeTest;
