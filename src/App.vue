<template>
  <div id="app">
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from './components/todo-list.vue';

const components = {
  TodoList,
};

export default {
  name: 'app',
  components,
};
</script>

<style>
</style>
