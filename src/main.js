const addButton = document.querySelector('.addButton');
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const list = document. querySelector('#All ul');



addButton.addEventListener('click', function(e){
e.preventDefault();
const todo = document.createElement('li');
todo.innerHTML = `<h3>${title.value}</h3> <p>${description.value}</p>`;
list.appendChild(todo);
title.value = '';
description.value = '';
})