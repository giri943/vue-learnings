Vue.createApp({
    data() {
        return {
            goals:[],
            enteredValue:''
        }
    },
    methods:{
        addGoal() {
         this.goals.push(this.enteredValue)    
         this.enteredValue=''
        }
    }
}).mount('#app')
// const buttonElement = document.querySelector("button")
// const inputElement = document.querySelector("input")
// const listElement = document.querySelector("ul")

// function addNewGoal() {
//     const enterValue = inputElement.value
//     const newList = document.createElement('li')
//     newList.textContent = enterValue
//     listElement.appendChild(newList)
//     inputElement.value=""
// }
// buttonElement.addEventListener('click', addNewGoal)
