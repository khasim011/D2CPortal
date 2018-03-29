const config = {
	"Host": "https://khasimali.atlassian.net",
	"Jira_username": "khasim.ali@zensar.com",
    "Jira_password": "ZEns@r123",
    "ApiToken": "a2hhc2ltLmFsaUB6ZW5zYXIuY29tOlFLNWdpcG5mMkd0Z00ya05IYVcxQ0ZFRQ==",
    "CreateTicketObject":{
		"fields": {
			"project": {
				"id": "10000"
			},
			"summary": "Request for virtual asset",
			"issuetype": {
				"id": "10001"
			},
			"priority": {
				"id": "4"
			},
			"description": "Fields Mark For Description. Bold for title, regular for value"
		}
	}
};

module.exports = config;