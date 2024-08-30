// 1 March 2024
//Reduce method 
//Accumulator concept

 //It is used in Shopping cart 
//Reduce method in JS


// const array1 = [1,2,3,4,5]

// const initialValue = 0 
// const sumwithInitial = array1.reduce(
//     (accumulator,currentValue) => accumulator + currentValue, initialValue
// )
// console.log(sumwithInitial)



// const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc,curr_Val) {
//     console.log(`acc is ${acc} and curr_Value is ${curr_Val}`)
//    return acc + curr_Val  //<==============OPeration
// }, 0) //<=============Accumulator initial value


// acc is 0 and curr_Value is 1
// acc is 1 and curr_Value is 2
// acc is 3 and curr_Value is 3
// 6

// console.log(myTotal) //===============> 6


//=======================>Writing the same code using Arrow function<===================================================

// const myTotal = myNums.reduce( (acc) => (acc , curr) => acc+curr , 0 ) 



// console.log(myTotal)
//========================================Exercise==================================
//Shopping Cart

const shoppingCart = [
    {
        itemName: "js",
        price: 2000,
    
    },
    {
        itemName: "python",
        price: 3000,

    },
    {
        itemName: "App dev",
        price: 6500,
    
    },
    {
        itemName: "web pentesting",
        price: 8799,
    }
]

const pricetoPay = shoppingCart.reduce((acc,item) => acc + item.price,0)

console.log(`Total price of all courses are Rs ${pricetoPay} only`)
