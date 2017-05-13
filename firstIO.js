var fs = require('fs');

filePath = process.argv[2];
data = fs.readFileSync(filePath);
stringData = data.toString();
splitString = stringData.split('\n'); /*this will split stirng by enter*/
console.log(splitString.length-1);