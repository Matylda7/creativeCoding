let fruits = [];
let numOfFruit = 25;
let posAppleArea;

function setup() {
    createCanvas(500, 500);

    for (let i = 0; i < numOfFruit; i++) {
        fruits.push(new Fruit({}));
        
       // fruits[i].move();
       console.log(fruits.length)
    }
    posAppleArea = new Tree({});
    
}
   



function draw() {
    background(100, 170, 250);
  
   for (let i = 0; i < fruits.length; i++) {
        fruits[i].render();
    }

    posAppleArea.render();


    

}


