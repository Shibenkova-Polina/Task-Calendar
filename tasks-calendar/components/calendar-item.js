const calendarItem = {
    template: calendarItemTpl.innerHTML,
    props: ['date'],
    computed: {
        itemClasses() {
            const isCurrentDate = getISODate(new Date()) === getISODate(this.date)
            return {
                'uk-card-primary': isCurrentDate,
                'uk-card-default': !isCurrentDate
            }
        }
    }
}