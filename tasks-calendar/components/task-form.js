const taskForm = {
    template: taskFormTpl.innerHTML,
    props: ['newTask'],
    data() { // выполняется, когда компонент в HTML еще не создан
        return {
            formModel: {},
        }
    },
    watch: {
        newTask() {
            const currentDate = new Date()
            this.formModel = {
                title: '',
                description: '',
                date: getISODate(this.newTask.initDate),
                hours: currentDate.getHours(),
                minutes: currentDate.getMinutes(),
                finished: false,
            }
            this.form.show()
        }
    },
    mounted() { // выполняется, когда компонент в HTML уже создан
        this.form = UIkit.modal('#task-form') // где находится модальное окно
    },
    methods: {
        save() {
            state.addTask(this.formModel)
            this.form.hide()
        }
    }
}