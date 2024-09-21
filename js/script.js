'use strict'

const todoControl = document.querySelector('.todo-control');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');
const headerInput = document.querySelector('.header-input');

const toDoData = [];

const render = function() {
    todoList.innerHTML = '';
    todoCompleted.innerHTML = '';

    toDoData.forEach(function(item) {
        const newLi = document.createElement('li');
        newLi.classList.add('todo-item');
        newLi.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
        '<div class="todo-buttons">' + '<button class="todo-remove"></button>' +
		'<button class="todo-complete"></button>' + '</div>';

        if (item.completed) {
            todoCompleted.append(newLi);
        } else {todoList.append(newLi);}

        newLi.querySelector('.todo-complete').addEventListener('click', function() {
            item.completed = !item.completed;
            render();
        })

        newLi.querySelector('.todo-remove').addEventListener('click', function() {
            toDoData.splice(item, 1);
            render();
        })
    })
};

todoControl.addEventListener('submit', function(event) {
    event.preventDefault();

    const newToDo = {
        text: '',
        completed: false
    };

    if (headerInput.value === '') {alert('Какие планы на сегодня?'); return}
    else (newToDo.text = headerInput.value);

    toDoData.push(newToDo);
    headerInput.value = '';
    render();
});
