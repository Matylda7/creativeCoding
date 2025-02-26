//2x

class HorizontalBarchart {
    constructor(obj){
        this.data = obj.data;
        this.xValue = obj.xValue;
        this.yValue = obj.yValue;
        this.chartHeight = obj.chartHeight  || 300;
        this.chartWidth = obj.chartWidth || 500;
        this.barWidth = obj.barWidth || 10;
        this.margin = obj.margin  || 15;
        this.axisThickness = obj.axisThickness || 1;
        this.axisTickThickness = 1;
        this.chartPosX = obj.chartPosX || 550;
        this.chartPosY = obj.chartPosY || 650;
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin*2))/(this.data.length-1);
        this.scaler = this.chartHeight/(max(this.data.map(row => row[this.yValue])));
        
        this.axisColour = color(255);
        this.axisTickColour = color(255);
        this.barColour = color(255);
        this.axisTextColour = color(255); 
        this.numTicks = 5;
        this.tickLength = 10;
        this.textFont = obj.textFont||"Roboto";
        this.title = obj.title || "Horizontal Barchart";
        
    }

    renderBars(){
        push()
            translate(this.chartPosX, this.chartPosY)
            push()
            translate(0,-this.margin)
            for(let i = 0; i<this.data.length; i++) {
                let xPos = i*(this.barWidth + this.gap);
                noStroke();
                fill(this.barColour);
                
                rect(0,-xPos,this.data[i][this.yValue]*this.scaler,this.barWidth )
            }

            pop()
        pop()
    }
    renderAxis(){
        push()
            translate(this.chartPosX, this.chartPosY)
            noFill();
            stroke(this.axisColour);
            strokeWeight(this.axisThickness)
            line (0,0,0, -this.chartHeight)
            line (this.chartWidth,0,0,0)
        pop()
    }
    renderLabels(){
        push()
            translate(this.chartPosX, this.chartPosY)
           
            push()
            
            translate(0, -this.margin)
            for(let i = 0; i<this.data.length; i++) {
                let xPos = i*(this.barWidth + this.gap);
              
                fill(this.axisTextColour);
                noStroke();
                textAlign(RIGHT, CENTER);
                textFont(this.textFont);
                textSize(8);

                push()
                    translate(-10,-xPos + (this.barWidth/2))
                    rotate(50)
                    text(this.data[i][this.xValue],0,0);
                pop()
            
            }
            pop()

        pop()
    }
    renderTicks(){
        let total = max(this.data.map(m => m[this.yValue])) / this.numTicks;
        push()
            translate(this.chartPosX, this.chartPosY)
            noFill();

            strokeWeight(this.axisTickThickness)

            let tickIncrement = this.chartWidth/this.numTicks;
            for (let i = 0; i <= this.numTicks; i++){
                let sortedTotal = (total*i).toFixed(0)
                stroke(this.axisTickColour);
                line(tickIncrement*i,0,tickIncrement*i,this.tickLength,);
                fill(this.axisTextColour);
                noStroke();
                textAlign(LEFT, CENTER);
                textFont(this.textFont);
                textSize(8);
                text(sortedTotal,tickIncrement*i,this.tickLength+10)
                }
            
            // let tickIncrement = this.chartHeight/this.numTicks;
            // for (let i = 0; i <= this.numTicks; i++){
            //     line(tickIncrement*i,0,tickIncrement*i,this.tickLength);
            // }

        pop()
    }

    renderTitle(){
        push()
            translate(this.chartPosX,this.chartPosY);
            textFont(this.textFont);
            textAlign(CENTER);
            fill(this.axisTextColour);
            textSize(30);
            text(this.title,this.chartWidth/2,(-this.chartHeight*2)+50);
       
    }
}


