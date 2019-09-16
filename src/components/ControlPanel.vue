<template>
  <div class="control-panel">
    <input v-model="title" placeholder="To-do title" />
    <button v-on:click="handleAddToDo()">Add To-do</button>
  </div>
</template>

<script>
export default {
  name: "ControlPanel",
  props: {
    addToDo: Function
  },
  data() {
    return {
      title: "",
      description: "",
      date: ""
    };
  },
  methods: {
    handleAddToDo() {
      const { title, description, date, addToDo, toDefault } = this;
      addToDo({ title, description, date });
      toDefault();
    },
    toDefault() {
        this.title = '',
        this.description = '',
        this.date = ''
    }
  }
};
</script>

<style>
</style>