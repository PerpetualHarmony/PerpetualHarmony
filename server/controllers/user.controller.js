var model = require('../models/db.js');

module.exports = { 

	users: {
		signUp: function(req, res) {
			// req.body contains the username and password
			console.log('i get here', req.body);
		},

		signIn: function(req, res) {
			console.log('im signing in');
		}
	}
}