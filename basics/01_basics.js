const accountId = 14212
let accountEmail = "halkure32@gmail.com"
var accountPassword = "324231"
accountCity = "Pune"

console.table([accountId, accountEmail, accountPassword, accountCity])
console.log("Account Id is: " + accountId)
console.log("Account Email is: " + accountEmail)
console.log("Account Password is: " + accountPassword)
console.log("Account City is: " + accountCity)
/* 
Don't use var for variable declaration, it is outdated and can lead to unexpected behavior due to its function scope. Instead, use let or const for better readability and maintainability of your code.    
use let for variables that may change and const for variables that should not be reassigned. This helps to prevent accidental reassignments and makes your code more predictable.
*/