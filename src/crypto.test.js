/**
 * @jest-environment node
 */

const { Keypair, Signature } = require('@swaply/core-node');

test('can generate a keypair, and format it via Base58 successfully', () => {
  // Generate an ed25519 keypair via swaply core-node
  const keypair = Keypair.generate();

  // Ensure the keypair was generated successfully by formatting it via JSON +
  // base58 (bs58 for the keys contained in the keypair)
  const keypairJSON = keypair.json_pretty();

  expect(keypairJSON).toHaveProperty('private_key');
  expect(keypairJSON).toHaveProperty('public_key');
});

test('can generate a keypair, which contains a public key and private key', () => {
  // Generate an ed25519 keypair via swaply core-node
  const keypair = Keypair.generate();

  // Private key should be 64 bytes, while the public key should be 32 bytes
  expect(keypair.private_key().length).toEqual(64);
  expect(keypair.public_key().length).toEqual(32);
});

test('can generate a keypair, which can be used to derive a formatted (pretty) keypair', () => {
  // Generate an ed25519 keypair via swaply core-node
  const keypair = Keypair.generate();

  expect(keypair.private_key_pretty().length).toBeGreaterThan(0);
  expect(keypair.public_key_pretty().length).toBeGreaterThan(0);
});

test('can generate a signature for an arbitrary message from a keypair', () => {
  // Generate an ed25519 keypair via swaply core-node
  const keypair = Keypair.generate();

  // Generate a signature for a message
  const msg = 'Test Message';
  const signature = Signature.new_with_keypair(keypair, msg);

  // Ensure the signature was generated successfully
  expect(signature).not.toBeNull();
  expect(signature.verify_with_keypair(keypair, msg)).toBeTruthy();
  expect(signature.verify_with_keypair(keypair, 'test')).toBeFalsy();
});
