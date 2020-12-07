
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstaclesGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
} 



function setup() {

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("monkeyrun", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  
  bananaGroup = createGroup();
  obstaclesGroup = createGroup();
  
  survivalTime = 0;
}


function draw() {
  background("white")
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time: " + survivalTime,100,50)
  survivalTime = Math.ceil(frameCount/24);
  monkey.collide(ground);
  
  if(keyDown("space")){
    monkey.velocityY = -8;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  ground.velocityX = -3;
  if(ground.x < 0){
  ground.x = ground.width/2;
  }
  
  spawnFood();
  spawnobs();
  drawSprites()
}

function spawnFood(){
  if(frameCount%80===0){
    banana = createSprite(600, 120, 20, 20);
    banana.y = Math.round(random(120,200));
    banana.addImage("food", bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime=200;
    bananaGroup.add(banana);
  }
  
}

function spawnobs(){
  if(frameCount%300===0){
    obs = createSprite(600, 325, 20, 20);
    obs.addImage("stone", obstacleImage);
    obs.scale = 0.1;
    obs.velocityX = -3;
    obs.lifetime=200;
    obstaclesGroup.add(obs);
  }
  
}



