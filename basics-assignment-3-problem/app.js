const app = Vue.createApp({
    data() {
        return {
            number: 0,
        };
    },
    methods: {
        addNumber(number) {
            // console.log("This");
            this.number = this.number + number;
        },
    },
    watch:{
        results() {
            console.log('Watcher')
            const that = this
            console.log('Watcher')
            setTimeout(function(){
                that.number = 0;
            }, 5000)
        }
    },
    computed: {
        results() {
            if (this.number > 37) {
                return "TOO much";
            }
            else if (this.number === 37){
                return this.number;
            }
            else{
                console.log("This");
                return "NOT there yet";
            }
        }
    }
});

app.mount('#assignment')