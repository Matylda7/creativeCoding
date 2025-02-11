let friend01 = {name:"David", age: 20, bowling:true};
let friend02 = {name:"Ciara", age: 20, bowling:true};
let friend03 = {name:"Mariam", age: 21, bowling:true};
let friend04 = {name:"Jessica", age: 19, bowling:false};
let friend05 = {name:"Rachel", age: 21, bowling:false};

let friends = [];
let friendAges = [];
let friendBowlingAges = [];

friends.push(friend01);
friends.push(friend02);
friends.push(friend03);
friends.push(friend04);
friends.push(friend05);

for (let index=0; index<5; index++){
    friendAges.push(friends[index].age)
}

for (let index=0; index<5; index++){
    if(friends[index].bowling == true){
     friendBowlingAges.push(friends[index].age)
    }
}




function calcAvg(arrayNums) {
    let value = 0; 

    for (let index=0; index<arrayNums.length; index++){
        value = value + arrayNums[index]

        return value/arrayNums.length;

    }
}

// for(let i=0; i<100; i++){
//     if(i%5==0){ console.log(i)}
// }




// function median(arrayNums){
//     if(arrayNums.length%2 == 0){

//         console.log((arrayNums.length/2) +1, arrayNums[(arrayNums.length/2) -1])
       
//         return (((arrayNums.length/2) +1) + ((arrayNums.length/2) -1))/2

//     } else {

//         return arrayNums[Math.floor(arrayNums.length/2)]

//     }
// }

function median(arrayNums){
    arrayNums.sort((a, b) => (a-b))

    if(arrayNums.length%2 == 0){

        let endNum = (arrayNums.length/2);
        let startNum = endNum -1;
       
        return (arrayNums[startNum] + arrayNums[endNum])/2
      
    } else {

        return arrayNums[Math.floor(arrayNums.length/2)]

    }
}

