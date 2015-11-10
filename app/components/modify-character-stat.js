import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  hasPointsLeft: Ember.computed.gt('pointsLeft', 0),

  actions: {
    increaseStat: function() {
      if (this.get('hasPointsLeft')) {
        this.set('value', this.get('value') + 1);
        this.set('pointsLeft', this.get('pointsLeft') - 1);
      }
    },

    decreaseStat: function() {
      if (this.get('value') > 1) {
        this.set('value', this.get('value') - 1);
        this.set('pointsLeft', this.get('pointsLeft') + 1);
      }
    },
  }
});
