<template>
  <div class="checked-to-do-list">
      <hr>
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
import ToDo from './Todo';

export default {
    name: "CheckedToDoList",
    props: {
        todos: Array,
        handleCheck: Function
    },
    data() {
        return {}
    },
    components: {
        ToDo,
    }
}
</script>

<style>

</style>