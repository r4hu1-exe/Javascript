//28 Feb 2024
//Chapter: While and do-while loop
 //=====================WHile loop===================================
// let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 1
// }
//==============================================================
// let myArray = ["flash","batman","superman"]
// let arr = 0
// while (arr < myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
    
    
// }

//============================do-WHile loop=================================================


let score = 1
do {
    console.log(`Score is ${score}`); //score 1 gets execute
                    //after that condition is being seen if the condition is satisfied or not
     score++            //we have give increment to satisfy the condition 
} while (score <= 10);

//In this case the work is done before and condition is seen after that
//if i put 11 then also code wont show any error 
//because the condition is in last 
//hence i have given 11 as score the 11 will be printed instead of giving error
//Ex of udhar