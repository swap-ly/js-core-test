const { Account, Keypair } = require('@swaply/core-node');

const keypair = Keypair.generate();
console.log(keypair.json_pretty());

const acc = Account.from_keypair(keypair);
console.log("\nRespective account: ");
console.log(`Private key: ${acc.keypair.private_key_pretty()}`);
console.log(`Public key: ${acc.keypair.public_key_pretty()}`);
