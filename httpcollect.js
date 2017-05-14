var url = process.argv[2]
var http = require('http')
var bl = require('bl')


http.get(url, function callback(response) {
	response.pipe(bl(function (err,data) {
		if (err) throw err
		// no error found
		console.log(data.length)
		console.log(data.toString())
	}))
})