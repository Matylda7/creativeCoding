let airfields = [];
let currentKey;

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);
   
    airfields.push(new Airfield({
        airfieldWidth: 300,
        airfieldHeight: 300,
    }));
    // airfields.push(new Airfield({
    //     airfieldPosX: 70,
    //     airfieldPosY: 70,
    //     airfieldWidth:100,
    //     airfieldHeight:100,
    // }));
   
}


function draw() {
    background(100, 170, 250);
    airfields.forEach(airfield => {
    airfield.renderAirfield();
    airfield.renderPlane();
    airfield.checkDist();
    airfield.movePlanes();
    //airfield.checkPos();

    });

}

function keyPressed(){
    
    // if(airfields[0].planes.forEach((plane,index) === currentKey)){
    //     console.log(index);
    // }

    // if(currentKey == airfields[0].planes[currentKey])
    // console.log(key);
    // console.log(currentKey);
    
     switch(key){
        case "0": currentKey = 0; break;
        case "1": currentKey = 1; break;
        case "2": currentKey = 2; break;
        case "3": currentKey = 3; break;
        case "4": currentKey = 4; break;
        case "5": currentKey = 5; break;
        case "6": currentKey = 6; break;
        case "7": currentKey = 7; break;
        case "8": currentKey = 8; break;
        case "9": currentKey = 9; break;

    }

    if(key === 'W'){
        airfields[0].planes[currentKey].increaseSpeed();
    }
    if(key === 'S'){
        airfields[0].planes[currentKey].decreaseSpeed();
    }
    if (key === 'LEFT_KEY'){
        airfields[0].planes[currentKey].turnLeft();
    }

    airfields[0].planes[currentKey].updateVel();
    console.log(currentKey);

}
