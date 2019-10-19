const HDWalletProvider = require('truffle-hdwallet-provider');
var MNEMONIC = "spirit supply whale amount human item harsh scare congress discover talent hamster";
var ENDPOINT = "https://rinkeby.infura.io/v3/536b0f13a8b44739ba5354aa2dfadfe2";
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(MNEMONIC, ENDPOINT)
      },
      network_id: 4,       // rinkeby's id
      gas: 4500000,        // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000
    }
  },

  // Useful for deploying to a public network.
  // NB: It's important to wrap the provider as a function.

  compilers: {
    solc: {
      version: "^0.4.25"
    }
  }
};