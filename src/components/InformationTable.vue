<template>
  <div class="information-table">
    <h1>Todo list</h1>
    <button 
        v-on:click="addToDo({title:'asdasdasd',description:'asdasdasd'})"
    >
    AddToDo
    </button>
    <Todo
      v-for="todo in todos"
      v-bind:title="todo.title"
      v-bind:description="todo.description"
      v-bind:date="todo.date"
      v-bind:key="todo.id"
    />
  </div>
</template>

<script>
import Todo from "./Todo";

export default {
  name: "InformationTable",
  props: {
    todos: Array,
    addToDo: Function
  },
  data() {
    return {
      greeting: "Hello"
    };
  },
  components: {
    Todo
  },
  updated() {
    console.log(this.todos);
  }
};
</script>

<style>
</style>