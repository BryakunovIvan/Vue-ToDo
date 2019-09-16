<template>
  <div id="app">
    <ToDoList v-bind:todos="todos" v-bind:addToDo="addToDo" />
  </div>
</template>

<script>
import ToDoList from "./components/ToDoList";

export default {
  name: "app",
  components: {
    ToDoList
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
        }
      ]
    };
  },
  methods: {
    addToDo({ title, description, date }) {
      date = date || "Без даты";
      description = description;
      this.todos.push({
        id: Math.random(),
        title,
        description,
        date
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
