const calendarSelector = {
    template: calendarSelectorTpl.innerHTML,
    props: ['date'], // свойства только для чтения
    // data() {
    //     return {
    //         date: new Date()
    //     }
    // }, не нужен,т.к. есть свойство date в props
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