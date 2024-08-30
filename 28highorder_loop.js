//29 Feb 2024
//High Order Loops


//Objects in Array
//[{},{},{}]

//for of loop
// const arr =[1,2,3,4,5] //iterators = variable

// for (const num1 of arr) { //object = arr //this is is not that object {}
// console.log(num1);
    
// }
//===============================New code===========================================
// const greetings = "hello bhai kaisa ha?"
// for (const greet of greetings) {
//     console.log(`Each character is ${greet}`)    
// }
//================================================================================
//Maps 
//Maps only advantage is it contains unique key pairs 

const map = new Map()
map.set('IN', "INDIA")
map.set('US', "UNITED STATE OF AMERICA")
map.set('FR', "FRANCE")
map.set('IN', "INDIA") //duplicate value will be revoked/ removed

//console.log(map); //varibale name
 
//for of loops in Map

for (const [key, value] of map) {  // IN = value & INDIA = key
    console.log(key,':-',value)
}

const myObject = {
    "game1": 'NFS',
    "game2": 'Spiderman',
    "game3": 'Assasian Creed'
}
// This below code wont work
// for (const [key,value ] of myObjectect) { //Objects are not iterator able
//     console.log(key, ":-" , value)
// }


//Maps are iteratable
