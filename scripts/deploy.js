// Import ethers from Hardhat package
//ether.js is really nice library to work with ethereum 
const { ethers } = require("hardhat");

async function main() {
  /*
A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
so nftContract here is a factory for instances of our GameItem contract.
*/
//import ether
  const Contract = await ethers.getContractFactory("NFTee");

  // here we deploy the contract
  const deployedContract = await Contract.deploy();

  // print the address of the deployed contract
  console.log("NFT Contract deployed to:", deployedContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
