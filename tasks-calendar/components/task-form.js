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
            this.form.show()
        }
    },
    mounted() { // выполняется, когда компонент в HTML уже создан
        this.form = UIkit.modal('#task-form') // где находится модальное окно
    }
}