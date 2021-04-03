var player;
var ground, invisibleGround;
var stone;
var  END;
var GameState;
var foodGroup,foodImage;
var foodGroup, dangerImage;

function preload(){
  groundImage = loadImage("jungle.jpg");
  
  player_runing=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
   dangerImage = loadImage("stone.png");
   foodImage = loadImage("banana.png");
}
  
function setup() {
  createCanvas(displayWidth,displayHeight);
  
  //ground = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  //ground.addImage("ground",groundImage);
  //ground.x = ground.width/2;
  //ground.velocityX = -2;
  //ground.scale=3;
 
 
  // Create an invisibleGround
  invisibleGround= createSprite(displayWidth/2,displayHeight/2,0,displayHeight);
  invisibleGround.visible=false;
  
   player = createSprite(60,460,20,50);
   player.addAnimation("player",player_runing);
   player.scale=0.2;
  

  
  dangerGroup=new Group();
  foodGroup=new Group();
  
  
}

function draw() {
 
  image(groundImage,0,displayHeight/2,displayWidth*4,displayHeight);
  background(220);
  //if(ground.x<0){
    //ground.x=ground.width/2;
  //}
spawnenemy();
spawnenergy();

camera.position.x=player.x;
camera.position.y=displayHeight/2;

  
  if(dangerGroup.isTouching(player)){
  player.scale=0.1
  }
  if (keyDown("space")){
      player.velocityY=-8;
      }
  
  if(foodGroup.isTouching(player)){
     player.scale=0.2;
 
   
  }
  
  player.velocityY=player.velocityY+1;
  player.velocityX=player.velocityX=0;
  //Make the player collide with the invisibleGround
  player.collide(invisibleGround);
  drawSprites();
}

function spawnenemy() {
  //write code here to spawn the clouds
  if (frameCount % 120 === 0) {
    var stone = createSprite(400,350,40,10);
    stone.y = Math.round(random(460,455));
    stone.addImage(dangerImage);
    stone.scale = 0.2;
    stone.velocityX = -3;
    
     //assign lifetime to the variable
   stone.lifetime = 200;
    
   
    
    //add each cloud to the group
    dangerGroup.add(stone);
  }
}
function spawnenergy() {
  //write code here to spawn the clouds
  if (frameCount % 180 === 0) {
    var food = createSprite(300,360,20,10);
   food.y = Math.round(random(400,390));
    food.addImage(foodImage);
    food.scale = 0.1;
    food.velocityX = -3;
    
     //assign lifetime to the variable
   food.lifetime = 200;
    
   
    
    //add each cloud to the group
    foodGroup.add(food);
  }


if(player.distance>3860){
  gameState=2
}
    drawSprites();
    
}
  function end(){
console.log("GAME OVER")
text("Game Over",displayWidth-100,displayHeight-140);
}




