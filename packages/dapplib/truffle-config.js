require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remind hospital inflict problem outer shock'; 
let testAccounts = [
"0x903c1cfad837e4b009394ec992bacff7f8f9e49c903c881937223b89037bdc0d",
"0x61fb55cc082016cd94caa7c0ce9fa32a2ef5faae81158ad65031cc8a68ab6d70",
"0xaa9c36232b72f7255addf1bbc6c19db9648287e102b6d56debae2389467617de",
"0xd64c7dcc62d1ea57b299bb6cd5d7d67a134864d12c505cf6ebb430ec0dc05571",
"0x2ea123724a454b7552e20efd29a01960884a340f8960a2e759cd79472cc9159d",
"0xbf0e275d7d291003f0fb3e91d4c932f9e918f4de3d224a4c2680bb6f1121235f",
"0xbdae40436f12d470fbd7441e17c47741f20abe3130cd1df5c55043d3e0319b0a",
"0x6480e11e0aee5dfdfdc4fa39438eee0d0ba5ac2617c72bcfa2fd9f4ba25df6d6",
"0x48e0befbb2136365d74faba943cb2f5b15a363d0e8de2713de185b9cc2dbf405",
"0x0c969f54339d684b231765d3c4b6be620e7732d97a8c7e7b8d23fd72fdfd8282"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


