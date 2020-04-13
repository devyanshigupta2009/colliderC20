var moverect,fixrect;
function setup() {
  createCanvas(1200,800);
  fixrect=createSprite(400,100,50,80);
  moverect=createSprite(400,800,80,30);
  moverect.shapeColor="green";
  fixrect.shapeColor="green";
  fixrect.debug=true;
  moverect.debug=true;
  fixrect.velocityY=+5;
  moverect.velocityY=-5;
}

function draw() {
  background(0,0,0);  
  
  if (moverect.x-fixrect.x < fixrect.width/2 + moverect.width/2 && 
    fixrect.x-moverect.x < fixrect.width/2 + moverect.width/2 ){
      moverect.velocityX = moverect.velocityX * (-1);
      fixrect.velocityX = fixrect.velocityX * (-1);
    }
   if  (moverect.y-fixrect.y < fixrect.height/2 + moverect.height/2 && 
    fixrect.y-moverect.y < fixrect.height/2 + moverect.height/2 ) {
      moverect.velocityY = moverect.velocityY * (-1);
      fixrect.velocityY = fixrect.velocityY * (-1);
  }
  
  drawSprites();
}