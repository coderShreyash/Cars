class Form{
    constructor(){
    this.title=createElement('h1');
    this.input=createInput("Name");
    this.button=createButton('Start');
    this.greeting=createElement('h3');
}
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
     
    this.title.html("Swift Cars");
    this.title.position(150,50);
    this.input.position(100,100);
    this.button.position(200,150);

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        var name =input.value();
        player.name=this.input.value();
        playecount+=1;
        player.index=playercount;
        player.update();
        player.updateCount(playercount);
        this.greeting.html("Hello"+playername);
        this.greeting.position(200,200);
    })
    }
}
