class PieChart {
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
        this.title = obj.title || "PieChart";
    }

   

    renderBars() {
        // Function to render the bars on the chart.

        let myNewArray = this.data.map(row => row[this.yValues[0]]);
         let total =0;
        myNewArray.forEach(item => total = total + item);
        
        push(); // Saves the current drawing.
        translate(this.chartPosX, this.chartPosY); // Translates the origin to the chart's position.

        push(); // Saves the drawing state again for a nested transformation.
        translate(this.margin, 0); // Adds margin to the left of the chart for positioning the bars.

        for (let i = 0; i < this.data.length; i++) {
            let xPos = (this.barWidth + this.gap) * i;

            fill(random(255),0,0);
		stroke(255);
		let start = 0;
		let end = ((myNewArray[i]/total)*360);
		

		arc(0,0,200,200,start, end, PIE);
		
		rotate(end);

           
        }

        pop(); // Restores the drawing state after rendering the bars.
        pop(); // Restores the original drawing state after positioning the chart.
    }


    renderAxis() {
       
    }
    renderLabels() {
        //they dont work
        push()
        translate(this.chartPosX, this.chartPosY)

        push()

         translate(this.margin, 0)
        for (let i = 0; i < this.data.length; i++) {
            let xPos = i * (this.barWidth);

            fill(this.axisTextColour);
            noStroke();
            textAlign(LEFT, CENTER);
            textFont(this.textFont);
            textSize(10);
            push();
            translate(xPos + (this.barWidth / 2), 10)
            text(this.data[i][this.xValue], 0, 0);
            pop();

        pop()

        pop()
    }
}
    renderTicks(){
        
    }
    

    renderTitle(){
        //doesn't render properly
    //     push()
    //         translate(this.chartPosX,this.chartPosY);
    //         textFont(this.textFont);
    //         textAlign(CENTER);
    //         fill(this.axisTextColour);
    //         textSize(30);
    //         text(this.title,-this.chartWidth/2,-this.chartHeight-15);
    //    pop()
    }
}