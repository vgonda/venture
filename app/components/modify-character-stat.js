import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  _modifyStat: function(stat, amount){
    this.set('char.'+stat, this.get('char.'+stat)+amount);
  },

  getStat: function(stat) {
    return this.get('char.' + stat);
  },

  actions: {
    increaseStat: function(stat) {
      this._modifyStat(stat, 1);
    },

    decreaseStat: function(stat) {
      this._modifyStat(stat, -1);
    },
  }
});
