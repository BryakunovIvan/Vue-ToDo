<template>
  <div class="todo">
    <div class="todo-head">
      <div class="todo-title">
        <input class="todo-checkbox" v-model="checked" type="checkbox" />
        <h4 class="todo-name">{{title}}</h4>
      </div>
      <p class="todo-date">{{date}}</p>
    </div>
    <div class="todo-footer">
      <p class="todo-description">{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    title: String,
    description: String,
    date: String,
    checked: Boolean
  }
};
</script>

<style>
.todo {
  border: 1px solid rgba(128, 128, 128, 0.603);
  border-radius: 10px;
  min-width: 320px;
  max-width: 700px;
  margin: 10px auto;
  padding: 5px;
}
.todo-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.todo-title {
  display: flex;
  align-items: center;
  min-width: 50px;
}
.todo-name {
  margin: 0;
}
.todo-date {
  margin: 0;
  min-width: 100px;
}
.todo-footer {
  text-align: left;
}
.todo-description,
.todo-name {
  white-space: nowrap;
}
.todo-description,
.todo-name {
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>