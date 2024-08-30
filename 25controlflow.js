//27 FEB 2024
//Chpater: Control Flow
// const temperature = 29

// if (temperature <=  30) {
//     console.log("less then 30 degree")
//  }
//  else {
//     console.log("Greater then 31 degree")
//  }

//==========================================><============================================
// if (score > 100){
//     //const power = "fly"  //const is in block scope but var can be used from anywhere 
//         let power ="fly"   
//     console.log(`User power: ${power}`)
// }
// console.log("User has no POwer")
//++++=================><================================================================================

// const balance = 1000
// //if (balance > 500) console.log("test"),console.log("testdone"); //wrong way to write code
//  //It is also known as implict scope 
// //Here we haven't used {} scope but it is working because it is only one line of code

// if (balance < 500) {
//     console.log("less then 500")
// }
// else if (balance < 750)
// {
//     console.log("less then 750")

// }
// else {
//     console.log("less then 1200")
// }
  

//=========================================

const userLoggedIn = false
const debitCard = false
const LoggedInFromGoogle = true

if (userLoggedIn && debitCard) {  //You can use && to check the multiple condition
    console.log("You can make a purchase okay")
 }
if (userLoggedIn || LoggedInFromGoogle ) { //You can use || to check the multiple condition its an OR condition 
    console.log("You can make a purchase")
}
else{
    console.log("You cannot make a purchase you dont have a debit card or you are not logged in")
}

