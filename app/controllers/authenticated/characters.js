import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
  characters: Ember.computed.alias('model'),

  actions: {
    removeCharacter: function(id) {
      this.get('store').find('character', id).then(function(rec){
        rec.deleteRecord();
        rec.save();
      });
    },
  }
});