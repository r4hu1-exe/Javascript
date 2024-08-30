// 29 Feb 2024

//map & for each have different methods/properties you can use it like map.set , map.entries etc

//higher order function

// coding.forEach( function name (item){  //It is call back function so there will be no name of the function

// })
// const coding = ["js", "rb", "py", "java", "go"]
// coding.forEach(function (items){

//     console.log(items)
// })

// type coding. you see various method/property
//Call back function = give me the function


//===================================================You can also use arrow function=================================
//Arrow function

// const coding = ["js", "rb", "py", "java", "go"]

// coding.forEach( (items) => {  //In this also we wont use name of function because its call back function
//     console.log(items)
// })

///////////////New code=======================================================
// const coding = ["js", "rb", "py", "java", "go"]
// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// const coding = ["js", "rb", "py", "java", "go"]

// coding.forEach( (item, index , arr) => {  //for Each have different types of parameters such as index,array
//     console.log(item, index , arr)
// })

//========================================>for each loop in onjects <===============
//This are mostly used!!1
const myCoding = [
    {
        languageName: "javascript",
        langauageAge: "20 yrs",
        langauageFile : "js"
    },
    {
        languageName: "python",
        langauageAge: "10 yrs",
        langauageFile : "py"
    },
    { 
        languageName: "ruby",
        langauageAge: "7 yrs",
        langauageFile : "rb"
    }
]
myCoding.forEach((item) => {
    console.log(item.langauageFile) //you can call particular language key and values
})