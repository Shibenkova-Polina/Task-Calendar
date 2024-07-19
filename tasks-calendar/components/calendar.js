const calendar = {
    template: calendarTpl.innerHTML,
    props: ['date', 'tasks'],
    components: {
        calendarSelector,
        calendarItem,
    },
    watch: { // работает при изменении свойства (для его отслеживания). Имя функции внутри, как у свойства, которое он отслеживает
        date: {
            immediate: true, // чтобы функция срабатывала сразу же при инициализации объекта
            handler() { // сама функция, которая показывает, что делать при изменении свойства
                const currentDay = this.date // до введения свойств props было const currentDay = new Date()
                const month = currentDay.getMonth()
                const year = currentDay.getFullYear()
                const daysInMonth = getDaysOfMonth(month, year)
                const firstDayIndex = getFirstWeekday(month, year)
                const days = []
                for (let i = firstDayIndex; i < daysInMonth + firstDayIndex; i++) {
                    days[i] = new Date(year, month, i + 1 - firstDayIndex)
                }
                this.days = days
            }
        },
        tasks: {
            immediate:true,
            handler() {
                const taskIndex = {}
                for (let i = 0; i < this.tasks.length; i++) {
                    const task = this.tasks[i]
                    const key = this.getIndexKey(task.date)
                    const tasksForDay = taskIndex[key] || []
                    tasksForDay.push(task)
                    tasksForDay.sort(this.sortTasks)
                    taskIndex[key] = tasksForDay
                }

                this.taskIndex = taskIndex
            }
        },
    },
    methods: {
        weekday(i) {
            return getWeekdayName(i)
        },
        sortTasks(a, b) {
            return a.date.getTime() - b.date.getTime()
        },
        getIndexKey(date) {
            return date.toLocaleDateString()
        }
    }
}