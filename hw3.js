var counter = 0;
var backgroundColor = 0;
var ballDir = true;


function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(backgroundColor);
    
    if (mouseY > height / 2) {
        backgroundColor = "orange";
    } else {
        backgroundColor = "green";
    }
    
    if (counter < 0) {
        //limit one
        ballDir = true;
        console.log("up hit: " + counter);

    }

    if (counter >= width) {
        //limit two
        ballDir = false;
        console.log("down hit: " + counter);

    }
    
    if (counter <= 0) {
        counter = 0;
    } 
    
    if(counter >= height){
        counter = height
    }
    
    if(mouseY > height/2){
            counter = counter + 1;

    }
    if(mouseY < height/2){
            counter = counter - 1

    }
     
//    if(mouseY > height/2 || ballDir == true){
//            counter = counter + 1;
//
//    }
//    if(mouseY < height/2 || ballDir == false){
//            counter = counter - 1
//
//    }
//        

    ellipse(width / 2, counter, 50, 50);
    //ellipse(mouseX, mouseY, 150, 150);


}


