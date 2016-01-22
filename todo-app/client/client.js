Meteor.subscribe('todos');

//Хелперы

Template.today.helpers({
    todoResult: function () {
        return Todos.find({
            family: 'd'
        }, {
            sort: {
                rank: 1
            }
        });
    }
});

Template.week.helpers({
    todoResult: function () {
        return Todos.find({
            family: 'w'
        }, {
            sort: {
                rank: 1
            }
        });
    }
});

Template.junk.helpers({
    todoResult: function () {
        return Todos.find({
            family: 'j'
        }, {
            sort: {
                rank: 1
            }
        });
    }
});

//Эвенты

Template.body.events({
    'click .check-event': function (e) {
        var todoId = this._id;
        var check = !this.isChecked;
        Meteor.call('todoIsDone', todoId, check);
    }
});

Template.today.events({
    'submit form': function (e) {
        e.preventDefault();
        var task = e.target.task.value;
        var family = 'd';
        e.target.task.value = '';
        Meteor.call('insertTodo', task, family);
    }
});

Template.week.events({
    'submit form': function (e) {
        e.preventDefault();
        var task = e.target.task.value;
        var family = 'w';
        e.target.task.value = '';
        Meteor.call('insertTodo', task, family);
    }
});

Template.junk.events({
    'submit form': function (e) {
        e.preventDefault();
        var task = e.target.task.value;
        var family = 'j';
        e.target.task.value = '';
        Meteor.call('insertTodo', task, family);
    }
});


//sortable 

 Template.body.rendered = function () {
        this.$('#items').sortable({


            dropOnEmpty: true,
            connectWith: "#itemsWeek, #itemsJunk",

            receive: function (e, ui) {

                el = ui.item.get(0);
                
                before = ui.item.prev().get(0)
                after = ui.item.next().get(0)
                
                if(before === undefined) {
                    before = ui.item.get(0);
                }
                
                if(after === undefined) {
                    after = ui.item.get(0);
                }
                
                
                if (!before) {
                    newRank = Blaze.getData(after).rank - 1

                    
                } else if (!after) {
                    newRank = Blaze.getData(before).rank + 1

                } 
                
                else {
                    
                    newRank = (Blaze.getData(after).rank +
                        Blaze.getData(before).rank) / 2

                    }
                var ident = Blaze.getData(el)._id;
                Meteor.call('updatePosition', ident, newRank, 'd');
            },
            stop: function (e, ui) {

                el = ui.item.get(0);
                before = ui.item.prev().get(0)
                after = ui.item.next().get(0)


                if (!before) {
                    newRank = Blaze.getData(after).rank - 1
                    
                } else if (!after) {
                    newRank = Blaze.getData(before).rank + 1
                    
                } else
                    newRank = (Blaze.getData(after).rank +
                        Blaze.getData(before).rank) / 2
                    
                           var ident = Blaze.getData(el)._id;
                Meteor.call('updatePosition', ident, newRank);

            }
        });

        this.$('#itemsWeek').sortable({
            dropOnEmpty: true,
            connectWith: "#items, #itemsJunk",


            receive: function (e, ui) {
                
                el = ui.item.get(0);
                before = ui.item.prev().get(0)
                after = ui.item.next().get(0)
                if(before === undefined) {
                    before = ui.item.get(0);
                }
                
                if(after === undefined) {
                    after = ui.item.get(0);
                }
                if (!before) {
                    newRank = Blaze.getData(after).rank - 1
                } else if (!after) {
                    newRank = Blaze.getData(before).rank + 1
                } else
                    newRank = (Blaze.getData(after).rank +
                        Blaze.getData(before).rank) / 2
                       var ident = Blaze.getData(el)._id;
                Meteor.call('updatePosition', ident, newRank, 'w');


            },
            stop: function (e, ui) {

                el = ui.item.get(0);
                before = ui.item.prev().get(0)
                after = ui.item.next().get(0)

                if (!before) {
                    newRank = Blaze.getData(after).rank - 1
                } else if (!after) {
                    newRank = Blaze.getData(before).rank + 1
                } else
                    newRank = (Blaze.getData(after).rank +
                        Blaze.getData(before).rank) / 2
                 var ident = Blaze.getData(el)._id;
                Meteor.call('updatePosition', ident, newRank);

            }

        });
     
      this.$('#itemsJunk').sortable({
            dropOnEmpty: true,
            connectWith: "#items, #itemsWeek",


            receive: function (e, ui) {
                
                el = ui.item.get(0);
                before = ui.item.prev().get(0)
                after = ui.item.next().get(0)
                if(before === undefined) {
                    before = ui.item.get(0);
                }
                
                if(after === undefined) {
                    after = ui.item.get(0);
                }
                if (!before) {
                    newRank = Blaze.getData(after).rank - 1
                } else if (!after) {
                    newRank = Blaze.getData(before).rank + 1
                } else
                    newRank = (Blaze.getData(after).rank +
                        Blaze.getData(before).rank) / 2
                   var ident = Blaze.getData(el)._id;
                Meteor.call('updatePosition', ident, newRank,'j');


            },
            stop: function (e, ui) {

                el = ui.item.get(0);
                before = ui.item.prev().get(0)
                after = ui.item.next().get(0)

                if (!before) {
                    newRank = Blaze.getData(after).rank - 1
                } else if (!after) {
                    newRank = Blaze.getData(before).rank + 1
                } else
                    newRank = (Blaze.getData(after).rank +
                        Blaze.getData(before).rank) / 2
                  var ident = Blaze.getData(el)._id;
                Meteor.call('updatePosition', ident, newRank);

            }

        });
     
    }


























