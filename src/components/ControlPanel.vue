<template>
  <div class="control-panel">
    <div>
      <input class="control-panel__title" v-model="title" placeholder="To-do title" />
    </div>
    <div>
      <input
        class="control-panel__description"
        v-if="title"
        v-model="description"
        placeholder="Description"
      />
    </div>
    <button v-if="title" v-on:click="handleAddToDo()">Add To-do</button>
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
      (this.title = ""), (this.description = ""), (this.date = "");
    }
  }
};
</script>

<style>
.control-panel__description,
.control-panel__title {
  width: 100%;
  height: 30px;
  margin-top: 5px;
  font-size: 15px;
  font-weight: bold;
  max-width: 700px;
  border: 1px solid rgb(45, 185, 3);
  border-radius: 15px;
  padding-left: 8px;
  box-sizing: border-box;
}
</style>