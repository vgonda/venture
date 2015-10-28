import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var characters = this.store.findAll('character');
    return characters;  }
});