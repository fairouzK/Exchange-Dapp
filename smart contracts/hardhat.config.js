require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    goerli: {
      url: 'DAPP_API_KEY',
      accounts: ['YOUR_wALLET_PRIVATE_KEY']
    }
  }
};
