var car,wall;
var speed,weight;
var deform;

function setup() {
  createCanvas(600,400);
car=createSprite(50,200,50,50);
car.shapeColor="grey";
wall=createSprite(500,200,60,height/2);
 
}
function draw() {
  background("blue");  

  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));

car.velocityX=speed;

if(wall.x-car.x<(car.width+wall.width)/2){

  car.velocityX=0;
  deform=(0.5*weight*speed*speed)/22500;

  if(deform>180){
    car.shapeColor="red";
  }

  if(deform<180 && deform>100){

    car.shapeColor="yellow";

      }
      if(deform<100){

        car.shapeColor="green";

      }
}
  drawSprites();
}