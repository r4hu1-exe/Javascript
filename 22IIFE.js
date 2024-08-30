//Chapter: Immediately Invoked Function Expressions(IIFE)
//functions which you want to execute immediately

//for database connections it requires IIFE
//global scopes pollution X
//====================================================COde=============================
function chai(){
    console.log(`DB CONNECTED`);
    
}
chai(); //Here you have to use quotation ; else the below code wont work


//One more way to do this BY using IIFE

(function chai2(){
    console.log(`Database is now Connected`);
})(); //<================It is used for execution and you have wrapped the function in paranthesis 

 //<===============================now you can use paranthesis to execute the code


 ////Note RUN both the way
 //You will figure out that both the way doesnt work simultaneously
 //this happens because the whenever you wrapped the code in paranthesis you should always end it with (); <====without single quot the other execution wont work










( (dbname) => { //this is arrow function =>
    console.log(`DB is always connected ${dbname}`)
})('oracledb')



