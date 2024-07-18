const state = Vue.reactive({
    calendarDate: new Date(),
    updateCalendarDateMonth(diff) {
        const date = new Date(this.calendarDate)
        date.setMonth(date.getMonth() + diff)
        this.calendarDate = date
    }, // до введения свойств это было в calendar-selector
    updateCalendarDateYear(diff) {
        const date = new Date(this.calendarDate)
        date.setFullYear(date.getFullYear() + diff)
        this.calendarDate = date
    } // до введения свойств это было в calendar-selector
})