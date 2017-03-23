var pic1;
var pic2;
var pic3;
var pic4;
var pic5;
var pic6;
var pic7;
var pic8;
var pic9;
var pic10;
var pic11;
var pic12;
var pic13;
var pic14;
var pic15;
var pic16;
var pic17;
var pic18;
var pic19;
var pic20;
var pic21;
var pic22;
var pic23;
var pic24;
var pic25;

var pic1Selected = false;
var pic2Selected = false;
var pic3Selected = false;
var pic4Selected = false;
var pic5Selected = false;
var pic6Selected = false;
var pic7Selected = false;
var pic8Selected = false;
var pic9Selected = false;
var pic10Selected = false;
var pic11Selected = false;
var pic12Selected = false;
var pic13Selected = false;
var pic14Selected = false;
var pic15Selected = false;
var pic16Selected = false;
var pic17Selected = false;
var pic18Selected = false;
var pic19Selected = false;
var pic20Selected = false;
var pic21Selected = false;
var pic22Selected = false;
var pic23Selected = false;
var pic24Selected = false;
var pic25Selected = false;

var pic1Dist = 0;
var pic2Dist = 0;
var pic3Dist = 0;
var pic4Dist = 0;
var pic5Dist = 0;
var pic6Dist = 0;
var pic7Dist = 0;
var pic8Dist = 0;
var pic9Dist = 0;
var pic10Dist = 0;
var pic11Dist = 0;
var pic12Dist = 0;
var pic13Dist = 0;
var pic14Dist = 0;
var pic15Dist = 0;
var pic16Dist = 0;
var pic17Dist = 0;
var pic18Dist = 0;
var pic19Dist = 0;
var pic20Dist = 0;
var pic21Dist = 0;
var pic22Dist = 0;
var pic23Dist = 0;
var pic24Dist = 0;
var pic25Dist = 0;

var puzzleSize = 75


function preload() {
    pic1 = loadImage("Midterm images (puppies)/image_part_001.jpg");
    pic2 = loadImage("Midterm images (puppies)/image_part_002.jpg");
    pic3 = loadImage("Midterm images (puppies)/image_part_003.jpg");
    pic4 = loadImage("Midterm images (puppies)/image_part_004.jpg");
    pic5 = loadImage("Midterm images (puppies)/image_part_005.jpg");
    pic6 = loadImage("Midterm images (puppies)/image_part_006.jpg");
    pic7 = loadImage("Midterm images (puppies)/image_part_007.jpg");
    pic8 = loadImage("Midterm images (puppies)/image_part_008.jpg");
    pic9 = loadImage("Midterm images (puppies)/image_part_009.jpg");
    pic10 = loadImage("Midterm images (puppies)/image_part_010.jpg");
    pic11 = loadImage("Midterm images (puppies)/image_part_011.jpg");
    pic12 = loadImage("Midterm images (puppies)/image_part_012.jpg");
    pic13 = loadImage("Midterm images (puppies)/image_part_013.jpg");
    pic14 = loadImage("Midterm images (puppies)/image_part_014.jpg");
    pic15 = loadImage("Midterm images (puppies)/image_part_015.jpg");
    pic16 = loadImage("Midterm images (puppies)/image_part_016.jpg");
    pic17 = loadImage("Midterm images (puppies)/image_part_017.jpg");
    pic18 = loadImage("Midterm images (puppies)/image_part_018.jpg");
    pic19 = loadImage("Midterm images (puppies)/image_part_019.jpg");
    pic20 = loadImage("Midterm images (puppies)/image_part_020.jpg");
    pic21 = loadImage("Midterm images (puppies)/image_part_021.jpg");
    pic22 = loadImage("Midterm images (puppies)/image_part_022.jpg");
    pic23 = loadImage("Midterm images (puppies)/image_part_023.jpg");
    pic24 = loadImage("Midterm images (puppies)/image_part_024.jpg");
    pic25 = loadImage("Midterm images (puppies)/image_part_025.jpg");

}



