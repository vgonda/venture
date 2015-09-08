import Ember from 'ember';

var MapRow = Ember.Objext.extend({
columns: []
});
var MapCell = Ember.Object.extend({
  text: "_"
});

export default Ember.Controller.extend({

  init: function() {
  this.set('name', 'The Hopeful Forest');

    var rows = [
      MapRow.create({columns: [
                    MapCell.create(),
                    MapCell.create(),
                    MapCell.create(),
                    ]}),
      MapRow.create({columns: [
                    MapCell.create(),
                    MapCell.create(),
                    MapCell.create(),
                    ]}),MapRow.create({columns: [
                    MapCell.create(),
                    MapCell.create(),
                    MapCell.create(),
                    ]})
    ];
    this.set('rows', rows);
}
});
