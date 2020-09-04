class Game{
    constructor(){



    }
    getState(){
        var gameState_ref=database.ref('GameState');
        gameState_ref.on("value",function(data){
            gamestate = data.val();
        })
    }
    uptodate(state){
        database.ref('/').update({
            gamestate:state
        })
    }
    async start(){
        if(gamestate==0){
            player=new Player();
            var playercount_ref=await database.ref('playercount').once("value");
            if(playercount_ref.exists()){
                playercount=playercount_ref.val();
                player.getCount();
            }
            form=new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        textSize(30);
        text("GameStart! ",200,150);
        Player.getInfo();

        if(allPlayers!==undefined){
            var displayPosition=120;
            for(var plr in allPlayers){

                if(plr=="player"+player.index){

                    fill("red")

                }

                else{
                    fill("black")
                }
                displayPosition+=20;
                textSize(20);
                text(allPlayers[plr].name+": "+allPlayers[plr].distance,100,displayPosition);

            }


        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=50;
            player.update();
        }
    }
}