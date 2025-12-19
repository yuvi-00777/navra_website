import express from 'express';
import cors from 'cors';
import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Path to the Excel file
const FILE_PATH = path.join(__dirname, 'enquiries.xlsx');

// Helper to ensure file exists
const ensureFileExists = () => {
  if (!fs.existsSync(FILE_PATH)) {
    try {
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet([]);
      XLSX.utils.book_append_sheet(wb, ws, 'Enquiries');
      XLSX.writeFile(wb, FILE_PATH);
      console.log('Created new enquiries.xlsx file');
    } catch (err) {
       console.error("Error creating new file:", err);
       throw err;
    }
  }
};

// Route to handle enquiry submission
app.post('/api/enquiry', (req, res) => {
  try {
    const newEnquiry = req.body;
    console.log('Received enquiry:', newEnquiry.email);

    // Add timestamp
    newEnquiry.timestamp = new Date().toISOString();

    ensureFileExists();

    // Read existing file
    let wb;
    try {
        wb = XLSX.readFile(FILE_PATH);
    } catch (readError) {
        console.error("Error reading Excel file:", readError);
        return res.status(500).json({ message: 'Failed to read database file' });
    }

    const sheetName = wb.SheetNames[0];
    const ws = wb.Sheets[sheetName];

    // Convert to JSON
    let existingData = [];
    try {
        existingData = XLSX.utils.sheet_to_json(ws);
    } catch (parseError) {
        console.error("Error parsing Excel data:", parseError);
        // If parse fails, we might want to start fresh or just log it. 
        // We'll treat it as empty for now to append.
        existingData = [];
    }

    // Append new data
    existingData.push(newEnquiry);

    // Convert back to sheet
    const newWs = XLSX.utils.json_to_sheet(existingData);

    // Replace sheet in workbook
    wb.Sheets[sheetName] = newWs;

    // Write file
    try {
        XLSX.writeFile(wb, FILE_PATH);
    } catch (writeError) {
        console.error("Error writing to Excel file (is it open?):", writeError);
        return res.status(500).json({ message: 'Failed to save to file. Please close the Excel file if it is open.' });
    }

    console.log('New enquiry saved successfully.');
    res.status(200).json({ message: 'Enquiry saved successfully' });
  } catch (error) {
    console.error('Unexpected error saving enquiry:', error);
    res.status(500).json({ message: 'Failed to save enquiry' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
