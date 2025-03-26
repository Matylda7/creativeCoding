let fruits = [];
let numOfFruit = 25;

function setup() {
    createCanvas(500, 500);

    
}
   


function draw() {
    background(100, 170, 250);
   for (let i = 0; i < numOfFruit; i++) {
        fruits.push(new Fruit({}));
        fruits[i].render();
        fruits[i].move();
    }
   
    

}


