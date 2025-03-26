class Fruit {
    constructor(obj){
        this.posX = obj.posX ?? random(0, width);
        this.posY = obj.posY ?? random(250,120);

        this.speed = obj.speed ?? random(0,1);
        this.size = obj.size ?? random(15,20);

        this.gravity = obj.gravity ?? 0.1
    }

    render(){
        ellipse(this.posX,this.posY,this.size)

    }

    move(){
        //adding speed
        this.posY = this.posY + this.speed;

        //adding gravity
        this.speed = this.speed + this.gravity;
        
        if (this.posY > height) { 
            this.speed = this.speed * -0.3;  
          } 

    }


}
//reference
//https://editor.p5js.org/Tong/sketches/ryH4jK2A