class Tree {
    constructor(obj){
        this.radius = obj.radius ?? width/6;//third of the canvas
        this.angle = random(0,360);

        this.posX = obj.posX ?? width/2;
        this.posY = obj.posY ?? height/3;

        this.fruits = [];
        this.numFruit = obj.numFruit ?? 10;

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
        let r = random(0,this.radius);
        let angle = random(0, TWO_PI);  // New random angle for each fruit
        let fruitX = this.posX + r * cos(angle);
        let fruitY = this.posY + r * sin(angle);
        
        this.fruits.push(new Fruit({
            posX: fruitX,
            posY: fruitY,
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

// to make circle do: x = radius * cos(angle), y = radius * sin(angle)
}