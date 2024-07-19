const app = {
    components: {
        calendar, // можно оставить просто calendar, т.к. названия совпадают (calendar: calendar,)
        taskForm,
        tasksList,
    },
    data() {
        return state
    }
}
const vueApp = Vue.createApp(app)
vueApp.config.globalProperties.$state = state // значение $state теперь доступно на уровне всех шаблонов приложения
vueApp.mount('#app')