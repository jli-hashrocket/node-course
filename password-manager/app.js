console.log('starting password manager');

var storage = require('node-persist'); 
storage.initSync();

function createAccount (account) {
	var accounts = storage.getItemSync('accounts');
	if(typeof accounts === 'undefined'){
		accounts = [];
	}
	console.log(accounts);
	// accounts.push(account);
	// storage.setItemSync('accounts', account)
	return account;
}

function getAccount (accountUsername) {
	var accounts = storage.getItemSync('accounts');
	var foundAccount = undefined;
	for(var i=0; i < accounts.length; i++){
		if(accounts[i] === accountUsername){
			foundAccount = account;
		}
	}
	return foundAccount;
}

function restartAccounts() {
	var accounts = storage.getItemSync('accounts');
	storage.setItemSync('accounts', undefined)
}

// createAccount({name: 'Bruce Wayne', username: 'Batman', password: 'JokersAnAsshole'});
createAccount({name: 'Tim Drake', username: 'Robin', password: 'Ilovebatman'});
getAccount('Batman');
getAccount('Robin');
var accounts = storage.getItemSync('accounts');
console.log(accounts);
// restartAccounts();