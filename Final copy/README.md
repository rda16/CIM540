I first began this project with the idea of expanding upon my midterm project.  Although the problem with that is I couldnt get it to work.  After much trial and error, I was begining to get close, but then I was struck with an even better idea while watching a baseball game.  Im a huge baseball fan and I was curious if I could create a easy to play baseball game using one of the libraries required for our final project.  The first step was to gather all the recources I needed to make my game which consisted mostly of pictures.  One thing I had learned while choosing pictures is that a png file had to be used. I had no idea that a png would take only the silhouette of an image and everything inside it (very useful as often the white backgrounds wouldn't look good). As I began to write the code and include my images I was able to see the framework for my game taking form, but I ran into a problem.  For some reason the code I was writing was not working at all and I spent hours and days trying to figure out why.  This was honestly very frustrating and I began to lose confidence in my ability to code properly.  Thankfully, after showing my code to my professor, I found the problem was a stupid mistake I made which caused none of my code to work. The p5 libraries I had in my index file were not even downloaded.  

After fixing my simple mistake I began trying the 2D collide library and things were going well until the last step.  So in my game, the pitcher repeatedly throws a ball straight down the middle.  The collision detection between the bat and the ball would then produce the ball to ricochet off the bat and fly north.  I had set collision to false and then the "hit = collideRectCircle(mouseX, mouseY, bat.width / 7, bat.height / 7, 430, y, ball.width / 27, ball.height / 27);" would turn true as the bat would collide with the ball, but as soon as the ball would leave the area of the bat, then collide would go back to false (meaning the ball would come back down).  This proved to be a headache and I couldn't really figure it out.  

So after trying to no avail with the 2D collide library, I switched to trying the play library. After spending time learning the new library and looking at as many examples as I could, I was ready to apply it to my code.  Funnily, I ended up just starting from scratch but it still looks the same and is finally working!  I would have loved to get the bad to rotate on mouse click as to simulate swinging the bat to hit the ball, but I couldn't get it to work properly.  Basically, the play library uses sprites so I made the bat and baseball a sprite while loading the rest of the stationary images.  The "bat.immovable = true" is so that the bat doesn't move when the ball collides with it and I set the positions for the bat to be mouse x and y.  The "bounce" is used to simulate the physics that cause the ball to fly off the bat(which is exactly what I wanted with collide).  Over all I'm very satisfied with the end result and and I have certainly learned a lot throughout my trail and error.  