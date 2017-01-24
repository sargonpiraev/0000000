import Backbone from 'backbone';
import template from './../template/signup.hbs';
import SignupModel from './../model/signup';
import router from './../router';

export default Backbone.View.extend({

	el: 'body',

	events: {
		'click .save': 'onSubmit',
		'change input.text': 'onInputTextChange',
		'changeDate input.date': 'onDateOfBirthChange'
	},

	initialize: function (options) {
		this.signup = new SignupModel();
		this.formState = new Backbone.Model({ loading: false });
		this.formState.on('change', this.render, this);
		this.navigateToSuccess = options.navigateToSuccess;
	},

	render: function () {
		this.$el.html(template(this.formState.toJSON()));
		this.initDatepicker();
	},

	onSubmit: function (event) {
		this.formState.set('loading', true);
		this.signup.sendToServer().then(() => {
			this.formState.set('loading', false);
			this.navigateToSuccess();
		});
	},

	onInputTextChange: function (event) {
		this.signup.set(event.target.name, event.target.value);
	},

	initDatepicker: function () {
		this.$('input.date').datepicker();
	},

	onDateOfBirthChange: function (event) {
		this.signup.set('dateOfBirth', event.date.toISOString());
	}

});