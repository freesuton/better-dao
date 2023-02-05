
const {ethers} = require("hardhat");

async function main(){

  //1st to do is to get a compiled contract
  const GemotteNFTCollection = await ethers.getContractFactory("GemotteNFTCollection");
  //it is important to keep a / in the end
  const gemotteNFTCollection = await GemotteNFTCollection.deploy(
      "Gemotte",
      "Gemotte",
      "https://ipfs.io/ipfs/Qme9qXQr27oXogRe7KSeF4g9vDL9ZwrKvB7ZJDMuRu1jGL/"
  );
  await gemotteNFTCollection.deployed();
  console.log("Success! Contract was deployed to: ", gemotteNFTCollection.address);

  // we don't need url anymore
  // await animalWorld.mint("https://ipfs.io/ipfs/QmSeMaCMfnZyoYgJ6ws132oppLxSPfG7d4t4kw6RmKKkn3");
  // await animalWorld.mint(3);
  // await betterNFTCollection.mint(2);
  await gemotteNFTCollection.mint({ value: ethers.utils.parseEther("0.05") });


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
