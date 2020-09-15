var fixedRect, movingRect

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green"
  movingRect = createSprite(600,400,60,70)
  movingRect.shapeColor = "green"
}

function draw() {
  background("black");  
  console.log(movingRect.x - fixedRect.x)
  console.log(movingRect.x - fixedRect.x)
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  drawSprites();
}