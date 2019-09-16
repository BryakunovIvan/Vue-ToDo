<template>
  <div class="information-table">
    <h1>Todo list</h1>
    <button 
        v-on:click="addToDo({title:'asdasdasd',description:'asdasdasd'})"
    >
    AddToDo
    </button>
    <ToDo
      v-for="todo in todos"
      v-bind:title="todo.title"
      v-bind:description="todo.description"
      v-bind:date="todo.date"
      v-bind:key="todo.id"
    />
  </div>
</template>

<script>
import ToDo from "./ToDo";

export default {
  name: "ToDoList",
  props: {
    todos: Array,
    addToDo: Function
  },
  data() {
    return {
    };
  },
  components: {
    ToDo
  },
  updated() {
    console.log(this.todos);
  }
};
</script>

<style>
</style>