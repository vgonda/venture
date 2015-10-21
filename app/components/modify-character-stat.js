import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  actions: {
    increaseStat: function() {
      this.set('value', this.get('value') + 1);
    },

    decreaseStat: function() {
      this.set('value', this.get('value') - 1);
    },
  }
});
