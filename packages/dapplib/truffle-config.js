require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad hunt slide blue swear'; 
let testAccounts = [
"0x230ae2bfd20df669c0ee1df1688d7b9ca93ef470a1d4d50793b3dbb6ca357fa1",
"0x8e7e699152756ee971320e8731ec27e8da17a35a225b2ce0e309aaa7c0df9b99",
"0x837a590ead8e23ae85517c4f089fd1f97ed87f31c3fe392e6e70ca3226fc2513",
"0x75f150fe9b8425f4c19042b6afc62be3cabbec790030a71c9fe5a32e9716e354",
"0xb1c493b2b7f228c545b39f9818aaf50dbd44e7d391baee1de0727cd58c4c6057",
"0x0cb032c42c8bc60b64ca7e5bd8ae444b516f7c03114421c735ca60b64117f89e",
"0x9e31eb2cf312868ca55b9b47bdf854aed9da02f239b0b1616f60ba4f1e032bc5",
"0xbe5abd4201d5a09fb6ceee483e4e9d4526ba3a110696428a119afd57bd272fd6",
"0x37dda9f9c308b466ca51f526fffb5f2c260af69c431bd402145a2b2e80d164ed",
"0x16cd8eb09c3d0553cf9497b073a1b26255831c3b7cd734c0d38d812ad72bb52b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

