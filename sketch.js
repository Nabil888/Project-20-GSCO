var car,wall;
var carName;

var speed,weight;
function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "white";
  
  wall = createSprite(1500,200,30,height/2);
  speed = random(55,90);
  car.velocityX = speed;
  weight = random(400,1500);
}

function draw() {
  background(0);  
  if(weight>400&&weight<600){
    carName = "Eclipse";
  }
  if(weight>600&&weight<700){
    carName = "Freyza";
  }
  if(weight>700&&weight<900){
    carName = "Tomford";
  }
  if(weight>900&&weight<1100){
    carName = "BFrank";
  }
  if(weight>1100&&weight<1300){
    carName = "Big Bulker";
  }
  if(weight>1300&&weight<1500){
    carName = "Mega Rex";
  }
  textSize(20);
  text(carName,car.x - 40,car.y-30);
  if(wall.x-car.x<wall.width/2+car.width/2){
    car.velocityX = 0;
    var deformation  = 0.5*weight*speed*speed/22500;
    if(deformation>180){
      car.shapeColor = "red";
    }
    if(deformation<180&&deformation>100){
      car.shapeColor = "yellow";
    }
    if(deformation<100){
      car.shapeColor = "green";
    }

  }
  drawSprites();
}