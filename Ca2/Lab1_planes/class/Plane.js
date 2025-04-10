class Plane extends Craft {

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
        beginShape()

        vertex(0, 0);
        vertex(-this.tail, -this.apWidth / 2)
        vertex(this.apHeight - this.tail, 0)
        vertex(-this.tail, this.apWidth / 2)

        endShape(CLOSE);
        line(0,0,this.apHeight-this.tail,0)
        if (this.alert == true){
        noFill();
        stroke(255,0,0);
        strokeWeight(2);
        ellipse(this.apHeight*0.25,0,this.apHeight*1.3)
        }

        pop()
    }
}