let data;
let rawData = [];

function preload(){
    data = loadTable('data/population.csv', 'csv', 'header')
}

function setup(){
    cleanData();

}
function draw(){
    
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