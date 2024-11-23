const { parseCSV } = require('../src/parser');
const path = require('path');
const fs = require('fs'); 

(async () => {
    try {
        // Input and output file paths
        const filePath = path.resolve(__dirname, './sample/sample6.csv'); 
        const outputPath = path.resolve(__dirname, './result/result6.json'); 

        console.log('Parsing CSV file:', filePath);

        const result = await parseCSV(filePath, ',', 'utf8'); 

        // for saving the result in the json file 

        fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf-8');

        console.log(`Parsed data saved to: ${outputPath}`);
    } catch (error) {
        console.error('Error parsing CSV:', error);
    }
})();