function setup() {
    createCanvas(1000, 700);

    randNumWidth1 = random(700, 900);
    randNumHight1 = random(1, 500);
    randNumWidth2 = random(700, 900);
    randNumHight2 = random(1, 500);
    randNumWidth3 = random(700, 900);
    randNumHight3 = random(1, 500);
    randNumWidth4 = random(700, 900);
    randNumHight4 = random(1, 500);
    randNumWidth5 = random(700, 900);
    randNumHight5 = random(1, 500);
    randNumWidth6 = random(700, 900);
    randNumHight6 = random(1, 500);
    randNumWidth7 = random(700, 900);
    randNumHight7 = random(1, 500);
    randNumWidth8 = random(700, 900);
    randNumHight8 = random(1, 500);
    randNumWidth9 = random(700, 900);
    randNumHight9 = random(1, 500);
    randNumWidth10 = random(700, 900);
    randNumHight10 = random(1, 500);
    randNumWidth11 = random(700, 900);
    randNumHight11 = random(1, 500);
    randNumWidth12 = random(700, 900);
    randNumHight12 = random(1, 500);
    randNumWidth13 = random(700, 900);
    randNumHight13 = random(1, 500);
    randNumWidth14 = random(700, 900);
    randNumHight14 = random(1, 500);
    randNumWidth15 = random(700, 900);
    randNumHight15 = random(1, 500);
    randNumWidth16 = random(700, 900);
    randNumHight16 = random(1, 500);
    randNumWidth17 = random(700, 900);
    randNumHight17 = random(1, 500);
    randNumWidth18 = random(700, 900);
    randNumHight18 = random(1, 500);
    randNumWidth19 = random(700, 900);
    randNumHight19 = random(1, 500);
    randNumWidth20 = random(700, 900);
    randNumHight20 = random(1, 500);
    randNumWidth21 = random(700, 900);
    randNumHight21 = random(1, 500);
    randNumWidth22 = random(700, 900);
    randNumHight22 = random(1, 500);
    randNumWidth23 = random(700, 900);
    randNumHight23 = random(1, 500);
    randNumWidth24 = random(700, 900);
    randNumHight24 = random(1, 500);
    randNumWidth25 = random(700, 900);
    randNumHight25 = random(1, 500);




}

