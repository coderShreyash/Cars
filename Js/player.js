class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;

     
    }
  getCount(){
      var playercount_ref=database.ref('playercount');
      playercount_ref.on("value",function(data){
          playercount = data.val();
      })
  }
  updateCount(count){
   database.ref('/').update({
       playercount:count
   })
  }
  update(){
      var playerIndex="players/player"+this.index;
      database.ref(playerIndex).set({
          name:this.name,
          distance:this.distance
      })
  }
  static getInfo(){
       var playerInfo_ref=database.ref('players');
       playerInfo_ref.on("value",(data)=>{
       allPlayers=data.val();
       })
  }
}