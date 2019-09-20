<template>
  <div class="to-do-list">
    <h1>Todo list</h1>
    <ControlPanel v-bind:addToDo="addToDo"/>
    <ToDo
      v-for="todo in todos"
      v-bind:title="todo.title"
      v-bind:description="todo.description"
      v-bind:date="todo.date"
      v-bind:checked="todo.checked"
      v-bind:id="todo.id"
      v-bind:key="todo.id"
      v-bind:handleCheck="handleCheck"
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
    addToDo: Function,
    handleCheck: Function
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