import fs from 'fs';

export const readFile = (pathAndFileName: string) => {
	return fs.readFileSync(pathAndFileName, {encoding: 'utf8'});
}

export const readJsonFile = (pathAndFileName: string) => {
	return JSON.parse(fs.readFileSync(pathAndFileName, {encoding: 'utf8'}));
}