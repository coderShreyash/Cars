var Ball,database;
var gamestate = 0,playercount=0,distance=0;
var form,player,game;
var allPlayers;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    game =new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playercount==4){
        game.update();
    }
    
    if(gamestate==1){
        clear();
        game.play()
    }

}