function draw() {
    background(255, 248, 220);
    rect(700, 0, 500, 600);
    fill(139, 131, 120)
    

        // loadImage("Midterm images (puppies)/image_part_002.jpg", function(img) {
        
    
    image(pic1, randNumWidth1, randNumHight1, puzzleSize, puzzleSize);
    image(pic2, randNumWidth2, randNumHight2, puzzleSize, puzzleSize);
    image(pic3, randNumWidth3, randNumHight3, puzzleSize, puzzleSize);
    image(pic4, randNumWidth4, randNumHight4, puzzleSize, puzzleSize);
    image(pic5, randNumWidth5, randNumHight5, puzzleSize, puzzleSize);
    image(pic6, randNumWidth6, randNumHight6, puzzleSize, puzzleSize);
    image(pic7, randNumWidth7, randNumHight7, puzzleSize, puzzleSize);
    image(pic8, randNumWidth8, randNumHight8, puzzleSize, puzzleSize);
    image(pic9, randNumWidth9, randNumHight9, puzzleSize, puzzleSize);
    image(pic10, randNumWidth10, randNumHight10, puzzleSize, puzzleSize);
    image(pic11, randNumWidth11, randNumHight11, puzzleSize, puzzleSize);
    image(pic12, randNumWidth12, randNumHight12, puzzleSize, puzzleSize);
    image(pic13, randNumWidth13, randNumHight13, puzzleSize, puzzleSize);
    image(pic14, randNumWidth14, randNumHight14, puzzleSize, puzzleSize);
    image(pic15, randNumWidth15, randNumHight15, puzzleSize, puzzleSize);
    image(pic16, randNumWidth16, randNumHight16, puzzleSize, puzzleSize);
    image(pic17, randNumWidth17, randNumHight17, puzzleSize, puzzleSize);
    image(pic18, randNumWidth18, randNumHight18, puzzleSize, puzzleSize);
    image(pic19, randNumWidth19, randNumHight19, puzzleSize, puzzleSize);
    image(pic20, randNumWidth20, randNumHight20, puzzleSize, puzzleSize);
    image(pic21, randNumWidth21, randNumHight21, puzzleSize, puzzleSize);
    image(pic22, randNumWidth22, randNumHight22, puzzleSize, puzzleSize);
    image(pic23, randNumWidth23, randNumHight23, puzzleSize, puzzleSize);
    image(pic24, randNumWidth24, randNumHight24, puzzleSize, puzzleSize);
    image(pic25, randNumWidth25, randNumHight25, puzzleSize, puzzleSize);


    if (pic1Selected == true) {
        randNumWidth1 = mouseX; 
        randNumHight1 = mouseY; 
    }

    if (pic2Selected == true) {
        randNumWidth2 = mouseX; 
        randNumHight2 = mouseY; 
    }

    if (pic3Selected == true) {
        randNumWidth3 = mouseX; 
        randNumHight3 = mouseY; 
    }

    if (pic4Selected == true) {
        randNumWidth4 = mouseX; 
        randNumHight4 = mouseY; 
    }

    if (pic5Selected == true) {
        randNumWidth5 = mouseX; 
        randNumHight5 = mouseY; 
    }

    if (pic6Selected == true) {
        randNumWidth6 = mouseX; 
        randNumHight6 = mouseY; 
    }

    if (pic7Selected == true) {
        randNumWidth7 = mouseX; 
        randNumHight7 = mouseY; 
    }

    if (pic8Selected == true) {
        randNumWidth8 = mouseX; 
        randNumHight8 = mouseY; 
    }

    if (pic9Selected == true) {
        randNumWidth9 = mouseX; 
        randNumHight9 = mouseY; 
    }

    if (pic10Selected == true) {
        randNumWidth10 = mouseX; 
        randNumHight10 = mouseY; 
    }

    if (pic11Selected == true) {
        randNumWidth11 = mouseX; 
        randNumHight11 = mouseY; 
    }

    if (pic12Selected == true) {
        randNumWidth12 = mouseX; 
        randNumHight12 = mouseY; 
    }

    if (pic13Selected == true) {
        randNumWidth13 = mouseX; 
        randNumHight13 = mouseY; 
    }

    if (pic14Selected == true) {
        randNumWidth14 = mouseX; 
        randNumHight14 = mouseY; 
    }

    if (pic15Selected == true) {
        randNumWidth15 = mouseX; 
        randNumHight15 = mouseY; 
    }

    if (pic16Selected == true) {
        randNumWidth16 = mouseX; 
        randNumHight16 = mouseY; 
    }

    if (pic17Selected == true) {
        randNumWidth17 = mouseX; 
        randNumHight17 = mouseY; 
    }

    if (pic18Selected == true) {
        randNumWidth18 = mouseX; 
        randNumHight18 = mouseY; 
    }

    if (pic19Selected == true) {
        randNumWidth19 = mouseX; 
        randNumHight19 = mouseY; 
    }

    if (pic20Selected == true) {
        randNumWidth20 = mouseX; 
        randNumHight20 = mouseY; 
    }

    if (pic21Selected == true) {
        randNumWidth21 = mouseX; 
        randNumHight21 = mouseY; 
    }

    if (pic22Selected == true) {
        randNumWidth22 = mouseX; 
        randNumHight22 = mouseY; 
    }

    if (pic23Selected == true) {
        randNumWidth23 = mouseX; 
        randNumHight23 = mouseY; 
    }

    if (pic24Selected == true) {
        randNumWidth24 = mouseX; 
        randNumHight24 = mouseY; 
    }

    if (pic25Selected == true) {
        randNumWidth25 = mouseX; 
        randNumHight25 = mouseY; 
    }


    pic1Dist = int(dist(mouseX, mouseY, randNumWidth1, randNumHight1));
    pic2Dist = int(dist(mouseX, mouseY, randNumWidth2, randNumHight2));
    pic3Dist = int(dist(mouseX, mouseY, randNumWidth3, randNumHight3));
    pic4Dist = int(dist(mouseX, mouseY, randNumWidth4, randNumHight4));
    pic5Dist = int(dist(mouseX, mouseY, randNumWidth5, randNumHight5));
    pic6Dist = int(dist(mouseX, mouseY, randNumWidth6, randNumHight6));
    pic7Dist = int(dist(mouseX, mouseY, randNumWidth7, randNumHight7));
    pic8Dist = int(dist(mouseX, mouseY, randNumWidth8, randNumHight8));
    pic9Dist = int(dist(mouseX, mouseY, randNumWidth9, randNumHight9));
    pic10Dist = int(dist(mouseX, mouseY, randNumWidth10, randNumHight10));
    pic11Dist = int(dist(mouseX, mouseY, randNumWidth11, randNumHight11));
    pic12Dist = int(dist(mouseX, mouseY, randNumWidth12, randNumHight12));
    pic13Dist = int(dist(mouseX, mouseY, randNumWidth13, randNumHight13));
    pic14Dist = int(dist(mouseX, mouseY, randNumWidth14, randNumHight14));
    pic15Dist = int(dist(mouseX, mouseY, randNumWidth15, randNumHight15));
    pic16Dist = int(dist(mouseX, mouseY, randNumWidth16, randNumHight16));
    pic17Dist = int(dist(mouseX, mouseY, randNumWidth17, randNumHight17));
    pic18Dist = int(dist(mouseX, mouseY, randNumWidth18, randNumHight18));
    pic19Dist = int(dist(mouseX, mouseY, randNumWidth19, randNumHight19));
    pic20Dist = int(dist(mouseX, mouseY, randNumWidth20, randNumHight20));
    pic21Dist = int(dist(mouseX, mouseY, randNumWidth21, randNumHight21));
    pic22Dist = int(dist(mouseX, mouseY, randNumWidth22, randNumHight22));
    pic23Dist = int(dist(mouseX, mouseY, randNumWidth23, randNumHight23));
    pic24Dist = int(dist(mouseX, mouseY, randNumWidth24, randNumHight24));
    pic25Dist = int(dist(mouseX, mouseY, randNumWidth25, randNumHight25));


}

