<template>
  <div class="todo">
    <div class="todo-head">
      <h4 class="todo-title">{{title}}</h4>
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
    date: String
  }
};
</script>

<style>
.todo {
  border: 1px solid rgba(128, 128, 128, 0.603);
  border-radius: 10px;
  width: 350px;
  margin: 10px auto;
  padding: 5px;
}
.todo-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.todo-title {
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}
.todo-date {
  margin: 0;
}
.todo-footer {
  text-align: left;
}
.todo-description,
.todo-title {
  text-align: left;
  width: 70%;
}
</style>