import Backbone from 'backbone';

export default Backbone.Model.extend({

	url: '/signup',

	defaults: {
		firstName: '',
		lastName: '',
		dateOfBirth: '',
		iban: '',
		bic: ''
	},

	sendToServer: function () {
		console.log('Sending data to server: ', this.toJSON());
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 1000);
		});
	}

});