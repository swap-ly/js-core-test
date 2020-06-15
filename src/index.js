const { Account, Keypair } = require('@swaply/core-node');

const keypair = Keypair.generate();
console.log(keypair.json_pretty());

const acc = Account.from_keypair(keypair);
console.log("\nRespective account: ");
console.log(acc.json_pretty());
