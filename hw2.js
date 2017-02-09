var mouthX = 25;
var mouthY = 250;
var mouthW = 400;
var mouthH = 60;

var eye1X = 80;
var eye1Y = 80;

var eye2offset = 300;
var pupilOffset = 20;

var backgroundColor = 'orange';

var inside = 'black'

var randNum = 0;

var mapX = 0;

function setup() {
    createCanvas(500, 400);
    background(0, 0, 0);
    background(255, 0, 0);
    background(125);
    
    console.log("width: " + width + " height: " + height);
    
    //noStroke();  //removes lines
    randNum = random(255); //range from 0-254
    console.log(randNum);
}

function draw() {
    frameRate(30);
    background(backgroundColor);
    
    mapX = map(mouseX, 0, width, -10, 10);
    
    fill(inside);
    //eye1
    //(x,y,width,height)
    triangle(300,140, 356, 20, 412, 140);    
    //fill(0,0,255);
    //fill(0,0,255);
    //ellipse(eye1X + mapX, eye1Y + pupilOffset ,25,50);//pupil
    
    //eye2
    //fill(255);
    triangle(60, 140, 116, 20, 172, 140);    
    //fill(0,0,255);
    //ellipse(eye1X + mapX, eye1Y + pupilOffset,25,50);//pupil
    
    fill(inside);
    //nose
    triangle(width/2, height/2, (width/2) + 20, (height/2) + 20, (width/2) - 20, (height/2) + 20);   
    
    //fill(255);         
    //mouth
    //rect(mouthX, mouthY, mouthW, mouthH);
    //stroke(125);
    
    arc(245, 275, 300, 150, 0, PI);
    strokeWeight(1);
    fill(backgroundColor);
    rect(150, 275, 55/2, 55/2);
    rect(300, 275, 55/2, 55/2);
   

    strokeWeight(7);
    
    arc(60, 150, 110, 350, 90, PI, closed);
    arc(525, 150, 110, 1000, 90, PI, closed);
    //trouble finding a way to create the grooves of the pumkin


    
    //ellipse(mouseX, mouseY, 10, 10);

    //noStroke();
    
    //toungue
    //fill('red')

    //arc(width/2 + 100, 275, 100, 100, 0, PI);
    
    //ellipse(mouseX, mouseY, 10, 10);

}



function mousePressed(){
     inside = randNum = random(255); //range from 0-254;
    console.log(randNum);
}

//function mouseReleased(){
   // backgroundColor= 'blue';
//}

