var ground;
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  ground1=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(20,150,10,10)
 trex.addAnimation("trex3",trex_running)
 trex.scale=0.5
  ground=createSprite(10,175,900,10)
  ground.addImage(ground1)
  ground.velocityX=-5
}

function draw(){
  background("Cyan")

  drawSprites()
}
