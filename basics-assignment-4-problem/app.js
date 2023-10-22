const app = Vue.createApp({
    data () {
        return {
            userInput:'',
            paragraphIsVisible:true,
            inputBackGroundColor:''
        }
        
    },
    computed:{
        paragraphClasses () {
            return {
                user1: this.userInput === 'user1',
                user2: this.userInput === 'user1',
                visibility: this.paragraphIsVisible,
                hidden:!this.paragraphIsVisible
            }
        }
    },
    methods:{
        toggleParagraphVisibility() {
            console.log("ch");
            this.paragraphIsVisible = !this.paragraphIsVisible;
        }
    },
    
})

app.mount('#assignment');