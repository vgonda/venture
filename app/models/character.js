import Ember from 'ember';
const BASE_HP = 40;
const BASE_MP = 30;

export default Ember.Object.extend({
  level: 1,
  int: 17,
  constitution: 17,
  strength: 10,
  intelligence: 10,
  wisdom: 10,
  dexterity: 10,
  charisma: 10,

  maxHealth: Ember.computed('level', 'constitution', function() {
    return BASE_HP + (this.get('constitution') * this.get('level'));
  }),
  
  maxMana: Ember.computed('level', 'intelligence', function() {
    return BASE_MP + (this.get('intelligence') * this.get('level'));
  }),

  name: Ember.computed(function(){
    var names = ['Zultar', 'Zorky', 'Merlin'];
    return names[Math.floor(Math.random()*names.length)];
  }),

  class: Ember.computed(function() {
    var classes = ['wizard', 'warrior', 'bard', 'elf', 'valkyrie'];
    return classes[Math.floor(Math.random()*classes.length)];
  }),
});