const calendar = {
    template: calendarTpl.innerHTML,
    props: ['date'],
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
    },
    methods: {
        weekday(i) {
            return getWeekdayName(i)
        }
    }
}