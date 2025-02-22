class BarChart {
    constructor(_data, _chartPosX, _chartPosY, _axisColour, _axisThickness, _chartHeight, _chartWidth){
        this.data = _data;
        this.chartPosX = _chartPosX;
        this.chartPosY = _chartPosY;
        this.chartHeight = _chartHeight;
        this.chartWidth = _chartWidth;
        this.axisColour = _axisColour;
        this.axisThickness = _axisThickness;
    }

    renderBars(){
        
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

    renderLables(){

    }

    renderTics(){
        
    }

}