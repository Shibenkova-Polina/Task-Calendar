class Task {
    title = ''
    description = ''
    finished = false

    constructor(date) {
        this.date = date
    }
}

function saveTasksToStore(tasks) {
    const tasksString = JSON.stringify(tasks)
    localStorage.setItem('tasks', tasksString) // ключ и значение в переменной браузера
}

function loadTasksFromStore() {
    let tasks = []
    try {
        tasks = JSON.parse(localStorage.getItem('tasks')) || []
    }
    catch(e) {
        console.error(e)
    }

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i]
        task.date = new Date(task.date)
    }

    return tasks
}

const state = Vue.reactive({
    calendarDate: new Date(),
    newTask: null,
    editTask: null,
    showTasks: [],
    tasks: loadTasksFromStore(),
    updateCalendarDateMonth(diff) {
        const date = new Date(this.calendarDate)
        date.setMonth(date.getMonth() + diff)
        this.calendarDate = date
    }, // до введения свойств это было в calendar-selector
    updateCalendarDateYear(diff) {
        const date = new Date(this.calendarDate)
        date.setFullYear(date.getFullYear() + diff)
        this.calendarDate = date
    }, // до введения свойств это было в calendar-selector
    setEditTask(task) {
        this.editTask = {task}
    },
    addTask(formModel) {
        const task = new Task(null)
        this.updateTaskWithData(formModel, task)
        this.tasks = this.tasks.concat([task]) // скопировать массив с добавлением элемента
        saveTasksToStore(this.tasks)
    },
    updateTask(formModel, task) {
        this.updateTaskWithData(formModel, task)
        this.tasks = this.tasks.concat([])
        saveTasksToStore(this.tasks)
    },
    updateTaskWithData(formModel, task) {
        const taskDate = new Date(formModel.date)
        taskDate.setMinutes(formModel.minutes)
        taskDate.setHours(formModel.hours)

        task.date = taskDate
        task.title = formModel.title
        task.description = formModel.description
        task.finished = formModel.finished
    },
    removeTask(task) {
        const taskIndex = this.tasks.indexOf(task)
        if (taskIndex < 0) {
            console.error('failed to remove task: ' + task)
            return
        }

        this.tasks.splice(taskIndex, 1) // удалит из массива 1 элемент с индексом taskIndex
        this.tasks = this.tasks.concat([])
        saveTasksToStore(this.tasks)
    }
})

const lastTaskDate = localStorage.getItem('last-task-date')
if (lastTaskDate) console.log(lastTaskDate)