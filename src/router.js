import $ from 'jquery';
import Backbone from 'backbone';
import SignupView from './signup/view';

export default Backbone.Router.extend({
	routes: {
		signup: 'signup',
		'*filter' : 'signup'
	},
	signup: () => {
		const signupView = new SignupView();
		signupView.render();
	},
	setFilter: function(params) {
		// console.log('app.router.params = ' + params); // just for didactical purposes.
		// window.filter = params.trim() || '';
		// app.todoList.trigger('reset');
	}
});