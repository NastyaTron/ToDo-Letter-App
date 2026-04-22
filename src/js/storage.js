export const getTodo = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const saveTodo = todos => {
  localStorage.setItem('todos', JSON.stringify(todos));
};
