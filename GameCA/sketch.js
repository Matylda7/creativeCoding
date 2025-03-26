let fruits = [];

function setup() {
    createCanvas(500, 500);

    fruits.push(new Fruit({}));
    
}
   


function draw() {
    background(100, 170, 250);
   
    fruits[0].render();



}