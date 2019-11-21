alert("Welcome to the Cash Machine")

let userInput=0;
let userPin= 1234;
let accountBalance=1790

function checkPin(){
    userInput = prompt("Please insert your pin number")
    console.log(userInput)
    if (userInput == userPin ){
        alert("Pin Accpepted")
        
            customerService()
        }
    
    
    else {
        alert("Incorrect pin")
    }

}
checkPin()


function customerService(){
    userInput = prompt ("Service would you like \n 1.Check balance\n 2. Deposit Funds\n 3. Withdraw funds \n 4.Return Card")
   if (userInput == 2){
    moneydepositfunction()      

} 
else if (userInput == 3){
    moneyWithdrawalfunction()
}
else if(userInput==1){
    alert(`you now have £${accountBalance} left`)
}
else if (userInput ==4){
    returnCard()
}

}





function moneydepositfunction(){
    

    userInput = prompt(" How much money would you like to deposit")
    {
        accountBalance = accountBalance += parseInt(userInput)
        alert(`you now have £${accountBalance} left`)}
        customerService()
    }




function moneyWithdrawalfunction(){
    

    userInput = prompt(" How much money would you like to withdraw")
    if (userInput < accountBalance) {
        accountBalance = accountBalance - userInput
        alert(`you now have £${accountBalance} left`)
    } else {
        alert("Insufficient funds")
      
    }
      customerService()
}

function returnCard(){
    alert("Goodbye")
}




