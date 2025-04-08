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
    // Future: this.rotationAngle = 0; this.rotationSpeed = random(-0.1, 0.1);
  }

  fall() {
    //start falling if not falling already
  if(!this.falling){
    this.falling = true;
    this.speed = 0; //resetting speed at start of fall
    this.x = this.startX;
    this.y = this.startY;
  }
}
move(){
  if(this.falling){
    this.speed += this.gravity;
    this.y += this.speed;
  }
}
reset() {
  this.falling = false;
  this.x = this.startX;
  this.y = this.startY;
  this.speed = 0;
}

isOffScreen() {
  return this.y > height + this.size / 2; // Check if below screen
}


render() {
  // Only draw if falling 
  if (this.falling) {
    fill(255, 0, 0); 
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }
}
}


//steps to do

//make balls spawn in a circle (make it so that they are always within a radius from the center)
// to make circle do: x = radius * cos(angle), y = radius * sin(angle)

//to do timing count in 5 seconds, each apple has a random num from 1-5, so that they fall in a random pattern, one apple falls at a time.

// first level do 3 apples as a practice round

//reference
//https://editor.p5js.org/Tong/sketches/ryH4jK2A

//read
//forces of nature
//https://natureofcode.com/forces/

//drawing
// beginShape();
// // Apple outline using a set of vertex points
// vertex(0, 0); // top center
// bezierVertex(100, -70, 150, 170, 0, 150); // top-right curve
// bezierVertex(-150, 170, -100, -70, 0,0); // right curve
