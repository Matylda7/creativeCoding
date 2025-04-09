class Fruit {
    constructor(obj) {
      this.startX = obj.startX ?? random(width);
      this.startY = obj.startY ?? random(height);
      this.x = this.startX;
      this.y = this.startY;
  
      this.speed = obj.speed ?? 0;
      this.size = obj.size ?? random(15, 20);
  
      this.gravity = obj.gravity ?? 0.1;
      this.falling = false;
      this.rotationAngle = random(0,360);
      this.rotationSpeed = 1;
    }
  
    fall() {
      //tells the fruit to start falling and makes sure its at the right position
    if(!this.falling){
      this.falling = true;
      this.speed = 0; //resetting speed at start of fall
      this.x = this.startX;
      this.y = this.startY;
    }
  }
  //makes the fruit continuously fall (like plane update pos method)
  move(){
    if(this.falling){
      this.speed += this.gravity;
      this.y += this.speed;
      this.rotationAngle += this.rotationSpeed;
    }
  }
  //instead of removing fruit from the array once they have fallen, they are re used and therefore must be reset
  reset() {
    this.falling = false;
    this.x = this.startX;
    this.y = this.startY;
    this.speed = 0;
    this.rotationAngle = 0;
  }
  
  isOffScreen() {
    return this.y > height + this.size / 2; // Check if below screen
  }
  
  
  render() {
    // Only draw if falling
    if (this.falling) {
      push();
      translate(this.x, this.y); // Use this.x and this.y for translation
      rotate(this.rotationAngle);
  
      fill(139, 0, 0);
      beginShape();
      vertex(20, 10);
      bezierVertex(12, 4, 6, 16, 10, 24);
      bezierVertex(10, 30, 30, 30, 30, 24);
      bezierVertex(34, 16, 28, 4, 20, 10);
      endShape(CLOSE);
      pop();
    }
  }
  }

//reference
//https://editor.p5js.org/Tong/sketches/ryH4jK2A

//read
//forces of nature
//https://natureofcode.com/forces/
