let basket;
let tree;
let treeImage;

function preload() {
  treeImage = loadImage('images/tree.png');
}

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  basket = new Basket({});
  tree = new Tree({});
  
}




function draw() {
  background(135, 206, 250) 
  basket.render();
  basket.move();
  
  tree.renderTree();
  tree.renderFruit();
  tree.update(basket)

 
}


