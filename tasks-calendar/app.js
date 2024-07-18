const app = {
    components: {
        calendar, // можно оставить просто calendar, т.к. названия совпадают (calendar: calendar,)
        taskForm
    },
    data() {
        return state
    }
}
Vue.createApp(app).mount('#app')