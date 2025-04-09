class Basket {
    constructor(obj) {
        this.w = obj.w ?? 70;
        this.h = obj.h ?? 40;
        this.posX = obj.x ?? (width/2 - this.w/2) ;
        this.posY = obj.y ?? height - 60;
        
        this.speed = obj.speed ?? 10;
      }

       render(){
        fill(101, 67, 33); 
        noStroke();
        push();
        translate(this.posX, this.posY); 
        beginShape();
        vertex(0, 0);          // Top-left corner
        vertex(80, 0);         // Top-right corner
        bezierVertex(70, 40, 45, 40, 45, 40); // Curve to the middle
        bezierVertex(25, 40, 5, 40, 0, 0);  // Curve back to the top left
        endShape(CLOSE);
        pop(); 
}

      move() {
        if (keyIsDown(LEFT_ARROW)) { // A 
          this.posX -= this.speed;
          console.log('moving left');
        }
        if (keyIsDown(RIGHT_ARROW)) { // D 
          this.posX += this.speed;
          console.log("moving right")
        }
        //preventing basket from going off screen
        if (this.posX < 0) {
            this.posX = 0; 
        }else if (this.posX > (width - this.w)) {
            this.posX = (width - this.w); 
        }

      }

      checkCollision(fruit) {
        let closestX, closestY;
    
        if (fruit.x < this.posX) { // Fruit center is left of the basket
          closestX = this.posX;
        } else if (fruit.x > this.posX + this.w) { // Fruit center is right of the basket
          closestX = this.posX + this.w;
        } else { // Fruit center in the basket
          closestX = fruit.x;
        }
    
        if (fruit.y < this.posY) { // Fruit center is above the basket
          closestY = this.posY;
        } else if (fruit.y > this.posY + this.h) { // Fruit center is below the basket
          closestY = this.posY + this.h;
        } else { // Fruit center is in the basket
          closestY = fruit.y;
        }
    
        // distance between the fruit's center and the closest point
        let distance = dist(fruit.x, fruit.y, closestX, closestY);
    
        // If the distance is less than the fruit's radius they are colliding
        return distance < fruit.size / 2;
      }
   
    
    
      
         
}