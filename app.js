var express = require ('express')
var bodyParser = require('body-parser')
var meetInService = require('./service/meetService')
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.post('/api/addMeetIn', function (req, res) { 
	let meetInServiceObj = new meetInService(req, res)
	meetInServiceObj.addMeetIn()
})

app.post('/api/getMeetIn', function (req, res) { 
	let meetInServiceObj = new meetInService(req, res)
	meetInServiceObj.getMeetIn()
})

app.listen(3000, function () {
	console.log ('To Do List Web app service listening on port 3000!')
})
