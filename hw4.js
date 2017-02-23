var choices = {
    "Red": 0,
    "Green": 0,
    "Blue": 0,
    "Black": 0
};

var redMessage = "";
var greenMessage= "";
var blueMessage="";
var blackMessage= "";

function setup() {
    createCanvas(400, 100)
    console.log(choices);
    console.log(choices["Red"]);
    console.log(choices["Green"]);
    console.log(choices["Blue"]);
    console.log(choices["Black"]);

    noStroke();
}

function draw() {
background(255);
fill(255,0,0, 100);
text(redMessage, 10, height/2);
text(greenMessage, 80, height/2);
text(blueMessage, 160, height/2);
text(blackMessage, 240, height/2);
    
ellipse(40, height/2, choices["Red"], choices["Red"]);
fill(0,255,0,100);
ellipse(100, height/2, choices["Green"], choices["Green"]);
fill(0,0,255,100);
ellipse(180, height/2, choices["Blue"], choices["Blue"]);
fill(0,0,0,100);
ellipse(260, height/2, choices["Black"], choices["Black"]);
    

}


function keyPressed() {
    //console.log(keyCode);

    //49 == 1, 50 == 2, 51 == 3, 52 == 4
    if (keyCode == 49) {
        choices["Red"]++;
        cakeMessage = "Red: " +choices["Red"];
    } else if (keyCode == 50) {
        choices["Green"]++;
            candyMessage = "Green: " +choices["Green"];

    } else if (keyCode == 51) {
        choices["Blue"]++;
            pieMessage = "Blue: " +choices["Blue"];

    } else if (keyCode == 52) {
        choices["Black"]++;
                savoryMessage = "Black: " +choices["Black"];

    }


    console.log(choices);


}