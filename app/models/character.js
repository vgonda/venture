import Ember from 'ember';
import DS from 'ember-data';
import Item from './item';
const BASE_HP = 40;
const BASE_MP = 30;

export default DS.Model.extend({
  level: DS.attr('number', {defaultValue: 1}),
  intelligence: 17,
  strength: 17,
  wisdom: 17,
  constitution: 17,
  dexterity: 17,
  charisma: 17,
  class: Ember.computed(function(){
    var classes = ['Wizard', 'Warrior', 'Bard'];
    return classes[Math.floor(Math.random()*classes.length)];
  }),

  items: DS.hasMany('items'),

  maxHealth: Ember.computed('level', 'effectiveConstitution', function() {
    return BASE_HP + (this.get('effectiveConstitution') * this.get('level'));
  }),

  maxMana: Ember.computed('level', 'intelligence', function() {
    return BASE_MP + (this.get('intelligence') * this.get('level'));
  }),

  itemWeights: Ember.computed.mapBy('items','weight'),
  itemWeight: Ember.computed.sum('itemWeights'),
  hampered: Ember.computed('itemWeight','maxWeight', function(){
     return this.get('itemWeight') > this.get('maxWeight');
  }),
  maxWeight: Ember.computed('strength', function() {
     return this.get('strength') * 5;
  }),

  name: Ember.computed(function(){
    var names = ['Zultar', 'Zorky', 'Merlin'];
    return names[Math.floor(Math.random()*names.length)];
  }),

  itemConstitutionBonuses: Ember.computed.mapBy('items', 'constitutionBonus'),
  constitutionBonus: Ember.computed.sum('itemConstitutionBonuses'),
  effectiveConstitution: Ember.computed('constitutionBonus', 'constitution', function() {
    return this.get('constitution') + this.get('constitutionBonus');
  })
});