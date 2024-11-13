

let bowling = {
    players : [ 
        { Name : "anthony", Surname : "arroyave", Score : []  },
        { Name : "ricardo", Surname : "perez", Score : []  },
        { Name : "jose", Surname : "slobosky", Score : []  },
],
    setFinalScore : function(){
       this.players.forEach(( player ) => {
        player.finalScore= player.Score.reduce((acc , Score) => acc + Score, 0);
       })
    },

    setWiner : function () {
       let Winner= this.players[0];
        this.players.forEach((player) => {
            if (Winner.finalScore < player.finalScore){
                Winner = player
            }
        })
        console.log(Winner);
    },

    setScore : function () {
        
    }
}
bowling.setFinalScore();
console.log(bowling);
bowling.setWiner();