function mousePressed() {
    if (pic1Dist < puzzleSize) {
        console.log("overPic1");
        if (pic1Selected == false) {
            pic1Selected = true;
        } else {
            pic1Selected = false;
        }
    }

    if (pic2Dist < puzzleSize) {
        console.log("overPic2");
        if (pic2Selected == false) {
            pic2Selected = true;
        } else {
            pic2Selected = false;
        }
    }

    if (pic3Dist < puzzleSize) {
        console.log("overPic3");
        if (pic3Selected == false) {
            pic3Selected = true;
        } else {
            pic3Selected = false;
        }
    }

    if (pic4Dist < puzzleSize) {
        console.log("overPic4");
        if (pic4Selected == false) {
            pic4Selected = true;
        } else {
            pic4Selected = false;
        }

        if (pic5Dist < puzzleSize) {
            console.log("overPic5");
            if (pic5Selected == false) {
                pic5Selected = true;
            } else {
                pic5Selected = false;
            }
        }

        if (pic6Dist < puzzleSize) {
            console.log("overPic6");
            if (pic6Selected == false) {
                pic6Selected = true;
            } else {
                pic6Selected = false;
            }
        }

        if (pic7Dist < puzzleSize) {
            console.log("overPic7");
            if (pic7Selected == false) {
                pic7Selected = true;
            } else {
                pic7Selected = false;
            }
        }

        if (pic8Dist < puzzleSize) {
            console.log("overPic8");
            if (pic8Selected == false) {
                pic8Selected = true;
            } else {
                pic8Selected = false;
            }
        }

        if (pic9Dist < puzzleSize) {
            console.log("overPic9");
            if (pic9Selected == false) {
                pic9Selected = true;
            } else {
                pic9Selected = false;
            }
        }

        if (pic10Dist < puzzleSize) {
            console.log("overPic10");
            if (pic10Selected == false) {
                pic10Selected = true;
            } else {
                pic10Selected = false;
            }
        }

        if (pic11Dist < puzzleSize) {
            console.log("overPic11");
            if (pic11Selected == false) {
                pic11Selected = true;
            } else {
                pic11Selected = false;
            }
        }

        if (pic12Dist < puzzleSize) {
            console.log("overPic12");
            if (pic12Selected == false) {
                pic12Selected = true;
            } else {
                pic12Selected = false;
            }
        }

        if (pic13Dist < puzzleSize) {
            console.log("overPic13");
            if (pic13Selected == false) {
                pic13Selected = true;
            } else {
                pic13Selected = false;
            }
        }

        if (pic14Dist < puzzleSize) {
            console.log("overPic14");
            if (pic14Selected == false) {
                pic14Selected = true;
            } else {
                pic14Selected = false;
            }
        }

        if (pic15Dist < puzzleSize) {
            console.log("overPic15");
            if (pic15Selected == false) {
                pic15Selected = true;
            } else {
                pic15Selected = false;
            }
        }

        if (pic16Dist < puzzleSize) {
            console.log("overPic16");
            if (pic16Selected == false) {
                pic16Selected = true;
            } else {
                pic16Selected = false;
            }
        }

        if (pic17Dist < puzzleSize) {
            console.log("overPic17");
            if (pic17Selected == false) {
                pic17Selected = true;
            } else {
                pic17Selected = false;
            }
        }

        if (pic18Dist < puzzleSize) {
            console.log("overPic18");
            if (pic18Selected == false) {
                pic18Selected = true;
            } else {
                pic18Selected = false;
            }
        }

        if (pic19Dist < puzzleSize) {
            console.log("overPic19");
            if (pic19Selected == false) {
                pic19Selected = true;
            } else {
                pic19Selected = false;
            }
        }

        if (pic20Dist < puzzleSize) {
            console.log("overPic20");
            if (pic20Selected == false) {
                pic20Selected = true;
            } else {
                pic20Selected = false;
            }
        }

        if (pic21Dist < puzzleSize) {
            console.log("overPic21");
            if (pic21Selected == false) {
                pic21Selected = true;
            } else {
                pic21Selected = false;
            }
        }

        if (pic22Dist < puzzleSize) {
            console.log("overPic22");
            if (pic22Selected == false) {
                pic22Selected = true;
            } else {
                pic22Selected = false;
            }
        }

        if (pic23Dist < puzzleSize) {
            console.log("overPic23");
            if (pic23Selected == false) {
                pic23Selected = true;
            } else {
                pic23Selected = false;
            }
        }

        if (pic24Dist < puzzleSize) {
            console.log("overPic24");
            if (pic24Selected == false) {
                pic24Selected = true;
            } else {
                pic24Selected = false;
            }
        }

        if (pic25Dist < puzzleSize) {
            console.log("overPic25");
            if (pic25Selected == false) {
                pic25Selected = true;
            } else {
                pic25Selected = false;
            }
        }



    }

}