const tasksList = {
    template: tasksListTpl.innerHTML,
    props: ['tasks'],
    mounted() {
        this.modal = UIkit.modal('#tasks-list')
    },
    watch: {
        tasks() {
            this.modal.show()
        }
    }
}