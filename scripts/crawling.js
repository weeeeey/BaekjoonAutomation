const axios = require('axios');
const cheerio = require('cheerio');

async function fetchProblem(problemNumber) {
    const url = `https://www.acmicpc.net/problem/${problemNumber}`;

    try {
        const { data } = await axios.get(url, {
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            },
        });

        const $ = cheerio.load(data);

        const title = $('#problem_title').text().trim();
        const sampleInputs = [];
        const sampleOutputs = [];

        $('[id^=sample-input-]').each((_, elem) => {
            sampleInputs.push($(elem).text().trim());
        });
        $('[id^=sample-output-]').each((_, elem) => {
            sampleOutputs.push($(elem).text().trim());
        });

        return { title, sampleInputs, sampleOutputs };
    } catch (error) {
        console.error('문제 정보 가져오기 실패:', error.message);
        return null;
    }
}
async function crawling(problemNumber) {
    const problemData = await fetchProblem(problemNumber);
    if (!problemData) {
        console.error('문제 정보를 찾을 수 없습니다.');
        process.exit(1);
    }

    return problemData;
}

module.exports = crawling;
