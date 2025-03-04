class Plane {

        constructor(){
            this.posX = random(0,500);
            this.posY = random(0,500);
            this.apWidth = 15;
            this.apHeight = 20;
            this.tail = 4;
            this.velX = random(-0.9,0.9);
            this.velY = random(-0.9,0.9);
        }

        renderPlane(){
            push()
            translate(this.posX,this.posY)
            let angle = atan2(this.velY,this.velX);
            // ellipse(0,0,10,10);
            rotate(angle)
            strokeWeight(1)
            beginShape()
            
                vertex(0,0);
                vertex(-this.tail,-this.apWidth/2)
                vertex(this.apHeight-this.tail,0)
                vertex(-this.tail,this.apWidth/2)
                
            endShape(CLOSE)
            pop()
        }

        move(){
            this.posX = this.posX+this.velX;
            this.posY = this.posY+this.velY;
            
        }

}