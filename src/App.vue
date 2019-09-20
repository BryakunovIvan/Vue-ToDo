<template>
  <div id="app">
    <ToDoList v-bind:todos="todos" v-bind:addToDo="addToDo" />
    <CheckedToDoList v-bind:todos="checkedTodos"/>
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
          checked: true, //TODO
        }
      ],
      checkedTodos: [
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
      date = date || "Без даты";
      description = description;
      const checked = false;
      this.todos.push({
        id: Math.random(),
        title,
        description,
        date,
        checked
      });
    }
  },
  created() {

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
