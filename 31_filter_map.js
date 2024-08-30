//1 March 2024
//ABout For-Each loop
// const coding = [ "js", "py", "rb", "go", "rust"]
                
// const values = coding.forEach( (item) => {
//     console.log(item)
//     return item
// //forEach doesnt return avalue outside a loop
// })

// console.log(values) 


//========================================================New Code==>With Methods===========================
//Filter is mostly used

// const myNums = [1,2,3,4,5,6,7,8,9,10]
//const newNums = myNums.filter( (num) => num > 4) //here we have used arrow function and condition
// console.log(newNums)         // .filter is property & num is callback function name given to give a condition 
//which is num > 4

// const newNums = myNums.filter ((num) => {
//     return num > 4})//you have to write return if you are giving the condition is scope //its not an object , you are giving a scope
// //if you use a curly braces to return a output but it will not work
// // 


//=========================================If you want to go for each loop =============================
// const NewNums = []
// myNums.forEach( (num) => { //In this case we are using curly braces but here we are using if condition to do so
//     if (num > 4) {
//        newNums.push(num) //Basic [array method push] to add any nummber
//     }
// }
// )
// console.log(newNums) 



///==============================Exercise====================================================================
//Database ==> User wants to fetch a particular data
//Important for revison it is mostly used....
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //Condition of books have genre history=========================
//   const userBooks = books.filter( (bk) => bk.genre === 'History' )  



 //Condition of books edition which are which have 2010 edition=====================
//   const userBooks = books.filter ((bk) => bk.edition == 2010)


//COndition I want to fetch the books which are published after 2000


// const userBooks = books.filter ( (bk) => (bk.publish >= 1900) )  //dont use object/scope for giving condition 
// console.log(userBooks)                 //you can also use return 



//Condition I want to fetch the books which are published after 1990 and genre should be history

 const userBooks = books.filter ( (bk) => { return (bk.genre == 'History') && ( bk.publish >= 1995)})

// console.log(userBooks) //here return can also work because its in scope

