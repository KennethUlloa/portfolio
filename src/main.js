import fs from 'fs';
import ejs from 'ejs';
import { ICONS } from './icons.js';

const argv = process.argv;
const dataDir = argv[2] ?? './data.json';
const outputDir = argv[3] ?? './';

const data = {...JSON.parse(fs.readFileSync(dataDir, { encoding: 'utf-8' })), ICONS};

if (data?.email?.dir) {
    data.email.encoded = Buffer.from(data.email.dir).toString('base64');
}

ejs.renderFile('./templates/index.ejs', data, (err, str) => {
    if(err) {
        console.error(err);
        return;
    }
    fs.writeFileSync(outputDir + 'index.html', str);
});

ejs.renderFile('./templates/index.js.ejs', data, (err, str) => {
    if(err) {
        console.error(err);
        return;
    }
    fs.writeFileSync(outputDir + 'index.js', str);
});