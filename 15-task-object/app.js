/*
    Написать объект ToDoList, который хранит в себе задачи
    { 'title': 'Помыть посуду', id: 1, priority: 1 } и имеет методы:
    - Добавить задачу
    - Удалить задачу по id
    - Обновить имя или приоритет по id
    - Отсортировать задачи по приоритету
*/

'use strict';

const toDoList = {
    tasks: [
        {
            id: 1,
            title: 'Помыть посуду',
            priority: 1,
        }
    ],
    addTask: function(title, priority) {
        if (!title) {
            console.log('Название задачи не задано!');
            return;
        }
        if (!priority) {
            console.log('Приоритет задачи не задан!');
            return;
        }
        this.tasks.push({
            id: this.generateId(),
            title,
            priority
        })
    },
    deleteTaskById: function(id) {
        if (!id) {
            console.log('ID задачи не задан!');
            return;
        }
        this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    updateTaskById: function(id, title, priority) {
        if (!id) {
            console.log('ID задачи не задан!');
            return;
        }
        const currentTask = this.findById(id);
        

        if (!currentTask) {
            console.log('Задача не найдена!');
            return;
        }        

        for (const task of this.tasks) {
            if (task.id === id) {
                if (title) {
                    task.title = title;
                }
                if (priority) {
                    task.priority = priority;
                }
            };
        }
    },
    sortTasksByPriority: function() {
        this.tasks.sort((a, b) => a.priority - b.priority);
    },
    findById: function(id) {
        return this.tasks.find((task) => task.id === id);
    },
    getMaxId: function() {
        let max = 0;

        for (const task of this.tasks) {
            if (task.id > max) {
                max = task.id;
            }
        }
        return max;
    },
    generateId: function() {
        return this.getMaxId() + 1;
    }
}

console.log('----------INITIAL-TASKS----------');
console.log(toDoList.tasks);
console.log('----------TASKS-AFTER-ADD----------');
toDoList.addTask();
toDoList.addTask('Покушать');
toDoList.addTask('Покушать', 23);
toDoList.addTask('Попить', 13);
toDoList.addTask('Полетать', 2);
toDoList.addTask('Удалить', 100);
console.log(toDoList.tasks);
console.log('----------TASKS-AFTER-DELETE----------');
toDoList.deleteTaskById();
toDoList.deleteTaskById(8);
toDoList.deleteTaskById(5);
console.log(toDoList.tasks);
console.log('----------TASKS-AFTER-UPDATE----------');
toDoList.updateTaskById();
toDoList.updateTaskById(100);
toDoList.updateTaskById(4, 'Покататься на велосипеде');
toDoList.updateTaskById(3, 'Попить воды', 12);
console.log(toDoList.tasks);
console.log('----------TASKS-AFTER-SORT----------');
toDoList.sortTasksByPriority();
console.log(toDoList.tasks);