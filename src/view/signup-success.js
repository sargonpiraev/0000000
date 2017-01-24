import Backbone from 'backbone';
import template from './../template/signup-success.hbs';

export default Backbone.View.extend({

	el: 'body',

	template,

	render: function () {
		this.$el.html(this.template());
	}

});