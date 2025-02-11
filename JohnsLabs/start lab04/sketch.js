let data;
let cleanedData = [];
let charts = [];

 
function preload(){
    data = loadTable('data/Combined.csv', 'csv', 'header')
    cleanData();    
}
 
function setup(){
    createCanvas(500, 500);
    angleMode(DEGREES);
    noLoop();
    cleanData();
    charts.push(new BarChart({
        data: cleanedData,
        xValue: "Age_Group",
        yValue: "Female",
}));}
 
function draw(){
    background(95,0,145);
    
    charts.forEach(chart => {
        chart.renderBars();
        chart.renderAxis();
        chart.renderLabels();
        chart.renderTicks();
    });

    // push();
    // translate(300,300);
    // rotate(-45)
    // fill(255,0,0);
    // stroke(0,0,0);
    // rect(0,0,100,100);
    // pop(); 

    // push();
    // translate(300,300);
    // rotate(30)
    // fill(0,255,0);
    // stroke(0,0,0);
    // rect(0, 0,100,100);
    // pop(); 




    // let femaleAges = [];

    //method 1 

    // for (let i=0; i<cleanedData.length; i++){
    //     // console.log(i);
    //     femaleAges.push(cleanedData[i].Female)
    //     console.log(femaleAges)
    // }

    //method 2   part 1

    // cleanedData.forEach(
    //     function(row){
    //         femaleAges.push(row.Female);
    //     }
        
    // )
    // console.log(femaleAges)

    //method 2   part 2 

    // cleanedData.forEach(
    //     row => {femaleAges.push(row.Female)}        
    // );
    // console.log(femaleAges)

    // method 3

    // let femaleAges = cleanedData.map(row => row.Female)
    // let filteredFemaleAges = femaleAges.filter(number => number > 3)

    // console.log(femaleAges);
    // console.log(filteredFemaleAges);

    let femaleScores = cleanedData.map(row => row.Female)
    let ageGroups = cleanedData.map(row => row.Age_Group)

    console.log(ageGroups);
    console.log(femaleScores);
}

// let friends = [];
// friends.push(new Friend("Siobhan",234));
// friends.push(new Friend("Casey", 567));
// console.log(friends)



function cleanData(){
    for (let index=0; index<data.rows.length; index++){
        cleanedData.push(data.rows[index].obj)
    }

    for (let index=0; index<cleanedData.length; index++){
        cleanedData[index].Female = parseInt(cleanedData[index].Female)
        cleanedData[index].Male = parseInt(cleanedData[index].Male)
        cleanedData[index].Total = parseInt(cleanedData[index].Total)
    }

}