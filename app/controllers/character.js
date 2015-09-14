import Ember from 'ember';

export default Ember.Controller.extend({
  character: Ember.computed.alias('model'),
  
  _modifyStat: function(stat, amount){
    this.set('model.'+stat, this.get('model.'+stat)+amount);
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