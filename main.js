

let bowling = {
    players : [],
// punteggio finale
    setFinalScore : function(){
       this.players.forEach(( player ) => {
        player.finalScore= player.Score.reduce((acc , Score) => acc + Score, 0);
       })
    },
// vincitore
    setWiner : function () {
       let Winner= this.players[0];
        this.players.forEach((player) => {
            if (Winner.finalScore < player.finalScore){
                Winner = player
            }
        })
        console.log(Winner);
    },
// punteggi
    setScore : function () {
        this.players.forEach((player)=> {
        for (let i = 1; i <= 10; i++) {
            player.Score.push( Math.floor(Math.random() * (10 - 0) + 0) )
        }
        })
    },
// nuovi giocatori
    addPlayer : function (nome , cognome) {
        this.players.push({ Name : nome, Surname : cognome, Score : []  })
    }
}
bowling.addPlayer("ricardo" , "perez")
bowling.addPlayer("josè" , "slobosky")
bowling.addPlayer("anthony" , "perarroyave")
bowling.setScore();
bowling.setFinalScore();
bowling.setWiner();
