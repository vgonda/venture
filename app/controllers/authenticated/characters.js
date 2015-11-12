import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
  characters: Ember.computed.alias('model'),
  character: Ember.computed.alias('characters.firstObject'),

  actions: {
    removeCharacter: function() {
      this.get('character').deleteRecord();
      this.get('character').save().then(function() {
      this.set('character', this.get('characters.firstObject'));
      });
    },
  }
});