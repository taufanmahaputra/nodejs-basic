var fs = require('fs')
var path = require('path')

filePath = process.argv[2]
fileExt = process.argv[3]

function readDir(done) {
	fs.readdir(filePath, function doneReadDir(err,files){
		if (err) 
			throw err
		done(files)
	})
}

function startRead(files) {
	for (var file of files) 
		if(path.extname(file) == ('.' + fileExt))
			console.log(file)
}

readDir(startRead)