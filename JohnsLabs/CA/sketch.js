
//total maleFemale data 2011,Total,33835,31407,4588252
let data;
let rawData = [];
let rawData1 = [];
let charts = [];
let data1 = [];
let font;

function preload() {
    data = loadTable('data/Population.csv', 'csv', 'header')
    data1 = loadTable('data/maleFemale.csv', 'csv', 'header')
    font = loadFont('font/Roboto/Roboto-VariableFOnt_wdth,wght.ttf');
}

function setup() {
    createCanvas(4000, 4000);
    cleanData();
    angleMode(DEGREES);
    noLoop();
    //creating a BarChart object with these parameters and putting it in an array called charts

    charts.push(new ClusterChart({ data: rawData1, xValue: "County", yValues: ["Female_Aged_25"],  title: "2011 Population of Females in different counties" }));
    charts.push(new PieChart({ data: rawData1, xValue: "County", yValues: ["Female_Aged_25", "Male_Aged_25"],chartPosX:1900,chartPosY: 500, textFont: "Roboto" }));
    charts.push(new HorizontalBarchart({ data: rawData, xValue: "County",chartPosY: 1500, yValue: "Population_number"}));
    charts.push(new StackedBarchart({ data: rawData1, xValue: "County", yValues: ["Female_Aged_25", "Male_Aged_25"], chartPosY: 2200,title: "2011 Population in different counties in Ireland"}));
    charts.push(new LineChart({ data: rawData1, data2: rawData, xValue: "County", yValues: ["Male_Aged_25", "Female_Aged_25"], chartPosY: 2800, title: "2011 Population of Females and males in different counties in Ireland" }));
    charts.push(new ClusterChart({ data: rawData1, xValue: "County", yValues: ["Female_Aged_25", "Male_Aged_25"],chartPosY: 3500, title: "2011 Population of Females and males in different counties in Ireland" }));

}
function draw() {
    background(245, 34, 15);
    //takes each barchart in the charts array and renders it piece by piece on the canvas
    charts.forEach(chart => {
        chart.renderBars();
        chart.renderAxis();
        chart.renderLabels();
        chart.renderTicks();
        chart.renderTitle();
    });
}

function cleanData() {
    //loops through each row in the data, takes out the object and puts it into the rawData array
    for (let i = 0; i < data.rows.length; i++) {
        rawData.push(data.rows[i].obj)
    }
    for (let i = 0; i < data1.rows.length; i++) {
        rawData1.push(data1.rows[i].obj)
    }

    //loops through the rawData array, takes the variables in the year and population_number column and changes them into integers
    for (let i = 0; i < rawData.length; i++) {
        rawData[i].Year = parseInt(rawData[i].Year)
        rawData[i].Population_number = parseInt(rawData[i].Population_number)
    }

    for (let i = 0; i < rawData.length; i++) {
        rawData[i].Year = parseInt(rawData[i].Year)
        rawData[i].Population_number = parseInt(rawData[i].Population_number)
    }

    for (let i = 0; i < rawData1.length; i++) {
        rawData1[i].Year = parseInt(rawData1[i].Year)
        rawData1[i].Population_number = parseInt(rawData1[i].Population_number)
        rawData1[i].Female_Aged_25 = parseInt(rawData1[i].Female_Aged_25)
        rawData1[i].Male_Aged_25 = parseInt(rawData1[i].Male_Aged_25)
    }

}