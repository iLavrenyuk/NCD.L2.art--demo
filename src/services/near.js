import BN from 'bn.js';
import { keyStores, Near, WalletConnection } from 'near-api-js';

const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
const gas = new BN('100000000000000');

// use new NEAR to avoid async/await
export const near = new Near({
  networkId: 'testnet',
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
});

export const wallet = new WalletConnection(near, 'artdemo');

export const signIn = (successUrl) => {
  return wallet.requestSignIn({ contractId: CONTRACT_ID, successUrl });
};

export const signOut = () => {
  return wallet.signOut(CONTRACT_ID);
};

export const getTempDesign = (accountId) => {
  return wallet.account().viewFunction(CONTRACT_ID, 'getTempDesign', { accountId });
};

export const getViewMyDesign = (accountId) => {
  return wallet.account().viewFunction(CONTRACT_ID, 'viewMyDesign', { accountId });
};

//function to generate new design
export const generateDesign = (accountId) => {
  return wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: 'design',
    gas,
    args: { accountId },
  });
};

//function to claim existing design
export const claimDesign = (seed) => {
  return wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: 'claimMyDesign',
    gas,
    args: { seed },
  });
};

//function to burn design
export const burnDesign = () => {
  return wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: 'burnMyDesign',
    gas,
  });
};
