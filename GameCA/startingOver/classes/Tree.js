class Tree {
    constructor(obj){

        this.posX = obj.posX ?? width/2;
        this.posY = obj.posY ?? height-80;

        this.imgWidth = obj.imgWidth ?? 350;  
        this.imgHeight = obj.imgHeight ?? 500; 
        this.treeCenterY = this.posY - this.imgHeight / 2;//finding the center of the image for the y coordinate
       


        this.fruits = [];
        this.numFruit = obj.numFruit ?? 30;
        this.fallingFruit = -1; //index of currently falling fruit (-1 means no fruit are currently falling)
        this.nextFruit = 0;//index of next fruit to drop
        this.delay = 1000; //in miliseconds
        this.lastDropTime = -this.delay; //first drops immediately

        this.generateFruit();

    }

generateFruit() {

    for (let i = 0; i < this.numFruit; i++) {

        this.fruits.push(new Fruit({
            startX: this.posX + random((-this.imgWidth/2)+60,(this.imgWidth/2)-80),
            startY: this.treeCenterY + random(-this.imgHeight*0.31,this.imgHeight*0.2),            
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
        push();
        translate(fruit.startX, fruit.startY);
        fill(178, 34, 34)
          beginShape();
          vertex(13, 6.5);
          bezierVertex(8, 2.5, 4, 10.5, 6.5, 16);
          bezierVertex(6.5, 20, 20, 20, 20, 16);
          bezierVertex(22.5, 10.5, 18.5, 2.5, 13, 6.5);
          endShape(CLOSE);
          pop();

      }
  });
   
}
  
}