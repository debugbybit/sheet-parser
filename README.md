# **Sheet-Parser**

A lightweight Node.js library for parsing CSV, XLSX, and other structured data formats into usable JavaScript objects. Designed for performance and scalability, it handles large files efficiently and supports various encodings.

---

## **Features**
- 🌟 **Parse CSV files** into structured JavaScript objects.
- 📂 **Scalable:** Handles small files (KBs) to large datasets (GBs) seamlessly.
- 🔤 **Encoding Support:** Decode files with encodings like UTF-8, ISO-8859-1, and Windows-1252.
- ⚙️ **Stream-Based:** Efficient parsing for memory-intensive operations.
- 🛠️ **Extensible:** Designed to support future additions like XLSX parsing.

---

## **Installation**
To install the library, run:

```bash
npm install sheet-parser
```

## **Usage**

### **Basic Example**
Here’s how to parse a simple CSV file:

```javascript
const { parseCSV } = require('sheet-parser');
const path = require('path');

(async () => {
    const filePath = path.resolve(__dirname, './sample.csv');
    const data = await parseCSV(filePath); // Default delimiter: ','; Default encoding: 'utf8'
    console.log(data);
})();
```
**Input `sample.csv`:**
```csv
name,age,city
John,30,New York
Jane,25,Los Angeles

```
**Output:**
```json
[
  { "name": "John", "age": "30", "city": "New York" },
  { "name": "Jane", "age": "25", "city": "Los Angeles" }
]
```

## **API Reference**

### **`parseCSV`**
- **Description:** Parses a CSV file into an array of objects.
- **Parameters:**
  - `filePath` _(string, required)_: Path to the input CSV file.
  - `delimiter` _(string, optional)_: Character used to separate fields (default: `,`).
  - `encoding` _(string, optional)_: File encoding (default: `utf8`).
- **Returns:** A `Promise` that resolves to an array of objects.

#### **Example:**
```javascript
const data = await parseCSV('./data.csv', ',', 'utf8');
```

## **Supported Features**
- ✅ Multi-line fields
- ✅ Fields with embedded delimiters
- ✅ Custom delimiters
- ✅ Support for various encodings
- ✅ Robust handling of missing or null values


## **Contributing**
We welcome contributions to improve this library! Here's how you can help: 

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Submit a pull request with a clear description of the change.

If you encounter any issues or have feature requests, please create an issue by following these steps:

1. Go to the [Issues page](https://github.com/yourusername/sheet-parser/issues) of the GitHub repository.
2. Click on **New Issue**.
3. Provide a clear title and detailed description of the problem or feature request.

---

## **Changelog**

### **v1.0.0**
- Initial release with support for CSV parsing.
- **Features:**
  - Handle large files using streams.
  - Multi-encoding support.
  - Output CSV as JavaScript objects.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.





