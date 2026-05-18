// generate-index.js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function getGitTimestamp(filePath) {
    try {
        const result = execSync(`git log -1 --format="%ct" -- "${filePath}"`, { stdio: 'pipe' }).toString().trim();
        return result ? parseInt(result) * 1000 : fs.statSync(filePath).mtimeMs;
    } catch (e) {
        return fs.statSync(filePath).mtimeMs;
    }
}

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
    if (match) {
        let title = match[1].trim();
        title = title.replace(/FB Internal Tools\s*-\s*|\s*-\s*FB Internal Tools/gi, '');
        title = title.replace(/Fluency Bridge\s*\|\s*|Fluency Bridge\s*-\s*/gi, '');
        return title.trim();
    }
    return 'Unknown Title';
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
    const rootFolder = parts[0];
    const folderPath = parts.slice(0, -1).join('/');
    const fileName = parts[parts.length - 1];
    
    const slug = fileName.replace('.html', '');
    const rootGroup = capitalizeFirstLetter(rootFolder);
    let category = rootGroup;
    
    if (rootFolder.toLowerCase() === 'notes' && parts.length > 2) {
        category = capitalizeFirstLetter(parts[1]);
    }
    
    const content = fs.readFileSync(filePath, 'utf-8');
    const title = extractTitle(content);
    const timestamp = getGitTimestamp(filePath);
    
    indexData.push({
        title,
        slug,
        folder: folderPath,
        category,
        rootGroup,
        timestamp
    });
});

fs.writeFileSync(path.join(BASE_DIR, 'index.json'), JSON.stringify(indexData, null, 2), 'utf-8');
console.log(`✅ Successfully updated index.json with ${indexData.length} pages via GitHub Actions.`);
