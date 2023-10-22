function getRandomValue(minValue, maxValue) {
    const attackValue=Math.floor(Math.random()*(maxValue-minValue)*minValue);
    return attackValue;
}

const app = Vue.createApp({
    data () {
        return {
            playerHealth:100,
            monsterHealth:100,
            currentRoundCount:0
        };
    },
    methods:{
        attackMonster(){
            this.currentRoundCount++;
            const attackValue=getRandomValue(5,12);
            this.monsterHealth = this.monsterHealth-attackValue;
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue=getRandomValue(8,15);
            this.playerHealth = this.playerHealth-attackValue;
        },
        useSpecialAttackMonster(){
            this.currentRoundCount++;
            const attackValue = getRandomValue(15,25);
            this.monsterHealth = this.monsterHealth-attackValue;
            this.attackPlayer()
        },
        healPlayer() {
            let playerHealValue = getRandomValue(10,18)
            if(playerHealValue>60){
               playerHealValue=50;
            }
            this.playerHealth = this.playerHealth + playerHealValue;
        }
    },
    computed:{
        monsterHealthBarStyle(){
            return {
                width:this.monsterHealth +'%' 
            };
        },
        playerHealthBarStyle(){
            return {
                width:this.playerHealth +'%' 
            };
        },
        checkDisabled() {
            return this.currentRoundCount % 3 !==0;
        }
    }
});

app.mount('#game')
