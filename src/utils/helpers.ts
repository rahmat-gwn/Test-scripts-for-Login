const fs = require('fs');

export const readJSON = (filePath: string): any => {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};