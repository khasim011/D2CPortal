const express = require('express');
const router = express.Router();
const config = require('../config');
const request = require('request');
var fs = require('file-system');

// Jira Login API
router.get('/login', (req, res) => {
    var obj = JSON.stringify({
    	"username": config.Jira_username,
    	"password": config.Jira_password
    });
	request.post({
		url:config.Host+'/rest/auth/1/session',
		headers: {
	    	'Content-Type': 'application/json',
	    	'Accept': 'application/json'
		},
		body: obj
	},
	function(error, response, body){
		if(!error && (response.statusCode == 200 || response.statusCode == 201)){
			res.send(JSON.parse(response.body));
		} else{
			res.send({"error":error});
		}
	});
});

//Jira Get Ticket
router.get('/GetTicket/:Id', (req, res) => {
	request.get({
		url:config.Host + '/rest/api/2/issue/' + req.params.Id,
		headers: {
	    	'Content-Type': 'application/json',
	    	'Authorization': 'Basic ' + config.ApiToken
		}
	},
	function(error, response, body){
		if(!error && (response.statusCode == 200 || response.statusCode == 201)){
			res.send(JSON.parse(response.body));
		} else{
			res.send({"error":error});
		}
	});
});

//Jira Create Ticket
router.post('/CreateTicket', (req, res) => {
	var obj = JSON.stringify(config.CreateTicketObject);
	request.post({
		url:config.Host + '/rest/api/2/issue',
		headers: {
	    	'Content-Type': 'application/json',
	    	'Accept': 'application/json',
	    	'Authorization': 'Basic ' + config.ApiToken
		},
		body: obj
	},
	function(error, response, body){
		if(!error && (response.statusCode == 200 || response.statusCode == 201)){
			res.send(JSON.parse(response.body));
		} else{
			res.send({"error":error});
		}
	});
});

//Jira Add Attachment To Ticket
router.get('/AddAttachments', (req, res) => {
	request.post({
		url:config.Host + '/rest/api/2/issue/KHASIMALI-7/attachments',
		headers: {
			'Content-Type': 'multipart/form-data',
	    	'X-Atlassian-Token': 'no-check',
	    	'Authorization': 'Basic ' + config.ApiToken
		},
		formData: {file:fs.createReadStream('C:\\Users\\KA52117.IND\\Desktop\\Ticket_Raise.png')}
	},
	function(error, response, body){
		console.log("---->"+JSON.stringify(response));
		if(!error && (response.statusCode == 200 || response.statusCode == 201)){
			res.send(JSON.parse(response.body));
		} else{
			res.send({"error":error});
		}
	});
});

//Jira Get All Project Categories
router.get('/ProjectCategoriesList', (req, res) => {
	request.get({
		url:config.Host + '/rest/api/2/projectCategory',
		headers: {
			'Accept': 'application/json',
	    	'Authorization': 'Basic ' + config.ApiToken
		}
	},
	function(error, response, body){
		console.log("---->"+JSON.stringify(response));
		if(!error && (response.statusCode == 200 || response.statusCode == 201)){
			res.send(JSON.parse(response.body));
		} else{
			res.send({"error":error});
		}
	});
});

module.exports = router;