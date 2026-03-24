// generate-index.js
const fs = require('fs');
const path = require('path');

const BASE_DIR = __dirname;
// Exclude these hidden or root-level folders
const excludedDirs = ['Git', '.git', 'node_modules', '.vscode', '.github'];

function getHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            if (!excludedDirs.includes(file)) {
                getHtmlFiles(filePath, fileList);
            }
        } else if (file.endsWith('.html') && dir !== BASE_DIR) {
            fileList.push(filePath);
        }
    });
    
    return fileList;
}

function extractTitle(htmlContent) {
    const match = htmlContent.match(/<title[^>]*>([^<]+)<\/title>/i);
    return match ? match[1].trim() : 'Unknown Title';
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const htmlFiles = getHtmlFiles(BASE_DIR);
const indexData = [];

htmlFiles.forEach(filePath => {
    // We normalize slashes here so it generates identical data across Windows & GitHub actions (Linux)
    const relativePath = path.relative(BASE_DIR, filePath).replace(/\\/g, '/');
    
    const parts = relativePath.split('/');
    const folder = parts[0];
    const fileName = parts[parts.length - 1];
    
    const slug = fileName.replace('.html', '');
    const category = capitalizeFirstLetter(folder);
    
    const content = fs.readFileSync(filePath, 'utf-8');
    const title = extractTitle(content);
    
    indexData.push({
        title,
        slug,
        folder,
        category
    });
});

fs.writeFileSync(path.join(BASE_DIR, 'index.json'), JSON.stringify(indexData, null, 2), 'utf-8');
console.log(`✅ Successfully updated index.json with ${indexData.length} pages via GitHub Actions.`);
