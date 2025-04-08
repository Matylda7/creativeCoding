let trees = [];

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  trees.push(new Tree({}));
  let dropTheFruit = false;

  setInterval(dropTrue(), 10000)
}




function draw() {
  background(100, 170, 250);  
  trees.forEach(tree => {
    tree.renderFruit();
    tree.renderTree(); 
    if(dropTheFruit == true){
      tree.dropFruit();
    }
  });
  
  
 
}
 
function dropTrue(){
  dropTheFruit = true
}

