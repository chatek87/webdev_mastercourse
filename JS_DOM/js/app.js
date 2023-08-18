(function(app) {
    'use strict';
    const pageItems = {};

    app.todoStartup = function() {
        const frm = document.getElementById('taskForm');
        pageItems.taskList = document.getElementById('taskList');
        pageItems.taskInput = frm.querySelector('#taskInput');
        pageItems.submit = frm.querySelector('#submit');
        pageItems.remove = frm.querySelector('#remove');

        pageItems.submit.addEventListener('click', addTask);
        pageItems.taskList.addEventListener('click', completeTask);
        pageItems.remove.addEventListener('click', removeCompletedTasks);
    };

    function removeCompletedTasks(e) {
        e.preventDefault();
        const items = Array.from(pageItems.taskList.children);
        
        items.forEach(el => {
            if (el.classList.contains('completed-task')) {
                pageItems.taskList.removeChild(el);
            }
        });

    }

    function completeTask(e) {
        if (e.target.classList.contains('completed-task')) {
            e.target.classList.remove('completed-task');
            pageItems.taskList.insertBefore(e.target, pageItems.taskList.firstChild); // Move the task back to the top
        } else {
            e.target.classList.add('completed-task');
            pageItems.taskList.appendChild(e.target); // Move the completed task to the bottom
        }
    }

    function addTask(e) {
        e.preventDefault();

        const li = document.createElement('li');
        li.innerText = pageItems.taskInput.value;
        pageItems.taskList.appendChild(li);
        pageItems.taskInput.value = '';
    }
})(window.app = window.app || {});