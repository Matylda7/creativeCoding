let age;
const dob="01/01/2000";
 
let yob = dob.substring(6,10);
let yobNum = parseInt(yobString);
 
age = 2025 - parseInt(dob.substring(6,10));
 
let friends = ["Ciara","Mariam","Jessica","Rachel"];
 
 
for(let num=0; num<friends.length; num++){
    console.log(friends[num])
};
 
friends.splice(2,1, "David")
 
let myFriend = {name:"Ciara", age:20, eirCode:"No"};drive
