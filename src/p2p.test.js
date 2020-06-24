/**
 * @jest-environment node
 */

const { Store, Registration, Account } = require('@swaply/core-node');

test('can register a username for an account', () => {
  // Generate an account, and an appropriate registration claim for some username
  const acc = Account.new();
  const reg = Registration.new_with_keypair('some username', acc.keypair);

  expect(reg).not.toBeNull();
});

test('can verify a registration for some username for an account', () => {
  // Generate an account, and an appropriate registration claim for some username
  const acc = Account.new();
  const reg = Registration.new_with_keypair('some username', acc.keypair);

  // Ensure the registration claim is valid
  expect(reg.valid()).toBeTruthy();
});

test('can create a store instance for registration instances', () => {
  // Generate a new store for registration data
  const store = Store.new();

  expect(store).not.toBeNull();
});

test('can register a user\'s username with the store', () => {
  // Generate an account, and an appropriate registration claim for some username
  const acc = Account.new();
  const reg = Registration.new_with_keypair('some username', acc.keypair);

  // Generate a new store for registration data
  const store = Store.new();
  store.register_username(reg);

  expect(store.username_for_peer(acc.keypair.public_key())).toEqual('some username');
});
