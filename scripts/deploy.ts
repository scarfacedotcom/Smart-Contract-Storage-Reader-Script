import { ethers } from "hardhat";
import Web3 from "web3";

async function main() {

  const web3 = new Web3("https://eth-mainnet.g.alchemy.com/v2/IbkEKxpq0g2wcpd3XUqioRT4_-nsa0dv");

  const Aave = "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9";
  const AaveValue = await web3.eth.getStorageAt(Aave, 3);
  console.log(`Aave value is ${AaveValue}`);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
