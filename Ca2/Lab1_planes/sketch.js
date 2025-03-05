let airfields = [];

function setup(){
    createCanvas(500,500);
    angleMode(DEGREES);
    rectMode(CENTER)
    airfields.push(new Airfield({
        airfieldWidth:100,
        airfieldHeight:100,
    }));
    airfields.push(new Airfield({
        airfieldPosX: 70,
        airfieldPosY: 70,
        airfieldWidth:100,
        airfieldHeight:100,
    }));
}


function draw(){
    background(100,170,250);
    airfields.forEach(airfield => {
        airfield.renderAirfield();
        airfield.renderPlane();
        airfield.movePlanes();
        airfield.checkPlanePos();
    })
    

}