//24 Feb 2024

//Function with objects and array in JS
// function calculatePrice(...num1) { //Using spread operatot will return all the value in cart in form of Array
function calculatePrice(val1,val2, ...num1){ //it will show th o.p as 400 (array) only because rest of the number will be value (variable)
return num1
}

console.log(calculatePrice(200,300,400)) //here is issue you cant get all items
// ... is known as Rest OPerator and Spread Operator
//you have to use spreading

//yoU CAN also enter value of num1 num2
//like

//function calculatePrice(val1,val2, ...num1)


const user = {
    username: "rahul",
    price : 3000

}
function handleObject(anyobject){
    console.log(`Your Username is ${anyobject.username}  and the special price of the course for you is ${anyobject.price}`)
     
}
handleObject(user)  //call function & () <=== execute
