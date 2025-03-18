class Airfield {
    constructor(obj) {
        this.numCrafts = obj.numCrafts ?? 10;
        this.airfieldWidth = obj.airfieldWidth ?? 500;
        this.airfieldHeight = obj.airfieldHeight ?? 500;
        this.airfieldPosX = obj.airfieldPosX ?? 100;
        this.airfieldPosY = obj.airfieldPosY ?? 100;
        this.crafts = [];
        this.generateCrafts();

    }

    renderAirfield() {
        push()
        translate(this.airfieldPosX, this.airfieldPosY);
        stroke(255, 0, 0);
        noFill();
        rect(0, 0, this.airfieldWidth, this.airfieldHeight);
        pop();
    }
    renderCraft() {
        push()
        translate(this.airfieldPosX, this.airfieldPosY);
        this.crafts.forEach( (craft, id) => craft.render(id));
        pop()
    }

    generateCrafts() {
        for (let i = 0; i < this.numCrafts; i++) {

            let num = random(0,1);
            if(num <0.5){
                this.crafts.push(new Helicopter({
                    posX: random(0, this.airfieldWidth),
                    posY: random(0, this.airfieldHeight)
                }) );
       
            }else{
            this.crafts.push(new Plane({
                posX: random(0, this.airfieldWidth),
                posY: random(0, this.airfieldHeight)
                }));
            }
        }
    }
    
    moveCrafts() {
        this.crafts.forEach(craft => {
            this.checkPos(craft)
            craft.move()


        });
    }


    checkPos(craft) {
        
        // if off right side of airfield
        if (craft.posX > this.airfieldWidth) {
            craft.posX = 0;
            craft.posY = map(craft.posY, 0, this.airfieldHeight, this.airfieldHeight, 0);
            // if off left side of airfield
        } else if (craft.posX < 0) {
            craft.posX = this.airfieldWidth;
            craft.posY = map(craft.posY, 0, this.airfieldHeight, this.airfieldHeight, 0);
        }
        // // if below airfield
        if (craft.posY > this.airfieldHeight) {
            craft.posY = 0;
            craft.posX = map(craft.posX, 0, this.airfieldWidth, this.airfieldWidth, 0);

            // if above airfield
        } else if (craft.posY < 0) {
            craft.posY = this.airfieldHeight;
            craft.posX = map(craft.posX, 0, this.airfieldWidth, this.airfieldWidth, 0);
        }
    }


    checkDist() {


        this.crafts.forEach(craft => { craft.alert = false });
        let count = 0;
        for (let i = 0; i < this.crafts.length; i++) {
            for (let j = i + 1; j < this.crafts.length; j++) {

                let craftA = this.crafts[i];
                let craftB = this.crafts[j];
                let dist = sqrt((sq(craftA.posX - craftB.posX)) + (sq(craftA.posY - craftB.posY)));
                
                if (dist < 20) {
                    craftA.alert = true;
                    craftB.alert = true;
                }
               // console.log(dist);
                count++;
            }

        }

    }


}