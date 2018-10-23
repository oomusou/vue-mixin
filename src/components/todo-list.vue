<template>
  <div id="todo-list">
    <input type="text" v-model="input"><button @click="addItem">Add</button>
    <ul>
      <li v-for="(elem, index) in todos" @click="finishItem(index)" :key="index">
        {{ elem.title }}, {{ elem.completed }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchTodos } from '../api/todos.api';

const finishItem = function(index) {
  this.todos[index].completed = !this.todos[index].completed;
};

const addItem = function() {
  const elem = { title: this.input, completed: false };
  this.todos = [...this.todos, elem];
};

const error = e => console.log(e);

const mounted = function() {
  const response = res => this.todos = res.data.slice(0, 5);

  fetchTodos()
    .then(response)
    .catch(error);
};

const data = function() {
  return {
    input: '',
    todos: [],
  };
};

const methods = {
  finishItem,
  addItem,
};

export default {
  name: 'todo-list',
  data,
  methods,
  mounted,
};
</script>

<style scoped>

</style>
