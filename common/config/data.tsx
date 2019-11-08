import React from 'react'; // For ANNOUNCEMENT_MESSAGE jsx
import { getValues } from '../utils/helpers';
import packageJson from '../../package.json';
import { GasPriceSetting } from 'types/network';
import { makeExplorer } from 'utils/helpers';
import translate from 'translations';

export const languages = require('./languages.json');
export const discordURL = 'https://discordapp.com/invite/vtjT6BE';

// Displays in the footer
export const VERSION = packageJson.version;
export const N_FACTOR = 8192;

// Displays at the top of the site, make message empty string to remove.
// Type can be primary, warning, danger, success, info, or blank for grey.
// Message must be a JSX element if you want to use HTML.
export const ANNOUNCEMENT_TYPE = '';
export const ANNOUNCEMENT_MESSAGE = (
  <React.Fragment>{translate('ANNOUNCEMENT_MESSAGE')}</React.Fragment>
);

const etherScan = 'https://etherscan.io';
const blockChainInfo = 'https://blockchain.info';
export const ethPlorer = 'https://ethplorer.io';

export const ETHTxExplorer = (txHash: string): string => `${etherScan}/tx/${txHash}`;
export const BTCTxExplorer = (txHash: string): string => `${blockChainInfo}/tx/${txHash}`;
export const ETHAddressExplorer = (address: string): string => `${etherScan}/address/${address}`;
export const ETHTokenExplorer = (address: string): string => `${ethPlorer}/address/${address}`;

export const etherChainExplorerInst = makeExplorer({
  name: 'Etherchain',
  origin: 'https://www.etherchain.org',
  addressPath: 'account'
});

export const donationAddressMap = {
  BTC: '1DSbLudyvAfw8CULjB9CxLtm1yVw5sf3rV',
  ETH: '0x745F2Bc9570B8C8DcD51249d7fdC2528f03efF1c',
  XMR:
    '44c7umSm7TyXxKch9q4R5QfoTAf663A8yEFfJbxmxUJ1JCWq2kFu33oAAydrgNDQA8619rSQhZaFV3ScpESWCfcQB3Fqc6w'
};

export const gasEstimateCacheTime = 60000;
export const gasPriceDefaults: GasPriceSetting = {
  min: 1,
  max: 60,
  initial: 20
};

export const MINIMUM_PASSWORD_LENGTH = 12;

export const knowledgeBaseURL = 'https://github.com/woolong-coin/ewoolong-wallet';
export const ledgerReferralURL = 'https://www.ledger.com';
export const trezorReferralURL = 'https://trezor.io';
// TODO - Update url
export const safeTReferralURL =
  'https://www.archos.com';
export const bitboxReferralURL = 'https://digitalbitbox.com';
// TODO - Update url, this is MEW's
export const bityReferralURL = 'https://bity.com';
// TODO - add the real referral url once you know it
export const shapeshiftReferralURL = 'https://shapeshift.io';
export const ethercardReferralURL =
  'https://ether.cards';
export const keepkeyReferralURL = 'https://keepkey.go2cloud.org';
export const steelyReferralURL = 'https://stee.ly';

export enum SecureWalletName {
  WEB3 = 'web3',
  LEDGER_NANO_S = 'ledgerNanoS',
  TREZOR = 'trezor',
  SAFE_T = 'safeTmini',
  PARITY_SIGNER = 'paritySigner'
}

export enum HardwareWalletName {
  LEDGER_NANO_S = 'ledgerNanoS',
  TREZOR = 'trezor',
  SAFE_T = 'safeTmini'
}

export enum InsecureWalletName {
  PRIVATE_KEY = 'privateKey',
  KEYSTORE_FILE = 'keystoreFile',
  MNEMONIC_PHRASE = 'mnemonicPhrase'
}

export enum MiscWalletName {
  VIEW_ONLY = 'viewOnly'
}

export const walletNames = getValues(
  SecureWalletName,
  HardwareWalletName,
  InsecureWalletName,
  MiscWalletName
);

export type WalletName = SecureWalletName | InsecureWalletName | MiscWalletName;

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light'
}
