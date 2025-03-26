class Fruit {
    constructor(obj){
        this.posX = obj.posX ?? random(0, width);
        this.posY = obj.posY ?? random(170,120);

        this.speed = obj.speed ?? random(0,1);
        this.size = obj.size ?? random(15,20);
    }

    render(){
        ellipse(this.posX,this.posY,this.size)

    }


}