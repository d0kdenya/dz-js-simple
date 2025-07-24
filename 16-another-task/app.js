/*
    Возьмите объект из предыдущего домашнего задания и
    последовательно примените все методы его на новый объект:

    const newTask = {
        tasks: [{
            id: 1,
            name: 'тест',
            description: 'описание',
            order: 0
        }];
    }
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
    addTask: function(title, description, priority) {
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
            priority,
            description,
        })
    },
    deleteTaskById: function(id) {
        if (!id) {
            console.log('ID задачи не задан!');
            return;
        }
        this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    updateTaskById: function(id, title, priority, description) {
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
                if (description) {
                    task.description = description;
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

const newTask = {
        tasks: [{
            id: 1,
            name: 'тест',
            description: 'описание',
            order: 0
        }]
    };

newTask.tasks = newTask.tasks.map(({ id, name, order, description }) => ({
    id,
    title: name,
    priority: order,
    description
}));

console.log('----------INITIAL-NEW-TASKS----------');
console.log(newTask.tasks);
newTask.addTask = toDoList.addTask;
newTask.deleteTaskById = toDoList.deleteTaskById;
newTask.updateTaskById = toDoList.updateTaskById;
newTask.sortTasksByPriority = toDoList.sortTasksByPriority;
newTask.findById = toDoList.findById;
newTask.getMaxId = toDoList.getMaxId;
newTask.generateId = toDoList.generateId;

const newTaskAddTask = toDoList.addTask.bind(newTask);
const newTaskDeleteTaskById = toDoList.deleteTaskById.bind(newTask);
const newTaskUpdateTaskById = toDoList.updateTaskById.bind(newTask);
const newTaskSortTasksByPriority = toDoList.sortTasksByPriority.bind(newTask);
const newTaskFindById = newTask.findById.bind(newTask);
const newTaskGetMaxId = newTask.getMaxId.bind(newTask);
const newTaskGenerateId = newTask.generateId.bind(newTask);
console.log('----------NEW-TASKS-AFTER-ADD----------');
newTaskAddTask('тест new', 'описание new', 9);
newTaskAddTask('тест new new', 'описание new new', 2);
newTaskAddTask('тест new new new', 'описание new new new', 4);
console.log(newTask.tasks);
console.log('----------NEW-TASKS-AFTER-DELETE----------');
newTaskDeleteTaskById();
newTaskDeleteTaskById(4);
console.log(newTask.tasks);
console.log('----------NEW-TASKS-AFTER-UPDATE----------');
newTaskUpdateTaskById();
newTaskUpdateTaskById(3);
newTaskUpdateTaskById(2, 'Покататься на велосипеде');
newTaskUpdateTaskById(3, 'Попить воды', 12);
console.log(newTask.tasks);
console.log('----------NEW-TASKS-AFTER-SORT----------');
console.log(newTask.tasks);
newTaskAddTask('тест new', 'описание new', 7);
newTaskSortTasksByPriority();
console.log(newTask.tasks);