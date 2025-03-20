// primitive
// 7types : string , number , boolean , null , undefined , symbol , bigInt

const score = 33 //number
const pname = "arabinda" //string
const value = 100.4
const isloggedin = false //boolean
const outsidetemp = null //null
let userEmail;
const id = Symbol('123') //symboll
const anoid = Symbol('123') //symboll
console.log(id === anoid);
const bignum = 8282838393999993933n //bigInt
console.log(typeof bignum);

//Non primitive(reference type)

//array , object , functions

const heros = ["Ironman", "Spiderman", "Thor"] //array
console.log(heros);

const myobj = {
    sname: "arnab",
    age: 24
} //object


const myfunction = function () {
    console.log("Hello world");
} //function


////// TYPE OF DATA TYPES
console.log(typeof score); // If we check type of  "number" , then it shows                  "Number" 

console.log(typeof pname); // If we check type of  "string" , then it shows                  "String"

console.log(typeof isloggedin); // If we check type of  "boolean" , then it shows            "Boolean"

console.log(typeof outsidetemp); // If we check type of  "null" , then it shows              "Object"

console.log(typeof id); // If we check type of  "symbol" , then it shows                     "Symbol"

console.log(typeof bignum); // If we check type of  "bigint" , then it shows                 "BigInt"

console.log(typeof heros); // If we check type of  "array" , then it shows                   "Object"

console.log(typeof myobj); // If we check type of  "object" , then it shows                  "Object"

console.log(typeof myfunction); // If we check type of  "function" , then it shows          "Function"





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive)   Heap(non-primtive)

 let myytname = "arabinda"
 
 let anothername = myytname
 
 anothername = "samanta"
 
 console.log(myytname); 

 console.log(anothername); 
 


 let userone ={
    email : "ara@gmail.com",
    upi : "user@ybl"
 }

 let usertwo = userone
 usertwo.email = "sama@gmail.com"

 console.log(userone);
 console.log(usertwo);
 