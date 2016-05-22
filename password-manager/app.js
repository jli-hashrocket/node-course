console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();


var argv = require('yargs')
  .command('create','Creates a new account',function(yargs){
    yargs.options({
      name: {
        demand: true,
        alias: 'n',
        description: 'Creates accont name (eg: Twitter, Facebook)',
        type: 'string'
      },
      username: {
      	demand: true,
      	alias: 'u',
      	description: 'Account username or email',
      	type: 'string'
      },
      password: {
      	demand: true,
      	alias: 'p',
      	description: 'Account password',
      	type: 'string'
      }
    }).help('help');
  })
  .command('get', 'Get an existing account', function(yargs){
  	yargs.options({
  		name: {
  			demand: true,
  			alias: 'n'
  		}
  	})
  })
  .help('help')
  .argv;
var command = argv._[0];

function createAccount (account) {
	var accounts = storage.getItemSync('accounts');
	if(accounts === undefined){
		accounts = [];
	}
	accounts.push(account);
	storage.setItemSync('accounts', accounts);
	return account;
}

function getAccount (accountName) {
	var accounts = storage.getItemSync('accounts');
	var foundAccount = null;
	for(var i=0; i < accounts.length; i++){
		if(accounts[i].name === accountName){
			foundAccount = accounts[i];
		}
	}
	return foundAccount;
}

function restartAccounts() {
	var accounts = storage.getItemSync('accounts');
	storage.setItemSync('accounts', undefined);
}

if (command === 'create' && argv.name !== undefined && argv.username !== undefined && argv.password !== undefined) {
	var createdAccount = createAccount({
		name: argv.name,
		username: argv.username,
		password: argv.password
	});
  console.log( 'Account for ' + argv.name + ' has been created.');
  console.log(createdAccount);
}

if (command === 'get' && argv.name !== undefined) {
	var fetchedAccount = getAccount(argv.name);
	console.log( 'Welcome, ' + argv.name + '!');
	console.log(fetchedAccount);
}
