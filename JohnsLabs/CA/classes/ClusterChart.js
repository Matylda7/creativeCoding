class ClusterChart {
    constructor(_data, _xValue, _yValue, _chartHeight, _chartWidth, _barWidth, _margin, _axisThickness, _chartPosX, _chartPosY){
        this.data = _data;
        this.xValue = _xValue;
        this.yValue = _yValue;
        this.chartHeight = _chartHeight;
        this.chartWidth = _chartWidth;
        this.barWidth = _barWidth;
        this.margin = _margin;
        this.axisThickness = _axisThickness;
        this.axisTickThickness = 1;
        this.chartPosX = _chartPosX;
        this.chartPosY = _chartPosY;
        this.gap = (this.chartWidth - (this.data.length * this.barWidth*yValues.length) - (this.margin*2))/(this.data.length-1);
        this.scaler = this.chartHeight/(max(rawData.map(row => row[this.yValue])));
        this.axisColour = color(255);
        this.axisTickColour = color(255);
        this.barColour = color(255);
        this.axisTextColour = color(255); 
        this.numTicks = 5;
        this.tickLength = 10;
    }

    renderBars(){
        push()
            translate(this.chartPosX, this.chartPosY)
            push()
            translate(this.margin, 0)
            for(let i = 0; i<this.data.length; i++) {
                let xPos = i*(this.barWidth + this.gap);
                fill(this.barColour);
                
                rect(xPos,0,this.barWidth, -this.data[i][this.yValue]*this.scaler)
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
