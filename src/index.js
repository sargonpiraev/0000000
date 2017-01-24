import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';

import $ from 'jquery';
import { history } from 'backbone';
import Router from './router';
import 'bootstrap-datepicker';


$(() => {
	new Router();
	history.start();
});
