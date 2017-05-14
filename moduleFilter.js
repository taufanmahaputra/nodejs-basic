var fs = require('fs')
var path = require('path')

module.exports = function readDir(filePath, fileExt, done) {
	fs.readdir(filePath, function doneReadDir(err,files){
		if (err) 
			return done(err)

		// theres no error
		files = files.filter(function (file) {
			return path.extname(file) == '.' + fileExt
		})
		done(null,files)
	})
}

