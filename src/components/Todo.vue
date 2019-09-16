<template>
  <div class="todo">
    <div>{{title}}</div>
    <div>{{description}}</div>
    <div>{{date}}</div>
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
</style>