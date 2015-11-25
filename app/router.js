import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', {path: '/'});
  //nested routes
  this.route('authenticated', function() {
    this.route('map');
    this.route('characters');
    this.route('add-a-character');
    this.route('secretz');
    this.route('play', {path: '/play/:character'});
  });
});

export default Router;