// let a =  10
// const b = 20
// var c = 30

// console.log(a)
// console.log(b);
// console.log(c);


// {} <==== This is also known as Scopes

// {} <=============MOstly used in function & If else then it is known as Scope

if (true) {
    let a = 90
    const b = 70
    var c = 50
    console.log(a); //this will only work inside the if/else statement because it is in scope 

console.log(b); //If you try to print outside scope then it will give an error

console.log(c);
}

// console.log(a);
// console.log(b);  ///It is Global one
 console.log(c);