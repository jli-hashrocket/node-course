var accounts = [];

var createAccount = function(account){
	accounts.push(account);
	return account;
}

var getAccount = function(username){
	var foundAccount;
	accounts.forEach(function(account){
		if(account.username === username){
			foundAccount = account;
		}
	});
	return foundAccount;
}



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

createAccount({username: 'Jeff', balance: 0});
var account = getAccount('Jeff');
if(account !== undefined){
	deposit(account, 5.00);
	withdraw(account, 3.00);
	withdraw(account, 4.00);
	getBalance(account);
}
console.log(account.balance);