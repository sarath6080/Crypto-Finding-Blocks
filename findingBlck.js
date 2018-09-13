// var blockexplorer = require('blockchain.info/blockexplorer').usingNetwork(3)
// var blckdetails = blockexplorer.getLatestBlock()
// console.log(blckdetails)

var bitcoin = require('bitcoin');
var client = new bitcoin.Client({
  host: 'localhost',
  port: 8332,
  user: 'ApplePro',
  pass: 'ApplePro5'
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