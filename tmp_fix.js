const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src/components');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. duration: X -> 0.3
    content = content.replace(/duration:\s*0\.[456789]/g, 'duration: 0.3');
    content = content.replace(/duration:\s*1(\.0)?/g, 'duration: 0.3');
    
    // Change delay between staggered items from 150-200ms to 50ms
    content = content.replace(/delay:\s*index\s*\*\s*0\.[0-9]+/g, 'delay: index * 0.05');
    
    // We might also want to reduce static delays so it feels snappy:
    content = content.replace(/delay:\s*0\.[3456789]/g, 'delay: 0.1');

    // 2. INCREASE the viewport trigger threshold
    content = content.replace(/viewport=\{\{\s*once:\s*true\s*\}\}/g, 'viewport={{ once: true, margin: "-100px" }}');

    // 3. REDUCE translateY distance
    content = content.replace(/y:\s*20/g, 'y: 10');
    content = content.replace(/y:\s*30/g, 'y: 10');
    content = content.replace(/y:\s*40/g, 'y: 10');
    content = content.replace(/y:\s*50/g, 'y: 10');

    // 5. Add will-change: transform
    // case 1: className="..."
    content = content.replace(/<motion\.([a-zA-Z]+)([^>]*)className="([^"]*)"/g, (match, tag, beforeClass, classNames) => {
        if (!classNames.includes('will-change-transform')) {
            return `<motion.${tag}${beforeClass}className="${classNames} will-change-transform"`;
        }
        return match;
    });
    
    // case 2: className={`...`}
    content = content.replace(/<motion\.([a-zA-Z]+)([^>]*)className={`([^`]+)`}/g, (match, tag, beforeClass, classNames) => {
        if (!classNames.includes('will-change-transform')) {
            return `<motion.${tag}${beforeClass}className={\`${classNames} will-change-transform\`}`;
        }
        return match;
    });
    
    // case 3: missing className completely? rare on framer motion tags but possible. 
    // Usually they all have classNames.

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated', path.basename(filePath));
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            processFile(fullPath);
        }
    }
}

walkDir(srcDir);
