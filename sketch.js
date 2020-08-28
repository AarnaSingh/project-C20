var car,wall,speed,weight;




function setup() {
  createCanvas(1200,400);

  speed = random(55,90)
weight = random(400,1500)

 car = createSprite(50,200,50,50);
 car.velocityX= speed;

 wall = createSprite(1000,200,30,height/2)


 
 
}

function draw() {
  background("black");
  
  
if(wall.x-car.x<(car.width+wall.width/2)){
  car.velocityX = 0
  var deformation = 0.5*weight*speed*speed/22500

 if(deformation<100){
 car.shapeColor="green"
 fill("red")
 textSize(30)
 text("You are Safe!!",300,300)
 }

 if (deformation>100&&deformation<180){
    car.shapeColor = "yellow"
    fill("red")
    textSize(30)
    text("Nice! But try to drive slower next time ...",300,300)
 }

 if(deformation>180){
  car.shapeColor = "red"
  fill("red")
  textSize(30)
  text("ACCIDENT!",300,300)
  }
} 

text("deformation value "+ deformation,100,100)
  drawSprites();
}