
const {ethers} = require("hardhat");

async function main(){

  //1st to do is to get a compiled contract
  const BetterNFTERC721 = await ethers.getContractFactory("BetterNFTERC721");
  const betterNFTERC721 = await BetterNFTERC721.deploy();

  await betterNFTERC721.deployed();
  console.log("Success! Contract was deployed to: ", betterNFTERC721.address);

  await betterNFTERC721.mintNFT("https://ipfs.io/ipfs/QmUdfrksUfNAbiozeMSVQKh21Xc4VbQGmN87aPhwn6RbQb/egg.json");

  console.log("NFT successfully minted");
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
