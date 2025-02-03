import fs from 'fs';
import ejs from 'ejs';
import { ICONS } from './icons.js';

const argv = process.argv;
const dataDir = argv[2] ?? './data.json';
const outputDir = argv[3] ?? './index2.html';

const data = {...JSON.parse(fs.readFileSync(dataDir, { encoding: 'utf-8' })), ICONS};

ejs.renderFile('./templates/index.ejs', data, (err, str) => {
    if(err) {
        console.error(err);
        return;
    }
    fs.writeFileSync(outputDir, str);
});





