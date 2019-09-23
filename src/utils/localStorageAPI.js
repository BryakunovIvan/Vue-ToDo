function addTodoAPI(todos) { //TODO: rewrite as update
    return new Promise((resolve, reject) => { //mock API
        console.log('add todo...');
        setTimeout(() => {
            localStorage.setItem('todos', JSON.stringify(todos));

            resolve(todos[todos.length - 1]);
            
            console.log('todo added');
        }, 500) //mock response
    })
}

function updateTodoAPI(id) {
    return new Promise((resolve, reject) => { //mock API
        console.log('update todo...');
        setTimeout(() => {
            const todos = JSON.parse(localStorage.getItem('todos'));

            const updatedTodo = todos.find(todo => {
                return todo.id === id;
            })
            updatedTodo.checked = !updatedTodo.checked;

            localStorage.setItem('todos', JSON.stringify(todos));

            resolve(updatedTodo);
            console.log('todo updated');
        }, 500) //mock response
    })
}

function getTodosAPI() {
    return new Promise((resolve, reject) => { //mock API
        console.log('get todos...');
        setTimeout(() => {
            const todos = JSON.parse(localStorage.getItem('todos')) || [];
            
            resolve(todos);            
        }, 1000) //mock response
    })
}

export { 
    addTodoAPI, 
    getTodosAPI,
    updateTodoAPI
};