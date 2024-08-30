//28 Feb 2024
//Iterations-Loop with break and Continue in JS

//for loop

// for (let i = 0; i <= 10 ; i++) {
//     const element = i;
//     if (element == 7){
//         console.log("7 is the lucky Number.")
//     }
//     console.log(element)
    
// }
//======================================><==========================
//Table 0 to 10
// for (let i = 1; i <= 10 ; i++) {
//    // console.log(`Outer loop value : ${i}`);
//     for (let j = 1; j <=10 ; j++) 
//     {
//         //console.log(`Inner loop value : ${j} Outer loop value is ${i}`)
//       console.log(i + '*' + j + '=' + i*j );
//     }
  
    
// }

//===================================><============================


let myArray = ["flash","batman","superman"]
//console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
  //  console.log(element);
    
}


//========================================><====================================
//Break & Continue

// let Array2 = [0,1,2,3,4,5,6,7,8,9,10]
// for (let index = 0; index < Array2.length; index++) {
//     const element = Array2[index];
//  console.log(element)    
// }
//======================One more way========================
// for (let index = 1; index <= 20; index++) {
//     const element = index;
//     console.log(element)
// }

//=====================One more way=========================

// for (let index = 1; index <= 20; index++){
//     if( index == 5){
//         console.log(`My favourite no. is ${index}`)
//         break
//     }
//     console.log(`Value of i is ${index}`)
    

// }

//==================================================
//Continue


for (let index = 1; index <= 20; index++){
    if( index == 5){
        console.log(`My favourite no. is ${index}`)
        continue //My condition is skipped means value of i is skipped
        //but due to i have made one more loop to detect favourite no is 5 which is printed

    }
    console.log(`Value of i is ${index}`)
    

}


