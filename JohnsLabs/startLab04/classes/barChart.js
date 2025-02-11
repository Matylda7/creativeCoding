class BarChart {
    constructor(obj){
        this.data = obj.data;
        this.xValue = obj.xValue;
        this.yValue = obj.yValue;
        this.chartHeight = obj.chartHeight || 300;
        this.chartWidth = obj.chartWidth || 300;
        this.barWidth = obj.barWidth || 10;
        this.margin = obj.margin || 10;
        
        this.axisThickness = obj.axisThickness || 1;
        this.axisTickThickness || 1;
        this.chartPosX = obj.xPos || 50;
        this.chartPosY = obj.yPos || 350;

        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin*2))/(this.data.length-1);
        this.scaler = this.chartHeight/(max(cleanedData.map(row => row[this.yValue])));

        this.axisColour = color(255, 255, 255);
        this.axisTickColour = color(15, 255, 255);
        this.barColour = color((255, 255, 255));
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

            // push()
            // translate(this.margin, 0)
            // for(let i = 0; i<this.data.length; i++) {
            //     let yPos = i*(this.data[this.yValue][i].length);
            //     fill(this.barColour);
                
            //     rect(yPos,0,this.barWidth, -this.data[i][this.yValue]*this.scaler)
    
            //     fill(this.axisTextColour);
            //     noStroke();
            //     textAlign(LEFT,CENTER)
            //     textSize(8);

            //     push()
            //         translate(yPos + (this.barWidth/2), 10)
            //         rotate(60)
            //         text(this.data[i][this.xValue],0,0);
            //     pop()
            
            // }
            // pop()

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
                    rotate(60)
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

// render(){
//     push()
//         translate(this.chartPosX, this.chartPosY)
//         noFill();
//         stroke(this.axisColour);
//         strokeWeight(this.axisThickness)
//         line (0,0,0, -this.chartHeight)
//         line (0,0, this.chartWidth,0)

//         push()
//         translate(this.margin, 0)
//         for(let i = 0; i<this.data.length; i++) {
//             let xPos = i*(this.barWidth + this.gap);
//             fill(this.barColour);
            
//             rect(xPos,0,this.barWidth, -this.data[i][this.yValue]*this.scaler)

//             fill(this.axisTextColour);
//             noStroke();
//             textAlign(LEFT,CENTER)
//             textSize(8);

//             push()
//                 translate(xPos + (this.barWidth/2), 10)
//                 rotate(60)
//                 text(this.data[i][this.xValue],0,0);
//             pop()
        
//         }
//         pop()

//         push()
//         translate(this.margin, 0)
//         for(let i = 0; i<this.data.length; i++) {
//             let yPos = i*(this.data[this.yValue].length);
//             fill(this.barColour);
            
//             rect(yPos,0,this.barWidth, -this.data[i][this.yValue]*this.scaler)

//             fill(this.axisTextColour);
//             noStroke();
//             textAlign(LEFT,CENTER)
//             textSize(8);

//             push()
//                 translate(yPos + (this.barWidth/2), 10)
//                 rotate(60)
//                 text(this.data[i][this.xValue],0,0);
//             pop()
        
//         }
//         pop()

//     pop()
// }


