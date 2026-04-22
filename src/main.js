import { saveTodo, getTodo } from './js/storage.js';

const addButton = document.querySelector('.addButton');
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const list = document.querySelector('#All ul');
let todos = getTodo();
todos.forEach(todo => {
  const todoElement = createTodo(todo);
  list.appendChild(todoElement);
});

function createTodo(todoData) {
  const todo = document.createElement('li');
  todo.innerHTML = `<h3>${todoData.title}</h3> <p>${todoData.description}</p>`;

  if (todoData.completed) {
    todo.classList.add('done');
  }

  todo.addEventListener('click', function () {
    todoData.completed = !todoData.completed;
    saveTodo(todos);
    todo.classList.toggle('done');
  });
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  deleteButton.addEventListener('click', function (e) {
    e.stopPropagation();

    todos = todos.filter(t => t.id !== todoData.id);
    saveTodo(todos);
    todo.remove();
  });
  todo.appendChild(deleteButton);
  return todo;
}

addButton.addEventListener('click', function () {
  if (title.value.trim() === '') {
    alert('Enter title');
    return;
  }

  const newTodo = {
    id: Date.now(),
    title: title.value,
    description: description.value,
    completed: false,
  };

  const todoElement = createTodo(newTodo);
  list.appendChild(todoElement);

  todos.push(newTodo);
  saveTodo(todos);

  title.value = '';
  description.value = '';
});
