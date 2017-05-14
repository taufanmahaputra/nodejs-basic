var  mymodulefilter = require('./moduleFilter')

filePath = process.argv[2]
fileExt = process.argv[3]

function startRead(err, files) {
	if (err)
		throw err;
	files.forEach(function (file) {
		console.log(file)
	})
}

mymodulefilter(filePath, fileExt, startRead)