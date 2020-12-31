var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(300,200,50,40);
  movingRect.shapeColor="green";
  fixedRect=createSprite(200,200,70,45);
  fixedRect.shapeColor="blue";
  movingRect.velocityX=3;
  fixedRect.velocityX=3;
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  bounceOff(movingRect,fixedRect);

  
  drawSprites();
}
