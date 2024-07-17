const app = {
    components: {
        calendar: calendar, // можно оставить просто calendar, т.к. названия совпадают
    }
}
Vue.createApp(app).mount('#app')