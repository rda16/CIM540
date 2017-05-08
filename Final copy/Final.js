var ball;
var bat;
var MAX_SPEED = 10;
var field;
var pitcher;


function setup() {
  createCanvas(1000,1000);
  //frameRate(6);
  
  field = loadImage("baseballfield.jpg");    

  pitcher = loadImage("pitcher.png");    
    
  bat = createSprite(400, 400, 200, 10);
  bat.addImage(loadImage("Baseball.Bat2.png"));
  bat.immovable = true;
  
  ball = createSprite(490, 150, 40, 40);
  ball.addImage(loadImage("baseball.png"));


  ball.maxSpeed = MAX_SPEED;
    
  ball.setSpeed(MAX_SPEED, -270);
        
}

function draw() {
  background(255);
  image(field,0, 0, width, height);
  image(pitcher,470,170, width/10, height/10);


  bat.position.y = constrain(mouseY, bat.height/2, height-bat.height/2);
  bat.position.x = constrain(mouseX+100, bat.height/2, height-bat.height/2);

//  ball.bounce(wallTop);
//  ball.bounce(wallBottom);
  
  
  if(ball.bounce(bat)) {
    var swing = (ball.position.x-bat.position.x)/3;
    ball.setSpeed(MAX_SPEED, ball.getDirection()+swing);
  }
  
  
  if(ball.position.y<0) {
  ball.position.x = 490;
  ball.position.y = 165;
  ball.setSpeed(MAX_SPEED, 90);
  }
  
  if(ball.position.y>height) {
  ball.position.x = 490;
  ball.position.y = 165;
  ball.setSpeed(MAX_SPEED, -270);
  }
  
    
// bat.debug = mouseIsPressed;    
//if (mouseIsPressed) {
//    bat.rotation -= 5;
//  }    
//    
  drawSprites();
    
}





