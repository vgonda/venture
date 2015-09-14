import Ember from 'ember';
const BASE_HP = 40;

export default Ember.Object.extend({
  level: 1,
  int: 17,
  constitution: 17,
  
  maxHealth: Ember.computed('level', 'constitution', function() {
    return BASE_HP + (this.get('constitution') * this.get('level'));
  }),
  
  name: Ember.computed(function(){
    var names = ['Zultar', 'Zorky', 'Merlin'];
    return names[Math.floor(Math.random()*names.length)];
  })
});