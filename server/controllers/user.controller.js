var model = require('../models/db.js');

module.exports = { 

	users: {
		signUp: function(req, res) {
			// req.body contains the username and password
			var user = req.body;
			model.user.signUp(user)
				.then(username => {
					// not actual username, stored in object have to take it out 
					console.log('the user is', username)
				})
				.catch(error =>{
					console.log(error);
				});
		},

		signIn: function(req, res) {
			var user = req.body; 
			model.user.signIn(user)
				.then(data => {

				})
				.catch(error => {
					console.log(error);
				});
		}
	}
}