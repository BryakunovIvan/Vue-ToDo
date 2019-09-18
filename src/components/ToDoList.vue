<template>
  <div class="information-table">
    <h1>Todo list</h1>
    <ControlPanel v-bind:addToDo="addToDo"/>
    <ToDo
      v-for="todo in todos"
      v-bind:title="todo.title"
      v-bind:description="todo.description"
      v-bind:date="todo.date"
      v-bind:checked="todo.checked"
      v-bind:key="todo.id"
    />
  </div>
</template>

<script>
import ToDo from "./Todo";
import ControlPanel from "./ControlPanel";

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
    ToDo,
    ControlPanel,
  }
};
</script>

<style>
</style>