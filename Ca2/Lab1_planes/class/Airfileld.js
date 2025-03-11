class Airfield {
    constructor(obj) {
        this.numPlanes = obj.numPlanes ?? 3;
        this.airfieldWidth = obj.airfieldWidth ?? 300;
        this.airfieldHeight = obj.airfieldHeight ?? 300;
        this.airfieldPosX = obj.airfieldPosX ?? 100;
        this.airfieldPosY = obj.airfieldPosY ?? 100;
        this.planes = [];
        this.generatePlanes();

    }

    renderAirfield() {
        push()
        translate(this.airfieldPosX, this.airfieldPosY);
        stroke(255, 0, 0);
        noFill();
        rect(0, 0, this.airfieldWidth, this.airfieldHeight);
        pop();
    }
    renderPlane() {
        push()
        translate(this.airfieldPosX, this.airfieldPosY);
        this.planes.forEach( (plane, index) => plane.render(index));
        pop()
    }

    generatePlanes() {
        for (let i = 0; i < this.numPlanes; i++) {
            this.planes.push(new Plane({
                posX: random(0, this.airfieldWidth),
                posY: random(0, this.airfieldHeight)
            }));
        }
    }
    movePlanes() {
        this.planes.forEach(plane => {
            this.checkPos(plane)
            plane.move()


        });
    }


    checkPos(plane) {
        
        // if off right side of airfield
        if (plane.posX > this.airfieldWidth) {
            plane.posX = 0;
            plane.posY = map(plane.posY, 0, this.airfieldHeight, this.airfieldHeight, 0);
            // if off left side of airfield
        } else if (plane.posX < 0) {
            plane.posX = this.airfieldWidth;
            plane.posY = map(plane.posY, 0, this.airfieldHeight, this.airfieldHeight, 0);
        }
        // // if below airfield
        if (plane.posY > this.airfieldHeight) {
            plane.posY = 0;
            plane.posX = map(plane.posX, 0, this.airfieldWidth, this.airfieldWidth, 0);

            // if above airfield
        } else if (plane.posY < 0) {
            plane.posY = this.airfieldHeight;
            plane.posX = map(plane.posX, 0, this.airfieldWidth, this.airfieldWidth, 0);
        }
    }


    checkDist() {


        this.planes.forEach(plane => { plane.alert = false });
        let count = 0;
        for (let i = 0; i < this.planes.length; i++) {
            for (let j = i + 1; j < this.planes.length; j++) {

                let planeA = this.planes[i];
                let planeB = this.planes[j];
                let dist = sqrt((sq(planeA.posX - planeB.posX)) + (sq(planeA.posY - planeB.posY)));
                
                if (dist < 20) {
                    planeA.alert = true;
                    planeB.alert = true;
                }
               // console.log(dist);
                count++;
            }

        }

    }


}