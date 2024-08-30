//25 FEB 2024

//Chapter; Scope level and mini hoisting

//============================>Nested Scope/Function<======================================================

// function one(){
//     const username = "rahul"
//     function two() {
//      const website = "youtube"
//      console.log(username)  //You can ask/take username from one but you cant give anything to one(icecream)
//      console.log(website)
//     }
//     // console.log(website)  <============Not executed
//       two()  
// //Icecream eg. two can take from one but one cant take from two
// }

// one()  //If you haven't given this to this two username & website will not be printed 

//Whether you ask anything from one or ot then also you have to execute the one else two wont work because two is child of one



//=========================>Same situation in if/else program<===========================


if (true) {  //Father
 const username = "rahul"
 if (username === "rahul"){ //Child
const website = "youtube"   //Child
//console.log(`Your usename is ${username} and website name is ${website}`)  //It is in block scope it will execute

 }   
//console.log(username + website) //it wont execute because it is out of scope

}
// console.log(username + website) //It also wont execute out of scope

//=====================================>Interesting<====================================

//This is 2 methods to make functions
//Methid 1
function addone(num) {
    return num + 5
}

console.log(addone(5))
//Method 2
const addTwo = function(num2){ //addTwo is variable it is also can be used as Function
return num2 +2 

}
console.log(addTwo(10))
