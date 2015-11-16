import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
  // character: Ember.computed.alias('model);
  validations: {
    'character.name': {
      presence: true,
      length: { minimum: 3 }
    }
  },

  hasItems: Ember.computed.notEmpty('character.items'),
  burdenPercent: Ember.computed('character.itemWeight', 'character.maxWeight', function() {
    return Math.min(this.get('character.itemWeight') / this.get('character.maxWeight') * 100, 100);
  }),

  _modifyStat: function(stat, amount){
    this.set('character.'+stat, this.get('character.'+stat)+amount);
  },

  healthUrl: "http://cdn.1001freedownloads.com/icon/thumb/383304/heart-icon.png",
  manaUrl: "https://cdn4.iconfinder.com/data/icons/witchcraft-icons/200/magic_triangle_flask-512.png",
  weightUrl: "http://vignette1.wikia.nocookie.net/clubpenguin/images/0/04/Heavy_Hat_icon.png/revision/latest?cb=20130701190254",
  hamperedUrl: "http://icons.iconarchive.com/icons/3dlb/3d-vol2/256/warning-icon.png",

  actions: {
    addCharacter: function() {
        var char = this.store.createRecord('character',
        {
          name: this.get('newCharacter'),
          class: this.get('newClass'),
        });
      this.set('character', char);
      this.set('newCharacter', '');
      this.set('newClass', '');
    },
    removeItem: function(item) {
      this.get('character.items').removeObject(item);
    },
    addItem: function() {
      if (!this.get('character.hampered')) {
        var item = this.store.createRecord('item',
                                          {
          name: this.get('newItem'),
          weight: parseInt(this.get('newWeight')),
          constitutionBonus: parseInt(this.get('newConstitution')),
        });
       this.get('character.items').pushObject(item);
      }
    },
    saveCharacter: function() {
      if (this.get('isValid')) {
        this.get('character').save();
      }
    },
    increaseStat: function(stat) {
      this._modifyStat(stat, 1);
    },

    decreaseStat: function(stat) {
      this._modifyStat(stat, -1);
    },

    levelUp: function() {
      this._modifyStat('level', 1);
      this.send('showModal', {
        template: 'level-character',
        character: this.get('character'),
        pointsLeft: 3
      });
    },
    randomizeCharacter: function() {
      var randomCharacter = this.get('randomCharacterGenerator').randomize();
      this.set('character', randomCharacter);
    },
  }
});
