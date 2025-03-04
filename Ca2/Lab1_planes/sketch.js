let planes = [];
let numPlanes = 50;

function setup(){
    createCanvas(500,500);
    for (i = 0; i < numPlanes; i++){
    planes.push(new Plane())
    }
    angleMode(DEGREES)
}


function draw(){
    background(0,0,255);
    for (i = 0; i < numPlanes; i++){
    planes[i].renderPlane();
    planes[i].move();
    }
}