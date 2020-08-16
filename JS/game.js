class Game{

    constructor(){
    }


    //adjusts the gamestate.
    getState(){
        var  stateref=database.ref("gameState");
        stateref.on("value",function(data){
            gameState=data.val()
        })
        
    }


    //updates the gamestates to the database.
    update(state){

        database.ref("/").update({
        
            gameState:state

        })

            }


        // makes a new player.
    start(){
        if (gameState==0){
            player=new Player()

            player.getCount()

            form=new Form()

            form.display()
        }


        lamborgini=createSprite(100,200);
        BMW=createSprite(300,200);
        jaguar=createSprite(500,200);
        farrari=createSprite(700,200);

        lamborgini.addImage(car1img);
        farrari.addImage(car2img);
        jaguar.addImage(car3img);
        BMW.addImage(car4img);

        cars=[lamborgini,BMW,farrari,jaguar];


}


//gives the instruction in what the gamestate=play should occur.
play(){

form.HIDE();

textSize(30);
text("on your marks............get set............GO!!",20,50);

Player.getPlayerInfo();

if(allPlayers!=undefined){

    background("#c68767");

image (trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)

    var index=0;
    var x=280;
    var y=0;

var displayposition=130;

for(var plr in allPlayers){

    index=index+1;
    x=x+270
    y=windowHeight-allPlayers[plr].distance;


    cars[index-1].x=x;
    cars[index-1].y=y

if(index==player.index){

   cars[index-1].shapeColor="purple";
   camera .position.x=windowWidth/2;
   camera .position.y=cars[index-1].y

}else{

cars[index-1].shapeColor="pink"

}


}

if(keyDown("up")&&player.index!=null){

player.distance=player.distance+10;

player.update();

}

if (keyDown("down")&&player.index!=null){

    player.distance=player.distance-10;
    player.update();

}


if(player.distance>5130){

gameState=2

}



}

drawSprites();

}

end(){

textSize(30);
text("game over!",displayWidth/2-20,-displayHeight*4-100)

}

}