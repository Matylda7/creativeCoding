
let basket = new Basket({});
function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  
}




function draw() {
  background(100, 170, 250); 
  basket.render();
  basket.move();
  
 
}
 


