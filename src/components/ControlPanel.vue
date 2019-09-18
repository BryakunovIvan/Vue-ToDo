<template>
  <div class="control-panel">
    <div>
      <input class="control-panel__title" v-model="title" placeholder="To-do title" />
    </div>
    <div>
      <transition name="fade">
        <input class="control-panel__description" v-if="title" v-model="description" placeholder="Description" />
      </transition>
    </div>
    <transition name="fade">
      <button v-if="title" v-on:click="handleAddToDo()">Add To-do</button>
    </transition>
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
  max-width: 700px;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  height: 0px;
}
.fade-leave,
.fade-enter-to {
  opacity: 1;
  height: 16px;
}
</style>