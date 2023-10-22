const app = Vue.createApp({
    data(){
        return {
            inputText:'',
            tasks:[],
            hide:false,
            show:true,
            onHide:"Show List",
            onShow:"Hide list"
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.inputText)
        },
        toggleView() {
            this.show = !this.show
        }
    },
    computed:{
        buttonCaption() {
            return this.show? "Hide List":"Show List"
        }
    }
})
app.mount('#assignment')