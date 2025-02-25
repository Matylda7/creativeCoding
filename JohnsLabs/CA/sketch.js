// how to only select half of the rows in the csv file
//total maleFemale data 2011,Total,33835,31407,4588252
let data;
let rawData = [];
let rawData1 = [];
let charts = [];
let data1 = [];

function preload(){
    data = loadTable('data/Population.csv', 'csv', 'header')
    data1 = loadTable('data/maleFemale.csv', 'csv', 'header')
}

function setup(){
    createCanvas(900,900);
    cleanData();
    noLoop();
    //creating a BarChart object with these parameters and putting it in an array called charts
    charts.push(new BarChart(rawData, "County", "Population_number", 400, 400, 10, 15, 2, 50, 410));

    charts.push(new HorizontalBarchart(rawData, "County", "Population_number", 400, 400, 10, 15, 2, 500, 450));
    charts.push(new StackedBarchart(rawData1, "County", "Female_25","Female_25", 400, 400, 10, 15, 2, 50, 850));
charts.push(new ClusterChart(rawData1, "County", "Female_25","Male_25", 400, 400, 10, 15, 2, 450, 850));

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
    for (let i=0; i<data1.rows.length; i++){
        rawData1.push(data1.rows[i].obj)
    }

    //loops through the rawData array, takes the variables in the year and population_number column and changes them into integers
    for (let i=0; i<rawData.length; i++){
        rawData[i].Year = parseInt(rawData[i].Year)
        rawData[i].Population_number = parseInt(rawData[i].Population_number)
    }

    for (let i=0; i<rawData.length; i++){
        rawData[i].Year = parseInt(rawData[i].Year)
        rawData[i].Population_number = parseInt(rawData[i].Population_number)
    }

    for (let i=0; i<rawData1.length; i++){
        rawData1[i].Year = parseInt(rawData1[i].Year)
        rawData1[i].Population_number = parseInt(rawData1[i].Population_number)
        rawData1[i].Female_25 = parseInt(rawData1[i].Female_25)
        rawData1[i].Male_25 = parseInt(rawData1[i].Male_25)
    }

}