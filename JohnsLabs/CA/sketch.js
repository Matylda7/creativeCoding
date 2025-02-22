let data;
let rawData = [];
let charts = [];

function preload(){
    data = loadTable('data/population.csv', 'csv', 'header')
}

function setup(){
    createCanvas(400,400);
    cleanData();
    noLoop();
    charts.push(new BarChart(rawData,50,450,(255,255,255),10,400,60));

}
function draw(){
    background(245,34,15);
    charts.forEach(chart => {
        chart.renderAxis();
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

}