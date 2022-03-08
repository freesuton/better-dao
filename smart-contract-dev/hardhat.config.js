require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.2",
  networks:{
    rinkeby: {
      url: process.env.RINKEBY_RPC,
      accounts: [ process.env.PRIVATE_KEY ],
      // gas: 4027052
      // gasPrice: 80000000000
    },
  }
};
