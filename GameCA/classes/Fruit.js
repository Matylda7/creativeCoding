class Fruit {
  constructor(obj) {
    // this.angle = random(0,360);

    this.posX = obj.posX ?? random(0, 500);
    this.posY = obj.posY ?? random(0, 500);

    this.speed = obj.speed ?? random(0, 1);
    this.size = obj.size ?? random(15, 20);

    this.gravity = obj.gravity ?? 0.1;
  }

  render() {
    ellipse(this.posX, this.posY, this.size);
  }

  move() {
    // Adding speed
    this.posY += this.speed;

    // Adding gravity
    this.speed += this.gravity;

    if (this.posY > height) { 
       
        this.speed *= -0.7; 
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
