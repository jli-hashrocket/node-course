var account = {
	balance: 0
};

//deposit
var deposit = function(account, amount){
	account.balance += amount;
	console.log("You added $" + amount + ".");
	console.log("Your balance is $" + account.balance);
}
//withdraw
var withdraw = function(account, amount){
		account.balance -= amount;
		console.log("You have withdrawn $" + amount);
		console.log("Your remaining balance is $" + account.balance);
}
//getBalance
var getBalance = function(account){
	return account.balance;
}

deposit(account, 5.00);
withdraw(account, 3.00);
withdraw(account, 4.00);
getBalance(account);