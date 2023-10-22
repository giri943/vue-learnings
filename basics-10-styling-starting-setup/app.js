const app = Vue.createApp({
    data (){
        return {
            boxASelected:false,
            boxBSelected:false,
            boxCSelected:false,
        }
    },
    methods:{
        applyStyle(selectedBox){
            if(selectedBox==='A') {
                console.log("A");
                this.boxBSelected=false;
                this.boxCSelected=false;
                return this.boxASelected=true;
                
            }
            else if(selectedBox==='B'){
                console.log("B");
                this.boxASelected=false;
                this.boxCSelected=false;
                return this.boxBSelected=true;
            }
            else if(selectedBox==='C'){
                console.log("C");
                this.boxASelected=false;
                this.boxBSelected=false;
                return this.boxCSelected=true;
            }
        }
    }
});

app.mount('#styling');