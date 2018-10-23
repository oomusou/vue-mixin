const finishItem = function(index) {
  this.todos[index].completed = !this.todos[index].completed;
};

const addItem = function() {
  const elem = { title: this.input, completed: false };
  this.todos = [...this.todos, elem];
};

const methods = {
  finishItem,
  addItem,
};

export const myMixin = {
  methods,
};
