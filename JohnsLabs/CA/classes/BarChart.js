//add default values
//add 2011 data and make second bar chart
//add comments

class BarChart {
    constructor(obj){
        this.data = obj.data;
        this.xValue = obj.xValue;
        this.yValue = obj.yValue;
        this.chartHeight = obj.chartHeight || 300;
        this.chartWidth = obj.chartWidth || 500;
        this.barWidth = obj.barWidth || 10;
        this.margin = obj.margin || 15;
        this.axisThickness = obj.axisThickness || 1;
        this.axisTickThickness = 1;
        this.chartPosX = obj.chartPosX || 460;
        this.chartPosY = obj.chartPosY || 610;
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin*2))/(this.data.length-1);
        this.scaler = this.chartHeight/(max(this.data.map(row => row[this.yValue])));
        this.axisColour = color(255,120);
        this.axisTickColour = color(255,120);
        this.barColour = color(255);
        this.axisTextColour =color(255,230);
        this.numTicks = 5;
        this.tickLength = 10;

        this.textFont = obj.textFont||"Roboto";
        this.title = obj.title || "BarChart";
        this.titleYPos = obj.titleYPos ||this.chartHeight;
        
    }

    renderBars(){
        push()
            translate(this.chartPosX, this.chartPosY)
            push()
            translate(this.margin, 0)
            for(let i = 0; i<this.data.length; i++) {
                let xPos = i*(this.barWidth + this.gap);
                noStroke();
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
                textAlign(LEFT,CENTER);
                textFont(this.textFont);
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
    renderTitle(){
        push()
            translate(this.chartPosX,this.chartPosY);
            textFont(this.textFont);
            textAlign(CENTER);
            fill(this.axisTextColour);
            textSize(30);
            text(this.title,this.chartWidth/2,-this.chartHeight-15);
        pop();
       
    }
}


