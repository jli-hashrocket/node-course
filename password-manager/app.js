console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

function createAccount (account) {
	var accounts = storage.getItemSync('accounts');
	if(typeof accounts === 'undefined'){
		accounts = [];
	}

	accounts.push(account);
	storage.setItemSync('accounts', account);
	return account;
}

function getAccount (accountUsername) {
	var accounts = storage.getItemSync('accounts');
	var foundAccount = null;

	for(var i=0; i < accounts.length; i++){
		if(accounts[i].username === accountUsername){
			foundAccount = account;
		}
	}
	return foundAccount;
}

function restartAccounts() {
	var accounts = storage.getItemSync('accounts');
	storage.setItemSync('accounts', undefined);
}

createAccount({name: 'Bruce Wayne', username: 'Batman', password: 'JokersAnAsshole'});
getAccount('Batman');
// restartAccounts();
