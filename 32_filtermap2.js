// 1 March 2024
//Filter different method

//Using Map method=-===================
const myNums = [ 1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map((num) => { return num + 10})



//Chaining Method =======================><
//Using any method more then any times
const newNums = myNums
                 .map((num) => num * 10)

                 .map( (num) => num - 50 )
                 //    //Output we will get : [
//   -40, -30, -20, -10,  0,
//   10,  20,  30,  40, 50
// ]

                 .filter ( (num) => num >= 0)

          //Output:       //  [ 0, 10, 20, 30, 40, 50 ]
//sequence wise the condition will be followed  first num is * with 10 & then -50
                 console.log(newNums); //You can use return or console.log


