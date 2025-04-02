class Tree {
    constructor(obj){
        this.radius = obj.radius ?? width/6;//third of the canvas
        this.angle = random(0,360);

        this.posX = obj.posX ?? width/2;
        this.posY = obj.posY ?? height/3;

        this.fruits = [];
        this.numFruit = obj.numFruit ?? 2;

        this.generateFruit();

    }



 renderTree() {
    translate(this.posX, this.posY)
    push();
    noFill();
    stroke(11);
    ellipse(0, 0, this.radius * 2); // Draw the boundary
    pop()
}


generateFruit() {
    for (let i = 0; i < this.numFruit; i++) {

        
        
        this.fruits.push(new Fruit({
            posX: random(-this.radius,this.radius),
            posY: random(-this.radius, this.radius),            
        }));
   
      
    }
}

renderFruit() {
    push();
    translate(this.posX, this.posY); // Translate to the tree's center
    this.fruits.forEach(fruit => {
        fruit.render();
    });
    pop();
}

dropFruit(){
    this.fruits.forEach(fruit => {
        fruit.move();
    });
}

// to make circle do: x = radius * cos(angle), y = radius * sin(angle)
}