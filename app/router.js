import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  //nested routes
  this.route('authenticated', function() {
    this.route('map');
    this.route('character');
    this.route('secretz');
  });
});

export default Router;