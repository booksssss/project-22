class PlayerArcher {
    constructor (x,y,width,height,angle) {
        var options = {
            isStatic = true
        }
        this.x=x 
        this.y=y
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.player_archerimg=loadImage("assets/playerArcher.png")

        


    }
    show() {
        if (keyIsDown (RIGHT_ARROW) && (this.angle<70) ){
          this.angle += 1
        }
        if (keyIsDown(LEFT_ARROW) && (this.angle>-30)) {
          this.angle -= 1
        }
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        angleMode(DEGREES)
        imageMode(CENTER);
        image(this.player_archerimg,0,0, this.width, this.height);
        pop();
        // noFill();
      }


    
}