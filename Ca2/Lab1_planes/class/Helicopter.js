class Helicopter extends Craft {

    constructor(obj) {

        super(obj);

        this.tail = obj.tail ?? 4;
        this.alert = false;
    }

    render(id) {
        push()
        translate(this.posX, this.posY)
        // let angle = atan2(this.velY, this.velX);
        // ellipse(0,0,10,10);
        text(id,10,-5)
        rotate(this.angle)
        strokeWeight(1)
        ellipse(0,0,20,15)
        strokeWeight(2.5)
        line(this.apHeight/2,0,-this.apHeight/2,0);
        line(this.apWidth/2,this.apHeight/2,-this.apWidth/2,-this.apHeight/2);
        if (this.alert == true){
        noFill();
        stroke(255,0,0);
        strokeWeight(2);
        ellipse(this.apHeight*0.25,0,this.apHeight*1.3)
        }

        pop()
    }
}