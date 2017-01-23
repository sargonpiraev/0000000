import Backbone from 'backbone';
import template from './template.hbs';

export default Backbone.View.extend({
	el: 'body',
	render: function () {
		this.$el.html(template());
		return this;
	}
});