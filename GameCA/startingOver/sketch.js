let basket;
let trees = [];
let treeImage;
let backgroundImage;
let fallingFruit = null; // Track the currently falling fruit across all trees


//game mechanics
let caught = 0;
let missed = 0;
let gameOver = false;
let gameWon = false;
let maxMissed = 5;
let catchTarget = 10;

function preload() {
  //preload makes sure the images are good to go before they are used, prevents issues 
  backgroundImage = loadImage('images/background.avif');
  treeImage = loadImage('images/tree.png');
}

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  basket = new Basket({});

  //making 3 trees spanning across the canvas
  trees.push( new Tree({posX: width * 1/4}));
  trees.push( new Tree({posX: width * 2/4}));
  trees.push( new Tree({posX: width * 3/4}));
  
}




function draw() {
  background(135, 206, 250);
  //main green grass
  fill(153, 204, 51); 
  rect(0, height / 2, width, height / 2);
  //darker shadow patch
  fill(130, 180, 50);
  beginShape();
  vertex(0, 300);      
  vertex(100, 350);    
  vertex(250, 330);    
  vertex(400, 370);   
  vertex(420, 400);  
  vertex(350, 500);  
  vertex(0, 500);      
  endShape(CLOSE);    
  //little grass left
  fill(107, 142, 35);
  beginShape();
  vertex(0, 420);    
  vertex(10, 450);
  vertex(30, 440);    
  vertex(40, 450);
  vertex(100, 430);   
  vertex(100, 450);
  vertex(120, 430);
  vertex(130, 450);
  vertex(0, 500);
  endShape(CLOSE);
//little grass right
  fill(107, 142, 35);
  beginShape();
  vertex(500, 420);     
  vertex(490, 450);
  vertex(470, 440);     
  vertex(460, 450);
  vertex(400, 430);     
  vertex(400, 450);
  vertex(380, 430);     
  vertex(370, 450);
  vertex(500, 500); 
  endShape(CLOSE);
  
  fill(218, 165, 32); 
  rect(0, height* 9/ 10, width, height / 2);
 

  basket.render();
  basket.move();
  
  trees.forEach(tree => {
    tree.renderTree();
    tree.renderFruit();
    
  });

   // Handle the single falling fruit
   
   //if there is a fruit currently falling, draw it and make it move
   if (fallingFruit) {
    fallingFruit.render();
    fallingFruit.move();
    
//if it hits the basket add a point and reset that fruit
    if (basket.checkCollision(fallingFruit)) {
      console.log("Caught!");
      caught++;
      fallingFruit.reset();
      fallingFruit = null;
      //if player catches the amount of fruit specified, the game is finished
      if (caught >= catchTarget) {
        gameWon = true;
      }
      //if the player misses add a miss point and reset that fruit
    } else if (fallingFruit.isOffScreen()) {
      console.log("Missed!");
      missed++;
      fallingFruit.reset();
      fallingFruit = null;
      //if the player misses the maxMissed number of fruit, they lose, game over
      if (missed >= maxMissed) {
        gameOver = true;
      }
    }
  } else {
    // If no fruit is falling and the game isnt lost or won, check if any tree wants to drop one
    if (!gameOver && !gameWon) { 
    while (true) { // Loop until a fruit is dropped
      let tree = trees[floor(random(trees.length))];//choosing random tree from array
      //if no fruit is falling at the moment and the time between how long the program has been running and when the last fruit was dropped is more than the delay between falling fruit 
      //if tree.lastDrop has a value that is not 0 use that, otherwise use 0 
      if (tree.fallingFruit === -1 && millis() - (tree.lastDropTime ?? 0) > tree.delay) {
        let fruitToDrop = tree.fruits[tree.nextFruit];
        fruitToDrop.fall();
        fallingFruit = fruitToDrop;
        //give it a time stamp of when it dropped
        tree.lastDropTime = millis();
        //this chooses the next fruit to fall the next time this tree is chosen
        //using % here loops to the begining of the array if we reached the end
        tree.nextFruit = (tree.nextFruit + 1) % tree.numFruit;
        //leaves the while loop since a tree has been found and a fruit has dropped
        break;
      }
  }}
}
// Display counters
textSize(20);
fill(0);
text("Caught: " + caught, 10, 30);
text("Missed: " + missed, 10, 60);

// Game over or game won messages
if (gameOver) {
  textSize(30);
  fill(255, 255,255);
  text("Game Over!", width / 2 - 80, height / 2);
} else if (gameWon) {
  textSize(30);
  fill(0, 255, 0);
  text("Well Done!", width / 2 - 80, height / 2);
}
}


