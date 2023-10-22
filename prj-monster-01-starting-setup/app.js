function getRandomValue(minValue, maxValue) {
    const attackValue = Math.floor(Math.random() * (maxValue - minValue) * minValue);
    return attackValue;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRoundCount: 0,
            winnerStatus: null
        };
    },
    methods: {
        attackMonster() {
            this.currentRoundCount++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth = this.monsterHealth - attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth = this.playerHealth - attackValue;
        },
        useSpecialAttackMonster() {
            this.currentRoundCount++;
            const attackValue = getRandomValue(15, 25);
            this.monsterHealth = this.monsterHealth - attackValue;
            this.attackPlayer()
        },
        healPlayer() {
            let playerHealValue = getRandomValue(10, 18)
            if (playerHealValue > 60) {
                playerHealValue = 50;
            }
            this.playerHealth = this.playerHealth + playerHealValue;
        },
        restartGame(){
            this.playerHealth=100;
            this.monsterHealth=100;
            this.winnerStatus=null;
            this.currentRoundCount=0;
        },
        surrender(){
            this.winnerStatus='monster';
        }
    },
    computed: {
        monsterHealthBarStyle() {
            if(this.monsterHealth<0){
                return {width:'0%'}
            }
            return {
                width: this.monsterHealth + '%'
            };
        },
        playerHealthBarStyle() {
            if (this.playerHealth > 100) {
                this.playerHealth = 100;
                return {
                    width: this.playerHealth + '%'
                };
            } else if(this.playerHealth<0){
                return{width:'0%'}
            }
            else {
                return {
                    width: this.playerHealth + '%'
                };
            }

        },
        checkDisabled() {
            return this.currentRoundCount % 3 !== 0;
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                //Draw case
                this.winner = "draw";
            } else if (value <= 0) {
                //player lost
                this.winner = "monster";
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                //Draw case
                this.winner = "draw";
            } else if (value <= 0) {
                //player won
                this.winner = "player";
            }
        },
    }

});

app.mount('#game')
 