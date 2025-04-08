class Basket {
    constructor(obj) {
        this.posX = obj.x ?? 100;
        this.posY = obj.y ?? 425;
        this.w = obj.w ?? 70;
        this.h = obj.h ?? 40;
        this.speed = obj.speed ?? 10;
      }

       render(){
        fill(139, 69, 19); 
        noStroke();
        rect(this.posX, this.posY, this.w, this.h, 5); //last parameter rounds corners
      }

      move() {
        if (keyIsDown(65)) { // A key
          this.posX -= this.speed;
          console.log('moving left');
        }
        if (keyIsDown(68)) { // D key
          this.posX += this.speed;
          console.log("moving right")
        }
        //preventing basket from going off screen
        if (this.posX < 0) {
            this.posX = 0; 
        }   
        if (this.posX > (width - this.w)) {
            this.posX = (width - this.w); 
        }

      }
    
    
}