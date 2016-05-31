console.log('starting password manager');

var storage = require('node-persist');
var crypto = require('crypto-js');
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
      },
      masterPassword: {
        demand: true,
        alias: 'm',
        description: 'Master password',
        type: 'string'
      }
    }).help('help');
  })
  .command('get', 'Get an existing account', function(yargs){
  	yargs.options({
  		name: {
  			demand: true,
  			alias: 'n'
  		},
      masterPassword: {
        demand: true,
        alias: 'm'
      }
  	})
  })
  .help('help')
  .argv;
var command = argv._[0];

function getAccounts (masterPassword){
  var encryptedAccount = storage.getItemSync('accounts');
  var accounts = []

  if (encryptedAccount !== undefined) {
    var bytes = crypto.AES.decrypt(encryptedAccount, masterPassword);
    accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
  }
  return accounts;
}

function saveAccounts (accounts, masterPassword){
  var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(accounts), masterPassword);
  storage.setItemSync('accounts', encryptedAccounts.toString);
  return accounts;
}
function createAccount (account, masterPassword) {
  var accounts = getAccounts(masterPassword);
	accounts.push(account);
	saveAccounts(accounts, masterPassword)
	return account;
}

function getAccount (accountName, masterPassword) {
	var accounts = getAccounts(masterPassword);
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
		password: argv.password,
    masterPassword: argv.masterPassword
	}, argv.masterPassword);
  console.log( 'Account for ' + argv.name + ' has been created.');
  console.log(createdAccount);
}

if (command === 'get' && argv.name !== undefined) {
	var fetchedAccount = getAccount(argv.name, argv.masterPassword);
	console.log( 'Welcome, ' + argv.name + '!');
	console.log(fetchedAccount);
}
