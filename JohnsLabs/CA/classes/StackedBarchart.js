class StackedBarchart {
    constructor(_data, _xValue, _yValue,_yValue2, _chartHeight, _chartWidth, _barWidth, _margin, _axisThickness, _chartPosX, _chartPosY){
        this.data = _data;
        this.xValue = _xValue;
        this.yValue = _yValue;
        this.yValue2 = _yValue2;
        this.chartHeight = _chartHeight;
        this.chartWidth = _chartWidth;
        this.barWidth = _barWidth;
        this.margin = _margin;
        this.axisThickness = _axisThickness;
        this.axisTickThickness = 1;
        this.chartPosX = _chartPosX;
        this.chartPosY = _chartPosY;
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin*2))/(this.data.length-1);
        this.scaler = this.chartHeight/(max(this.data.map(row => row[this.yValue])));
        this.axisColour = color(255);
        this.axisTickColour = color(255);
        this.barColour = color(255);
        this.barColour2 = color(25);
        this.axisTextColour = color(255); 
        this.numTicks = 5;
        this.tickLength = 10;
        this.barColours = [color(255), color(25)];
    }

    renderBars(){

        let yValues = [this.yValue, this.yValue2];
        push()
            translate(this.chartPosX, this.chartPosY)
            push()
            translate(this.margin, 0)
            for(let i = 0; i<this.data.length; i++) {
                let xPos = i*(this.barWidth + this.gap);
                rect(0,this.barWidth, -this.data[i][this.yValue]*this.scaler);
                push();
                translate(xPos,0);
                push();
                
                
                //rect(xPos,0,this.barWidth, -this.data[i][this.yValue]*this.scaler);

                for(let j = 0; j<yValues.length; j++) {
                fill(this.barColours[j]);
                rect(0,this.barWidth, -this.data[i][yValues[j]]*this.scaler);
                translate(0,-this.data[i][yValues[j]]*this.scaler-1);
                }
                pop();
                pop();
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
            line (0,0, this.chartWidth,0)
        pop()
    }
    renderLabels(){
        push()
            translate(this.chartPosX, this.chartPosY)
           
            push()
            
            translate(this.margin, 0)
            for(let i = 0; i<this.data.length; i++) {
                let xPos = i*(this.barWidth + this.gap);
              
                fill(this.axisTextColour);
                noStroke();
                textAlign(LEFT,CENTER)
                textSize(8);

                push()
                    translate(xPos + (this.barWidth/2), 10)
                    rotate(45)
                    text(this.data[i][this.xValue],0,0);
                pop()
            
            }
            pop()

        pop()
    }
    renderTicks(){
        push()
            translate(this.chartPosX, this.chartPosY)
            noFill();
            stroke(this.axisTickColour);
            strokeWeight(this.axisTickThickness)
            let tickIncrement = this.chartHeight/this.numTicks;
            for (let i = 0; i <= this.numTicks; i++){
                line(0,-tickIncrement*i,-this.tickLength,-tickIncrement*i);
            }

        pop()
    }
}
    
    