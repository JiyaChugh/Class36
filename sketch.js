var backgroundImage;
var database;
var gameState=0;
var playerCount;
var form,player,game;

function setup(){
    createCanvas(500,500);
    
    database=firebase.database();

    game=new Game();
   
}

function draw(){
    game.getState();
    game.start();
}