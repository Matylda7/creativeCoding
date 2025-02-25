class StackedBarchart {
    constructor(obj) {
        this.data = obj.data;
        this.xValue = obj.xValue;
        this.yValues = obj.yValues;
        this.chartHeight = obj.chartHeight || 300;
        this.chartWidth = obj.chartWidth || 500;
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
        this.axisTextColour = color(255);
        this.numTicks = 5;
        this.tickLength = 10;
        this.barColours = [color(255), color(25)];
        this.textFont = obj.textFont||"Roboto";
        this.title = obj.title || "Stacked Barchart";
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

        for (let i = 0; i < this.data.length; i++) {
            let xPos = (this.barWidth + this.gap) * i;

            push();
            translate(xPos, 0); // shift over the x according to where we want the bar(s) drawn            

            push();
            // two values in y axis, male and female
            // so loop twice
            // each iteration draw a rectangle and we'll give it a different colour, otherwise won't see them
            for (let j = 0; j < this.yValues.length; j++) {
                fill(this.barColours[j]);
                noStroke();

                rect(0, 0, this.barWidth, -this.data[i][this.yValues[j]] * this.scaler);
                translate(0, -this.data[i][this.yValues[j]] * this.scaler - 1);
            }

            pop();
            pop();
        }

        pop(); // Restores the drawing state after rendering the bars.
        pop(); // Restores the original drawing state after positioning the chart.
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
        push()
        translate(this.chartPosX, this.chartPosY)
        noFill();
        stroke(this.axisTickColour);
        strokeWeight(this.axisTickThickness)
        let tickIncrement = this.chartHeight / this.numTicks;
        for (let i = 0; i <= this.numTicks; i++) {
            line(0, -tickIncrement * i, -this.tickLength, -tickIncrement * i);
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
       
    }
}

