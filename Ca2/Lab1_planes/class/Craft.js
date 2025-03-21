class Craft {

    constructor(obj) {
        this.posX = obj.posX ?? random(0, 500);
        this.posY = obj.posY ?? random(0, 500);

        this.speed = obj.speed ?? random(0.8,2);
        this.angle = obj.angle ?? random(0,360);

        this.apWidth = obj.apWidth ?? 15;
        this.apHeight = obj.apHeight ?? 20;
       
        this.alert = false;

        this.velX = this.speed*cos(this.angle);
        this.velY = this.speed*sin(this.angle);
    }

    render(id) {
        push()
        translate(this.posX, this.posY)
        // let angle = atan2(this.velY, this.velX);
        // ellipse(0,0,10,10);
        text(id,10,-5)
        rotate(this.angle)
        strokeWeight(1)
        ellipse(0,0,this.apWidth);
        if (this.alert == true){
        noFill();
        stroke(255,0,0);
        strokeWeight(2);
        ellipse(this.apHeight*0.25,0,this.apHeight*1.3)
        }

       
        
        pop()
    }
  
    updateVel(){
        this.velX = this.speed*cos(this.angle);
        this.velY = this.speed*sin(this.angle);
    }
    increaseSpeed(){
        this.speed += 0.5;
    }
    decreaseSpeed(){
        this.speed -= 1;
        if (this.speed < 0){
            this.speed = 0.2;
        }
    }
    turnLeft(){
        this.angle = this.angle-40;
    }

    move() {
       
        this.posX = this.posX + this.velX;
        this.posY = this.posY + this.velY;



    }

}