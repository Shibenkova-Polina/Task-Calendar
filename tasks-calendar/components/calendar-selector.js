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
            const date = new Date(this.date)
            date.setMonth(date.getMonth() + 1)
            this.date = date
        },
        prevMonth() {
            const date = new Date(this.date)
            date.setMonth(date.getMonth() - 1)
            this.date = date
        },

        getYear() {
            return this.date.getFullYear()
        },
        nextYear() {
            const date = new Date(this.date)
            date.setFullYear(date.getFullYear() + 1)
            this.date = date
        },
        prevYear() {
            const date = new Date(this.date)
            date.setFullYear(date.getFullYear() - 1)
            this.date = date
        }
    }
}