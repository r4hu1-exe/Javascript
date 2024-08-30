//25 Feb 2024

//Chapter: This and Array Function.....

const user ={
    username: "rahul",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} Welcome to the website`)
    }
}
//this refers current context
console.log(this.welcomeMessage)