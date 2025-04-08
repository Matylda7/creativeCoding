class Tree {
    constructor(obj){

        this.posX = obj.posX ?? width/2;
        this.posY = obj.posY ?? height-80;

        this.imgWidth = obj.imgWidth ?? 350;  
        this.imgHeight = obj.imgHeight ?? 400; 
        this.treeCenterY = this.posY - this.imgHeight / 2;//finding the center of the image for the y coordinate
        this.treeLeaves = this.imgHeight - 50;


        this.fruits = [];
        this.numFruit = obj.numFruit ?? 20;
        this.fallingFruit = -1; //index of currently falling fruit (-1 means no fruit are currently falling)
        this.nextFruit = 0;//index of next fruit to drop
        this.timer;
        this.delay = 100; //in miliseconds
        this.lastDropTime = -this.delay; //first drops immediately

        this.generateFruit();

    }

generateFruit() {

    for (let i = 0; i < this.numFruit; i++) {

        this.fruits.push(new Fruit({
            startX: this.posX + random(-this.imgWidth/2,this.imgWidth/2),
            startY: this.treeCenterY + random(-this.imgHeight*0.25,this.imgHeight*0.25),            
        }));
   
      
    }
}

 renderTree() {
    imageMode(CENTER);
    image(treeImage, this.posX, this.treeCenterY, this.imgWidth, this.imgHeight);
}




renderFruit() {
   
    this.fruits.forEach(fruit => {
        if(!fruit.falling){
            fill(0, 180, 0);
            noStroke();
            ellipse(fruit.startX, fruit.startY, fruit.size * 0.9);

        }
    });
   
}

update(basket) { 
    //if the fruit that is falling and the millis() - the delay is more than the delay
    if (this.fallingFruit === -1 && millis() - this.lastDropTime > this.delay) {
      let fruitToDrop = this.fruits[this.nextFruit];
      fruitToDrop.fall(); 
      this.fallingFruit = this.nextFruit; // Track which fruit is falling
      this.lastDropTime = millis(); // Reset timer
      this.nextFruit = (this.nextFruit + 1) % this.numFruit; // Prepare for next drop
    }

    if (this.fallingFruit !== -1) {
      let currentFruit = this.fruits[this.fallingFruit];
      currentFruit.move();   // Apply gravity, update position
      currentFruit.render(); // Draw the fruit at its new position
 
      
      if (basket.checkCollision(currentFruit)) {
        console.log("Caught!"); 
        currentFruit.reset();    // Reset the fruit's state and position
        this.fallingFruit = -1; // Signal no fruit is falling anymore
      }
      // Check if fruit missed and reset
      else if (currentFruit.isOffScreen()) {
         console.log("Missed!"); 
        currentFruit.reset(); 
        this.fallingFruit = -1; // Signal no fruit is falling anymore
      }
      
    }
  }
  
}