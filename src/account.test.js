/**
 * @jest-environment node
 */

const { Account, Keypair } = require('@swaply/core-node');

test('can generate an account', () => {
  // Generate a new account
  const acc = Account.new();

  // Ensure the account was generated successfully by formatting it via JSON +
  // base58 (bs58 for the keys contained in the account)
  const accJSON = acc.json_pretty();
  expect(accJSON).toHaveProperty('keypair');
});

test('can derive an account from a generated keypair', () => {
  // Generate an ed25519 keypair via swaply core-node
  const keypair = Keypair.generate();

  // Derive an account from the keypair
  const acc = Account.from_keypair(keypair);

  // Ensure the account was generated successfully by formatting it via JSON +
  // base58 (bs58 for the keys contained in the account)
  const accJSON = acc.json_pretty();
  expect(accJSON).toHaveProperty('keypair');
});
