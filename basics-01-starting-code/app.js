const app = Vue.createApp({
  data() {
    return {
         courseGoalA:'Finish the Vue Course',
         courseGoalB:'<h3>Finish the course and get a salary hike</h3>',
         learnLink:'https://vuejs.org',
         courseGoalC:'<h3>Finish course and get salary hike and live a better life</h3>',

    }
  },
  methods:{
    displayGoal() {
        const randomNumber = Math.random()
        if (randomNumber>.4) {
            return this.courseGoalA            
        } else {
            return this.courseGoalC
        }
    }
  }  
})
app.mount('#user-goal')
