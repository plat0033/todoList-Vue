const app = new Vue ({
    el: '#app',
    data: {
        taskList: [],
        newTask: ''
    },
    mounted () {
        const tasks = localStorage.getItem('tasks') 
        if (tasks) {
            this.taskList = JSON.parse(tasks)
        //     console.log('guardado')
            console.log(tasks)
        }
    },
    methods: {
        createTask: function () {
            this.taskList.push({task: this.newTask, status: false})
            this.newTask = ''
            this.save();
        },
        deleteTask: function (index) {
            this.taskList.splice(index, 1)
            this.save();
        },
        markTask: function (index) {
            this.taskList[index].status = !this.taskList[index].status
            this.save();
        },
        save: function () {
            localStorage.setItem('tasks', JSON.stringify(this.taskList) )
            // console.log(localStorage.getItem('tasks'))
        }
    },
    computed: {
        list: function () {
            // this.save()
            return this.taskList
        }
    }
})