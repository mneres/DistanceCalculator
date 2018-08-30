'use strict';

const fs = require("fs");

class TextFileUtils {
  readTextFile(filePath){
    return new Promise((resolve, reject) => {

      if(!filePath){
        const err = new Error('File path is not defined');
        return reject(err); 
      }

      fs.readFile(filePath, (err, data) => {
        if (err) return reject(err);
        return resolve(data.toString());
      });
    });
  }

  splitStringIntoArrayOfJson(str){
    const response = [];
    const arr = str.split("\n");
    const promises = arr.map(async row => {
      const jsonRow = JSON.parse(row);
      response.push(jsonRow);
    });
    await Promise.all(promises);
    return resolve(response);
  }
}

module.exports = TextFileUtils;