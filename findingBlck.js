// used with Bitcoin-core package.
const BitcoindClient = require("bitcoin-core");
const config =  {
    network: 'testnet',
    username: 'xxxxx',
    password: 'xxxxx',
    host: "127.0.0.1" 
};

const bitcoindclient = new BitcoindClient(config);

bitcoindclient.getBlockchainInfo().then((help) => console.log(help));

bitcoindclient.getBalance('*', 6, function(err, balance, resHeaders) {
    if (err) return console.log(err);
    console.log('Balance:', balance);
  });
/*
// used in bitcoin packaage
var client = new bitcoin.Client({
    host: 'localhost',
    port: 8332,
    user: 'xxxx',
    pass: 'xxxx'
});

client.getDifficulty(function(err, difficulty) {
    if (err) {
        return console.error(err);
    }

    console.log('Difficulty: ' + difficulty);
});

client.getBalance('*', 6, function(err, balance, resHeaders) {
    if (err) return console.log(err);
    console.log('Balance:', balance);
});

client.getBlockchainInfo(function(err, information) {
    if (err) return console.log(err);
    console.log('Into:', information);
});
*/

