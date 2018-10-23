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
import { myMixin } from '../mixins/my-mixin';

const mounted = function() {
  const response = res =>
    this.todos = res.data.slice(0, 5);

  const error = e => console.log(e);

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

export default {
  name: 'todo-list',
  mixins: [myMixin],
  data,
  mounted,
};
</script>

<style scoped>

</style>
