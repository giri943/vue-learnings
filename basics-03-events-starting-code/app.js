const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      yourName: '',
      confirmedName: ""
    }
  },
  methods: {
    addCounter(count) {
      this.counter++
    },
    reduceCounter(count) {
      if (this.counter > 0) {
        this.counter--
      } else {
        this.counter = 0
      }
    },
    setName(event) {
      this.yourName = event.target.value;
    },
    submitForm() {
      alert("Sumbitted")
    },
    confirmName() {
      this.confirmedName = this.yourName
    },
    resetName() {
      this.yourName='' 
      this.confirmedName=''
    }
  },
  computed:{
    displayYourName() {
      return this.yourName
    },
  },
  watch:{
    counter (value) {
      if(value>5){
        this.counter=0
      }
    }
  }
})
app.mount('#events')