if(Todos.find().count() === 0) {
    Todos.insert({
        task: 'My first task',
        family: 'd',
        isImportant: 0,
        sort: 200,
        user: 1,
        isChecked: true,
        date: new Date()
    });
    Todos.insert({
        task: 'My second task',
        family: 'd',
        isImportant: 0,
        sort: 300,
        user: 1,
        isChecked: false,
        date: new Date()
    });
    Todos.insert({
        task: 'My third task',
        family: 'd',
        isImportant: 0,
        sort: 400,
        user: 2,
        isChecked: false,
        date: new Date()
    });
    Todos.insert({
        task: 'My week task',
        family: 'w',
        isImportant: 0,
        sort: 200,
        user: 1,
        isChecked: false,
        date: new Date()
    });
    Todos.insert({
        task: 'My week task',
        family: 'w',
        isImportant: 0,
        sort: 300,
        user: 2,
        isChecked: false,
        date: new Date()
    });
    Todos.insert({
        task: 'My junk task',
        family: 'j',
        isImportant: 0,
        sort: 200,
        user: 1,
        isChecked: false,
        date: new Date()
    });
}