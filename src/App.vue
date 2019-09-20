<template>
  <div id="app">
    <ToDoList 
      v-bind:todos="unChekedInitialization()" 
      v-bind:addToDo="addToDo" 
      v-bind:handleCheck="handleCheck"  
    />
    <CheckedToDoList 
      v-bind:todos="checkedInitialization()"
      v-bind:handleCheck="handleCheck"  
    />
  </div>
</template>

<script>
import ToDoList from "./components/ToDoList";
import CheckedToDoList from './components/CheckedToDoList';

export default {
  name: "app",
  components: {
    ToDoList,
    CheckedToDoList,
  },
  data() {
    return {
      todos: [
        {
          id: Math.random(),
          title: "First task",
          description: "This is description",
          date: new Date().toISOString().slice(0, 10),
          checked: false, //TODO
        },
        {
          id: Math.random(),
          title: "First task",
          description: "This is description",
          date: new Date().toISOString().slice(0, 10),
          checked: true, //TODO
        }
      ]
    };
  },
  methods: {
    addToDo({ title, description, date }) {
      date = date || new Date().toISOString().slice(0, 10);
      description = description;
      const checked = false;
      this.todos.push({
        id: Math.random(),
        title,
        description,
        date,
        checked
      });
    },
    handleCheck(id) {
      const currentTodo = this.todos.find(todo => {
        return todo.id === id;
      });
      
      currentTodo.checked = !currentTodo.checked;
    },
    checkedInitialization() {
      return this.todos.filter(todo => {
        return todo.checked === true;
      });
    },
    unChekedInitialization() {
      return this.todos.filter(todo => {
        return todo.checked == false;
      })
    },
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
