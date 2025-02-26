class LineChart{
    constructor(obj) {
        this.data = obj.data;
        this.data2 = obj.data2;
        this.xValue = obj.xValue;
        this.yValues = obj.yValues;
        this.chartHeight = obj.chartHeight || 300;
        this.chartWidth = obj.chartWidth*2 || 500*2;
        this.barWidth = obj.barWidth || 10;
        this.margin = obj.margin || 15;
        this.axisThickness = obj.axisThickness || 1;
        this.axisTickThickness = 1;
        this.chartPosX = obj.chartPosX || 460;
        this.chartPosY = obj.chartPosY || 610;
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin * 2)) / (this.data.length - 1);

        this.total = this.data.map((row) => {
            let runningTotal = 0;
            for(let i=0; i<this.yValues.length; i++){
                runningTotal += row[this.yValues[i]];
            }
            console.log(runningTotal)
            return runningTotal
        })

        this.scaler = this.chartHeight / (max(this.total));
        this.axisColour = color(255,120);
        this.axisTickColour = color(255,120);
        this.barColour = color(255);
        this.barColour2 = color(25);
        this.axisTextColour = color(255,230);
        this.numTicks = 5;
        this.tickLength = 10;
        this.barColours = [color(255), color(25)];
        this.textFont = obj.textFont||"Roboto";
        this.title = obj.title || "LineChart";
    }

    // renderBars(){

    //     let yValues = [this.yValue, this.yValue2];
    //     push()
    //         translate(this.chartPosX, this.chartPosY)
    //         push()
    //         translate(this.margin, 0)
    //         for(let i = 0; i<this.data.length; i++) {
    //             let xPos = i*(this.barWidth + this.gap);
    //             rect(xPos,this.barWidth, -this.data[i][this.yValue]*this.scaler);
    //             // rect(xPos,this.barWidth, -this.data[i][this.yValue2]*this.scaler);
    //             // push();
    //             // translate(xPos,0);
    //             push();


    //             //rect(xPos,0,this.barWidth, -this.data[i][this.yValue]*this.scaler);

    //             // for(let j = 0; j<yValues.length; j++) {
    //             // fill(this.barColours[j]);
    //             // rect(0,this.barWidth, -this.data[i][yValues[j]]*this.scaler);
    //             // translate(0,-this.data[i][yValues[j]]*this.scaler-1);
    //             // }
    //             // pop();
    //             pop();
    //         }

    //         pop()
    //     pop()
    // }

    renderBars() {
        
        // Function to render the bars on the chart.

        push(); // Saves the current drawing.
        translate(this.chartPosX, this.chartPosY); // Translates the origin to the chart's position.

        push(); // Saves the drawing state again for a nested transformation.
        translate(this.margin, 0); // Adds margin to the left of the chart for positioning the bars.

        beginShape();
        for (let i = 0; i < this.data.length; i++) {
            let xPos = (this.barWidth + this.gap) * i;
            stroke(255);
            noFill();
            vertex(xPos,-this.data[i][this.yValues[0]] * this.scaler);
            stroke(25);
            strokeWeight(1);
            ellipse(xPos,-this.data[i][this.yValues[0]] * this.scaler, 10, 10);
            
            }
            endShape();

           
            
            beginShape();
        for (let i = 0; i < this.data.length; i++) {
            let xPos = (this.barWidth + this.gap) * i;
            stroke(255);
            noFill();
            vertex(xPos,-this.data[i][this.yValues[1]] * this.scaler);
            stroke(255);
            strokeWeight(1);
            ellipse(xPos,-this.data[i][this.yValues] * this.scaler, 10, 10);
            
            }
            endShape();
        
            
        
        // for (let i = 0; i < this.data.length; i++) {
        //     let xPos = (this.barWidth + this.gap) * i;

        //     push();
        //     translate(xPos, 0); // shift over the x according to where we want the bar(s) drawn            

        //     push();
        //     // two values in y axis, male and female
        //     // so loop twice
        //     // each iteration draw a rectangle and we'll give it a different colour, otherwise won't see them
        //     beginShape();
        //     for (let j = 0; j < this.yValues.length; j++) {
        //         noFill();
        //         stroke(this.barColours[j]);
        //         vertex(0,-this.data[i][this.yValues[j]] * this.scaler);
        //         stroke(25);
        //     strokeWeight(1);
        //      ellipse(xPos,-this.data[i][this.yValues] * this.scaler, 10, 10);
        //         rect(0, 0, this.barWidth, -this.data[i][this.yValues[j]] * this.scaler);
        //         translate(0, -this.data[i][this.yValues[j]] * this.scaler - 1);
        //     }
        //     endShape();

        //     pop();
        //     pop();
        // }


    
            //push();
            // translate(xPos, 0); // shift over the x according to where we want the bar(s) drawn            

           // push();
            // two values in y axis, male and female
            // so loop twice
            // each iteration draw a rectangle and we'll give it a different colour, otherwise won't see them
            // for (let j = 0; j < this.yValues.length -1; j++) {
            //     let xPos2 = j*(this.barWidth + this.gap);
                
            //     fill(this.barColours[j]);
                

            //     // rect(0, 0, this.barWidth, -this.data[i][this.yValues[j]] * this.scaler);
            //     point(xPos2,-this.data[i][this.yValues[j]] * this.scaler)
                
                //line(xPos2,-this.data[i][this.yValues[j]] * this.scaler,xPos2+this.barWidth+this.gap,-this.data[i][this.yValues[j+1]] * this.scaler)
                //translate(0, -this.data[i][this.yValues[j]] * this.scaler - 1);
             
            //             beginShape();
            // for (let j = 0; j < this.yValues.length; j++) {
            //     let xPos = j * (this.barWidth + this.gap);
            //     let yVal = -this.data[i][this.yValues[j]] * this.scaler;
            //     stroke(255)
            //     vertex(xPos + this.barWidth/2, yVal);
            //     line(11,2,5,7)
            // }
            // endShape();

            pop();
            pop();
        

        // pop(); // Restores the drawing state after rendering the bars.
        // pop(); // Restores the original drawing state after positioning the chart.
    }


    renderAxis() {
        push()
        translate(this.chartPosX, this.chartPosY)
        noFill();
        stroke(this.axisColour);
        strokeWeight(this.axisThickness)
        line(0, 0, 0, -this.chartHeight)
        line(0, 0, this.chartWidth, 0)
        pop()
    }
    renderLabels() {
        push()
        translate(this.chartPosX, this.chartPosY)

        push()

        translate(this.margin, 0)
        for (let i = 0; i < this.data.length; i++) {
            let xPos = i * (this.barWidth + this.gap);

            fill(this.axisTextColour);
            noStroke();
            textAlign(LEFT, CENTER);
            textFont(this.textFont);
            textSize(10);

            push()
            translate(xPos + (this.barWidth / 2), 10)
            rotate(45)
            text(this.data[i][this.xValue], 0, 0);
            pop()

        }
        pop()

        pop()
    }
    renderTicks() {
        let total = max(this.total) / this.numTicks;
        push()
        translate(this.chartPosX, this.chartPosY)
        noFill();
        
        strokeWeight(this.axisTickThickness)
        let tickIncrement = this.chartHeight / this.numTicks;
        for (let i = 0; i <= this.numTicks; i++) {
            let sortedTotal = (total*i).toFixed(0)
            stroke(this.axisTickColour);
            line(0, -tickIncrement * i, -this.tickLength, -tickIncrement * i);
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
            text(this.title,this.chartWidth/2,-this.chartHeight-15);

        pop()
       
    }
}