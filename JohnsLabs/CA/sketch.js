// how to only select half of the rows in the csv file

let data;
let rawData = [];
let charts = [];

function preload(){
    data = loadTable('data/Population.csv', 'csv', 'header')
}

function setup(){
    createCanvas(900,900);
    cleanData();
    noLoop();
    //creating a BarChart object with these parameters and putting it in an array called charts
    charts.push(new BarChart(rawData, "County", "Population_number", 400, 400, 10, 15, 2, 50, 410));

    charts.push(new HorizontalBarchart(rawData, "County", "Population_number", 400, 400, 10, 15, 2, 500, 450));
    charts.push(new StackedBarchart(rawData, "County", "Population_number","Year", 400, 400, 10, 15, 2, 50, 850));
    charts.push(new ClusterChart(rawData, "County", "Population_number","Year", 400, 400, 10, 15, 2, 50, 850));

}
function draw(){
    background(245,34,15);
    //takes each barchart in the charts array and renders it piece by piece on the canvas
    charts.forEach(chart => {
        chart.renderBars();
        chart.renderAxis();
        chart.renderLabels();
        chart.renderTicks();
    });
}

function cleanData(){
    //loops through each row in the data, takes out the object and puts it into the rawData array
    for (let i=0; i<data.rows.length; i++){
        rawData.push(data.rows[i].obj)
    }

    //loops through the rawData array, takes the variables in the year and population_number column and changes them into integers
    for (let i=0; i<rawData.length; i++){
        rawData[i].Year = parseInt(rawData[i].Year)
        rawData[i].Population_number = parseInt(rawData[i].Population_number)
    }

    for (let i=0; i<rawData.length; i++){
        rawData[i].Year = parseInt(rawData[i].Year)
        rawData[i].Population_number = parseInt(rawData[i].Population_number)
        // rawData[i].Female_25 = parseInt(rawData[i].Female_25)
        // rawData[i].Male_25 = parseInt(rawData[i].Male_25)
    }

}