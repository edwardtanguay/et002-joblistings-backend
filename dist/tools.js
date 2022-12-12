import fs from 'fs';
export const readFile = (pathAndFileName) => {
    return fs.readFileSync(pathAndFileName, { encoding: 'utf8' });
};
export const readJsonFile = (pathAndFileName) => {
    return JSON.parse(fs.readFileSync(pathAndFileName, { encoding: 'utf8' }));
};
//# sourceMappingURL=tools.js.map