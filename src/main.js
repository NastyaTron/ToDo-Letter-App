const addButton = document.querySelector('.addButton');
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const list = document.querySelector('#All ul');

function createTodo(textTitle, textDescription) {
    const todo = document.createElement('li');
    todo.innerHTML = `<h3>${textTitle}</h3> <p>${textDescription}</p>`;
   
    todo.addEventListener('click', function(e){
        e.preventDefault();
        todo.classList.toggle('done');
    })
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function () {
    todo.remove();
})
    todo.appendChild(deleteButton);
    return todo;
}

addButton.addEventListener('click', function(e){
e.preventDefault();

if (title.value.trim() === '') {
    alert('Enter title');
    return
}
const todo = createTodo(title.value, description.value);

list.appendChild(todo);

title.value = '';
description.value = '';
})