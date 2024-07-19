const calendarItem = {
    template: calendarItemTpl.innerHTML,
    props: ['date', 'tasks'],
    data() {
        return {
            maxTasks: 2,
            taskFinishedTitle: {
                'uk-text-muted': true,
                'text-line-through': true,
            }
        }
    },
    computed: {
        itemClasses() {
            const isCurrentDate = getISODate(new Date()) === getISODate(this.date)
            return {
                'uk-card-primary': isCurrentDate,
                'uk-card-default': !isCurrentDate
            }
        }
    },
    methods: {
        addTask() {
            state.newTask = {initDate: this.date} // чтобы проставлялась текущая дата
        },
        limitTasks() {
            return this.tasks && this.tasks.slice(0, this.maxTasks) // slice(0, 2) копирует элементы с индексами 0 и 1
        },
        getTitleClasses(task) {
            if (task.finished) {
                return this.taskFinishedTitle
            }
        }
    }
}