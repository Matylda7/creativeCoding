class Airfield{
    constructor(obj){
        this.numPlanes = obj.numPlanes ?? 5;
        this.airfieldWidth = obj.airfieldWidth ?? 300;
        this.airfieldHeight = obj.airfieldHeight ?? 300;
        this.airfieldPosX = obj.airfieldPosX ?? 250;
        this.airfieldPosY = obj.airfieldPosY ?? 250;
        this.planes = [];
        this.generatePlanes();
        

    }

    renderAirfield(){
        push()
        translate(this.airfieldPosX, this.airfieldPosY); 
        stroke(255,0,0);
        noFill();
        rect(0,0,this.airfieldWidth, this.airfieldHeight);
        pop();
    }
    renderPlane(){
        push()
        translate(this.airfieldPosX,this.airfieldPosY);
        this.planes.forEach(plane => plane.render());
        pop()
    }

    generatePlanes(){
        for (let i = 0; i < this.numPlanes; i++){
            this.planes.push(new Plane({
                posX:random (-this.airfieldWidth/2, this.airfieldWidth/2),
                posY:random (-this.airfieldHeight/2, this.airfieldHeight/2)
            }));
        }
    }
    movePlanes(){
        this.planes.forEach(plane => {
            plane.move()

        });
    }
    checkPlanePos(){
        push()
        translate(this.airfieldPosX,this.airfieldPosY);
        this.planes.forEach(plane => plane.checkPos(this.airfieldWidth, this.airfieldHeight));
        pop()
    }


}