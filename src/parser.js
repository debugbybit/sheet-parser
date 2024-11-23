const fs = require('fs');
const readline = require('readline');
const chardet = require('chardet');
const iconv = require('iconv-lite');

/**
 * Parse a CSV file and return an array of objects.
 * @param {string} filePath - Path to the CSV file.
 * @param {string} delimiter - The delimiter used in the CSV file (default: ',').
 * @returns {Promise<Array<Object>>} - Parsed CSV as an array of objects.
 */
async function parseCSV(filePath, delimiter = ',') {
    if (!fs.existsSync(filePath)) {
        throw new Error('File not found.');
    }

    // Detect the file encoding
    const detectedEncoding = chardet.detectFileSync(filePath) || 'utf8';
    console.log(`Detected encoding: ${detectedEncoding}`);

    // Create a stream with decoding using iconv-lite
    const fileStream = fs.createReadStream(filePath).pipe(iconv.decodeStream(detectedEncoding));
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    let headers = [];
    const rows = [];

    for await (const line of rl) {
        const trimmedLine = line.trim();

        // Skip empty lines
        if (!trimmedLine) continue;

        const cols = trimmedLine.split(delimiter).map(col => col.replace(/^"|"$/g, '').trim());

        // First row is assumed to be headers
        if (headers.length === 0) {
            headers = cols;
        } else {
            const row = {};
            headers.forEach((header, index) => {
                row[header] = cols[index] || null;
            });
            rows.push(row);
        }
    }

    return rows;
}

module.exports = { parseCSV };
