var fs = require('fs');

filePath = process.argv[2];
function readingFile(done) {
	fs.readFile(filePath,function doneReadFile(err,data){
		if (err)
			throw err;
		done(data);
	})
}

function getLine(data) {
	console.log(data.toString().split('\n').length-1);
}

readingFile(getLine);