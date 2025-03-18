const accountId = 34566
let accountEmail = "abc@gmail.com"
var accountPass = "1345"
accountCity = "kolkata"

let accountState;
//accountId = 2 // not allowed

accountEmail = "ac@gmail.com"
accountPass = "3212"
accountCity = "jaipur"


/*
Prefer not to use  var , because of issue in block scope and functional scope
*/
console.table([accountEmail,accountId,accountPass,accountCity,accountState]);