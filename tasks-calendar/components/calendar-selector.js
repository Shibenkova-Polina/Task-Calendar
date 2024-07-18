const calendarSelector = {
    template: calendarSelectorTpl.innerHTML,
    props: ['date'], // свойства только для чтения
    methods: {
        getMonthTitle() {
            return getMonthsName(this.date.getMonth())
        },
        nextMonth() {
            state.updateCalendarDateMonth(1)
        },
        prevMonth() {
            state.updateCalendarDateMonth(-1)
        },

        getYear() {
            return this.date.getFullYear()
        },
        nextYear() {
            state.updateCalendarDateYear(1)
        },
        prevYear() {
            state.updateCalendarDateYear(-1)
        }
    }
}