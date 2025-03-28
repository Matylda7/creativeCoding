let trees = [];

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES)
    trees.push(new Tree({}));
    
}
   



function draw() {
    background(100, 170, 250);
  
    trees.forEach(tree => {
       
        tree.renderFruit();
        tree.renderTree();
    })




    

}


