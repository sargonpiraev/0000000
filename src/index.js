import $ from 'jquery';
import { history } from 'backbone';
import Router from './router';

$(() => {
	new Router();
	history.start();
});
