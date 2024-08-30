//24 Feb 2024

//Chapter: Function and parameter in JS



// ()  <===============This paranthesis is used to execute the program

// function kyNaamHa() {
//     console.log("R")
//     console.log("A")
//     console.log("H")
//     console.log("U")
//     console.log("L")
// }

// kyNaamHa()
// //KyNaamHa = Reference
// //() = Execution


//========================>Addition/Multiplication/subtraction of NUmbers<=====================================
//By using of functions



// function Calculator(no1,no2){
// console.log(no1 * no2)
// }

// Calculator(3,"5")
// Calculator(4 , "b")

//=======================Working COde ===========================================

// function Addition(no1 , no2){
//     var result = no1 + no2
//     return no1 + no2  
//     return result

//     //There is one more way to use return statmnt return no1 + no2
//       //This is main part of code without this code will not show results
// //Note: whatever you will write in after the return statement that will not execute & print
// //You have to write above the return statement
//     }

// const result = Addition(2,8)
// console.log("Results: " ,result)

//<========================================.,.,,,,,,,============================================================
//Using bacticks for printing
//function UseLoggedIn(Username = "raju bhai") //
function UserLoggedIn(Username){

    if(Username === undefined){
        console.log("Please Enter a Username")
        return 
    }
            return `${Username} just logged In`
       
}
console.log(UserLoggedIn("Heckur"))

//You can also give a default value if user not supplied anything 
//function UseLoggedIn(Username = "raju bhai")