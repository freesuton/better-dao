const { ethers } = require("hardhat");

async function main(){
    const [deployer] = await ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);
    const balance = await deployer.getBalance();
    console.log(`Account Balance: ${balance.toString()}`);
    const DAO = await ethers.getContractFactory("DAO");
    const dao = await DAO.deploy();
    await dao.deployed();
    console.log("Success! Contract was deployed to: ", dao.address);

    await dao.createTask("test task",10);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
