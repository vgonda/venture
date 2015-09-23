import Ember from 'ember';

var Item =  Ember.Object.extend({
  name: "",
  weight: 0,
  bonuses: {
    constitution: 0,
    strength: 0
  },
  bonusStrings: Ember.computed('bonuses.constitution', function() {
    return [
      "constitution + " + this.get('bonuses.constitution')
    ];
  })
});

Item.reopenClass({
  createRandom: function(name, weight) {
    return Item.create({
      name: name,
      weight: parseInt(weight),
      bonuses:{constitution: 3}});
  }
});

export default Item;