import Backbone from 'backbone';

import SignupView from './view/signup';
import SignupSuccessView from './view/signup-success';

export default Backbone.Router.extend({

	routes: {
		'signup': 'signup',
		'signup/success': 'signupSuccess',
		'*filter' : 'signup'
	},

	signup: function () {
		const signupView = new SignupView({
			navigateToSuccess: this.navigateToSuccess.bind(this)
		});
		signupView.render();
	},

	signupSuccess: function () {
		const signupSuccessView = new SignupSuccessView();
		signupSuccessView.render();
	},

	navigateToSuccess: function () {
		this.navigate('signup/success', true);
	}

});