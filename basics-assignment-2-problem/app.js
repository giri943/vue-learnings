 const app = Vue.createApp({
    data() {
        return {
            keyStrokeData:"Output",
            confirmData:"Output"
        }
    },
    methods:{
        buttonAlert(){
            alert("Success, button clicked")
        },
        mapKeyStroke(event) {
            this.keyStrokeData = event.target.value
        },
        mapEnterKeyStroke(event) {
            this.confirmData = event.target.value
        }
    }
 })
 app.mount('#assignment')