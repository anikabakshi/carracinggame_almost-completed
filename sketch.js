
// makes the variables.
var database;
var gameState=0;
var playerCount=0;
var form;
var player;
var allPlayers;
var game;

var car1img,car2img,car3img,car4img,trackimg;

var farrari,lamborgini,jaguar,BMW;

var cars=[]

function preload(){

car1img=loadImage("images/car1.png");
car2img=loadImage("images/car2.png");
car3img=loadImage("images/car3.png");
car4img=loadImage("images/car4.png");
trackimg=loadImage("images/track.jpg");

}

function setup(){
   createCanvas(windowWidth-25,windowHeight-20);

   database=firebase.database()

   game=new Game()

   game.getState()
   
   game.start()

   //console.log(windowWidth,windowHeight);
}

function draw(){

   background("white");

   if(playerCount==4){
      game.update(1)
   }

   if(gameState==1){
      game.play();
   }


   if(gameState==2){
   game.end()
   }



    
}




//this library is soooooooooooo small!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


