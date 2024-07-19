const taskForm = {
    template: taskFormTpl.innerHTML,
    props: ['newTask', 'editTask'],
    data() { // выполняется, когда компонент в HTML еще не создан
        return {
            formModel: {},
            actionType: '',
            addType: 'add',
            editType: 'edit',
        }
    },
    watch: {
        newTask() {
            const date = new Date(this.newTask.initDate)
            const currentDate = new Date()
            date.setMinutes(currentDate.getMinutes())
            date.setHours(currentDate.getHours())
            const emptyTask = new Task(date)
            this.openFormForModel(this.addType, emptyTask)
        },
        editTask() {
            this.openFormForModel(this.editType, this.editTask.task)
        }
    },
    mounted() { // выполняется, когда компонент в HTML уже создан
        this.form = UIkit.modal('#task-form') // где находится модальное окно
    },
    methods: {
        save() {
            switch (this.actionType) {
                case this.addType:
                    state.addTask(this.formModel)
                    break
                case this.editType:
                    state.updateTask(this.formModel, this.editTask.task)
                    break
                default:
                    console.error('unsupported form mode: ' + this.actionType)
            }
            this.form.hide()
        },
        isEditMode() {
            return this.actionType === this.editType
        },
        initFormModel(model) {
            this.formModel = {
                title: model.title,
                description: model.description,
                finished: model.description,
                date: getISODate(model.date),
                hours: model.date.getHours(),
                minutes: model.date.getMinutes(),
            }
        },
        async openFormForModel(actionType, model) {
            this.actionType = actionType
            this.initFormModel(model)
            this.form.show()
            await this.$nextTick() 
            // Изменение данных компонента Vue не сразу отражается в DOM. Но можно уловить момент, когда Vue обновляет DOM, используя функции Vue.nextTick() или vm.$nextTick().
            this.$forceUpdate() // принудительное обновление Vue
        },
        removeTask() {
            state.removeTask(this.editTask.task)
            this.form.hide()
        }
    }
}