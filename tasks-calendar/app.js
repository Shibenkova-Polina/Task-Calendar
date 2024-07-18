const app = {
    components: {
        calendar: calendar, // можно оставить просто calendar, т.к. названия совпадают
    },
    data() {
        return state
    }
}
Vue.createApp(app).mount('#app')