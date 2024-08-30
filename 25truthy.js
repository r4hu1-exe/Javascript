//27 Feb 2024
//Truthy in JS
 
// const userEmail = "11111" //If given empty the statement will be printed as "Email is present"
// //If supplied string it will check the string and print the statement as "User doesn't have email"
// if (userEmail) {
//     console.log("Email is present") 

// }
// else {
//     console.log("User doesn't have email")
// }

//f====================>falsy value<============================Which is understood by vs code /js
//false
//  0
// -0 
// BigINT 0n
// ""  <===========EMpty string
// null
// NaN

// <====================>Truthy value<============================Which is understood by vs code /js

//true
// 1
// "0" <===========if 0 is in string then it is truthy
// 'false' <===========if false is in string then it is truthy
// " " <===========if space is in string then it is truthy
// [] <===========if array is in string then it is truthy
// {} <===========if object is in string then it is truthy
//function(){} <===========if function is in string then it is truthy //Even its empty
// 1n <===========if bigInt is in string then it is truthy

// if (userEmail.length == 5) {
//     console.log("Email is present") 

// }
// else{
//     console.log("User doesn't have appropriate email")
// }

//================================>Object<=================================

// const emptyObj = {
//     Admin: "True",
//     IsLoggedIn: "True"
// }
// if (Object.keys(emptyObj).length === 0){
//     console.log("This is empty object")
// }
// else{
//     console.log("This is not empty object")
// }
//If you comnpare false === 0 <===== it will print true 
//If you compare false == '0' <===== it will print true
//==================================================>New Topic<===================================
//And && operator
//OR || operator\

//Nullist coalescing Operator(??) <====This is used to check the value is null or not


//unll undefined


// let val1;
// //val1 = 5 ?? 10 //In this case 5 will be printed because it is not null
// //val1 = null ?? 10 //In this case 10 will be printed because it is null

// val1 = undefinded ?? 10 //In this case 10 will be printed because the other it is undefined
// console.log(val1);  //It will print 5 because it is not null


// let val1;
// val1 = null ?? 10 ?? 20 
// console.log(val1);  //It will print 10 because 12 is after 10




// //===========================>Ternary Operator<===================================================
// condition ? true : false

const IceTeaPrice = 100
IceTeaPrice <= 80 ? console.log("less then 80") : console.log("Greater then 80")  //It will print "Greater then 80" because it is not in block scope
