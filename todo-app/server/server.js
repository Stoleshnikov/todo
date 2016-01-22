Meteor.publish('todos', function () {
    var currentUser = this.userId;
    return Todos.find({
        user: currentUser
    });
});

//Методы

Meteor.methods({
    'todoIsDone': function (id, checkStatus) {
        Todos.update(id, {
            $set: {isChecked: checkStatus}});
    },
    
    'updatePosition': function(id, rank, fam) {
      Todos.update(id, {$set: {rank: rank}});
        if(fam) {
      Todos.update(id, {$set: {family: fam}});  
        }
      
    },

    'insertTodo': function (task, family) {
        var currentUserId = Meteor.userId();
        var cc = Todos.find({}).count();
            Todos.insert({
            task: task,
            family: family,
            isImportant: 0,
            rank: cc +1,
            user: currentUserId,
            isChecked: false,
            date: new Date()
        });
    }
});