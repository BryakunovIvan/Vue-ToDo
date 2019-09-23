<template>
  <div id="app">
    <h1>Todo list</h1>
    <ControlPanel v-bind:addToDo="addToDo"/>
    <div class="main-to-do-list">
      <ToDoList 
        v-bind:todos="unChekedInitialization()" 
        v-bind:addToDo="addToDo" 
        v-bind:handleCheck="handleCheck"  
      />
    </div>
    <div v-on:click="handleCheckedToDoClick" class="checked-to-do">
      <div class="checked-to-do__title">
        <h3>Checked todo</h3>
      </div>
      <ToDoList 
        v-if="showCheckList"
        v-bind:todos="checkedInitialization()"
        v-bind:handleCheck="handleCheck"  
      />
    </div>
  </div>
</template>

<script>
import ToDoList from "./components/ToDoList";
import ControlPanel from './components/ControlPanel'

export default {
  name: "app",
  components: {
    ToDoList,
    ControlPanel,
  },
  data() {
    return {
      todos: [
        {
          id: Math.random(),
          title: "First task",
          description: "This is description",
          date: new Date().toISOString().slice(0, 10),
          checked: false,
        },
        {
          id: Math.random(),
          title: "First task",
          description: "This is description",
          date: new Date().toISOString().slice(0, 10),
          checked: true,
        }
      ],
      showCheckList: false,
    };
  },
  methods: {
    addToDo({ title, description, date }) {
      date = date || new Date().toISOString().slice(0, 10);
      description = description;
      const checked = false;
      this.todos.push({
        id: Math.random(),
        title,
        description,
        date,
        checked
      });
    },
    handleCheck(id) {
      const currentTodo = this.todos.find(todo => {
        return todo.id === id;
      });
      
      currentTodo.checked = !currentTodo.checked;
    },
    checkedInitialization() {
      return this.todos.filter(todo => {
        return todo.checked === true;
      });
    },
    unChekedInitialization() {
      return this.todos.filter(todo => {
        return todo.checked == false;
      })
    },
    handleCheckedToDoClick() {
      this.showCheckList = !this.showCheckList;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-width: 320px;
  max-width: 700px;
  margin: 60px auto 0
}
.checked-to-do__title {
  text-align: left;
  background-color: rgb(221, 221, 221);
  border-radius: 15px 15px 0 0;
  margin: 0;
  height: 36px;
}
.checked-to-do__title h3 {
  margin: 0;
  line-height: 36px;
}
.checked-to-do {
  border: 1px solid rgb(221, 221, 221);
  border-radius: 15px;
}
.checked-to-do .todo:first-child{
  margin: 5px auto 0;
}
.checked-to-do .todo {
  margin: 10px auto 0;
}
.main-to-do-list {
  min-height: 50px;
}
</style>
