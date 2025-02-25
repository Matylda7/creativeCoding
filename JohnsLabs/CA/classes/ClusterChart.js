class ClusterChart {
    constructor(obj){
        this.data = obj.data;
        this.xValue = obj.xValue;
        this.yValues = obj.yValues;
        this.yValue = this.yValues[0];
        this.yValue2 = this.yValues[1];
        this.chartHeight = obj.chartHeight || 300;
        this.chartWidth = obj.chartWidth*2 || 500*2;
        this.barWidth = obj.barWidth || 10;
        this.margin = obj.margin || 15;
        this.axisThickness = obj.axisThickness || 1;
        this.axisTickThickness = 1;
        this.chartPosX = obj.chartPosX || 250;
        this.chartPosY = obj.chartPosY || 610;
        this.gap = (this.chartWidth - (this.data.length * (this.barWidth)) - (this.margin*2))/(this.data.length-1);
        this.scaler = this.chartHeight/(max(this.data.map(row => row[this.yValue])));
        this.axisColour = color(255);
        this.axisTickColour = color(255);
        this.barColour = color(255);
        this.barColour2 = color(25);
        this.axisTextColour = color(255); 
        this.numTicks = 5;
        this.tickLength = 10;
        this.textFont = obj.textFont||"Roboto";
        this.title = obj.title || "Cluster Barchart";
        this.total = this.data.map((row) => {
            let runningTotal = 0;
            for(let i=0; i<this.yValues.length; i++){
                runningTotal += row[this.yValues[i]];
            }
            console.log(runningTotal)
            return runningTotal
        })
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
                let xPos2 = i*(this.barWidth +this.gap)+this.barWidth;
                
                rect(xPos,0,this.barWidth, -this.data[i][this.yValue]*this.scaler);
                fill(this.barColour2);
                rect(xPos2,0,this.barWidth, -this.data[i][this.yValue2]*this.scaler)
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
        let total = max(this.data.map(m => m[this.yValue])) / this.numTicks;
        
        push()
            translate(this.chartPosX, this.chartPosY)
            noFill();
            
            strokeWeight(this.axisTickThickness)
            let tickIncrement = this.chartHeight/this.numTicks;
            for (let i = 0; i <= this.numTicks; i++){
                let sortedTotal = (total*i).toFixed(0)
                stroke(this.axisTickColour);
                line(0,-tickIncrement*i,-this.tickLength,-tickIncrement*i);
                fill(this.axisTextColour);
                noStroke();
                textAlign(LEFT, CENTER);
                textFont(this.textFont);
                textSize(8);
                text(sortedTotal,-this.tickLength-23,-tickIncrement*i)
                }
            

        pop()
    }

    renderTitle(){
        push()
            translate(this.chartPosX,this.chartPosY);
            textFont(this.textFont);
            textAlign(CENTER);
            fill(this.axisTextColour);
            textSize(25);
            text(this.title,this.chartWidth/2,-this.chartHeight-40);
       
    }
}
