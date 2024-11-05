const { Keypair, PublicKey,clusterApiUrl, Connection } = require("@solana/web3.js");

const wallet = new Keypair();

// print the wallet public key
// keyPair.publicKey is a Buffer, so we need to convert it to a string
// console.log('wallet publicKey ==> ',wallet.publicKey.toString())
// console.log('wallet secretKey ==> ',wallet.secretKey.toString())
// -----------
const publicKey = new PublicKey(wallet._keypair.publicKey);
const secretKey = wallet._keypair.secretKey;
// console.log('wallet publicKey ==> ',publicKey)
// console.log('wallet secretKey ==> ',secretKey)

/**
 * get wallet balance
 * @param {PublicKey} publicKey
 * @return {Promise<number>}
*/
const getWalletBalance = async (publicKey) => {
  try {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const walletBalance = await connection.getBalance(publicKey);
    console.log("walletBalance ==> ", walletBalance);
    return walletBalance;
  } catch(err) {
    console.log('errr => ',err);
  }
};

const main = async () => {
  await getWalletBalance(publicKey);
}

main();