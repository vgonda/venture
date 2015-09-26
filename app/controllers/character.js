import Ember from 'ember';

export default Ember.Controller.extend({
  character: Ember.computed.alias('model'),

  hasItems: Ember.computed.notEmpty('character.items'),
  burdenPercent: Ember.computed('character.itemWeight', 'character.maxWeight', function() {
    return Math.min(this.get('character.itemWeight') / this.get('character.maxWeight') * 100, 100);
  }),

  _modifyStat: function(stat, amount){
    this.set('model.'+stat, this.get('model.'+stat)+amount);
  },

  healthUrl: "http://cdn.1001freedownloads.com/icon/thumb/383304/heart-icon.png",
  manaUrl: "https://cdn4.iconfinder.com/data/icons/witchcraft-icons/200/magic_triangle_flask-512.png",
  weightUrl: "http://vignette1.wikia.nocookie.net/clubpenguin/images/0/04/Heavy_Hat_icon.png/revision/latest?cb=20130701190254",
  hamperedUrl: "http://icons.iconarchive.com/icons/3dlb/3d-vol2/256/warning-icon.png",

  actions: {
    removeItem: function(item) {
      this.get('character.items').removeObject(item);
    },
    addItem: function() {
      if (!this.get('character.hampered')) {
        var item = this.store.createRecord('item',
                                          {
          name: this.get('newItem'),
          weight: parseInt(this.get('newWeight')),
          constitutionBonus:3
        });
       this.get('character.items').pushObject(item);
      }
    },
    increaseStat: function(stat) {
      this._modifyStat(stat, 1);
    },

    decreaseStat: function(stat) {
      this._modifyStat(stat, -1);
    },
  }
});