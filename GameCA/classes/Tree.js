class Tree {
    constructor(obj){
        this.radius = obj.radius ?? width/6;//third of the canvas
        this.angle = 360;

        this.posX = this.radius * cos(this.angle);
        this.posY = this.radius * sin(this.angle);

    }



 render() {
    translate(width/2, height/3)
    push();
    noFill();
    stroke(0);
    ellipse(0, 0, this.radius * 2); // Draw the boundary
    pop()
}

// to make circle do: x = radius * cos(angle), y = radius * sin(angle)
}