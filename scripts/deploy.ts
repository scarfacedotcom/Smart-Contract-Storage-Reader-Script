import { ethers } from "hardhat";
import Web3 from "web3";

async function main() {

  const web3 = new Web3("https://eth-mainnet.g.alchemy.com/v2/IbkEKxpq0g2wcpd3XUqioRT4_-nsa0dv");

  let convertHex = require('convert-hex');
  // const Aave = "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9";
  // const AaveValue = await web3.eth.getStorageAt(Aave, 3);
  // console.log(`Aave value is ${AaveValue}`);

  // Deploying the contract
  const HexToNum = await ethers.getContractFactory("ReadStorage");
  const hexToNum = await HexToNum.deploy();
  await hexToNum.deployed();
  console.log(`Your contract has be deployd to ${hexToNum}`);

  console.log(`------------------------READING FROM AAVES CONTRACTS STORAGE--------------------------------`)

  let AavecontractAddress = '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9';
  let index = 0;
for (index = 0; index < 10; index++){
 console.log(`[${index}]` + 
   await web3.eth.getStorageAt(AavecontractAddress, index));
   const contentsNum = await hexToNum.hexToNum(await web3.eth.getStorageAt(AavecontractAddress, index));
   console.log(contentsNum);
}


console.log(`------------------------READING FROM SUSHI CONTRACTS STORAGE--------------------------------`)

let SushicontractAddress = '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2';
for (index = 0; index < 10; index++){
console.log(`[${index}]` + 
 await web3.eth.getStorageAt(SushicontractAddress, index));
 const contentsNum = await hexToNum.hexToNum(await web3.eth.getStorageAt(SushicontractAddress, index));
   console.log(contentsNum);
}

console.log(`------------------------READING FROM DECENTRALAND MANA CONTRACTS STORAGE--------------------------------`)

let ManacontractAddress = '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942';
for (index = 0; index < 10; index++){
console.log(`[${index}]` + 
 await web3.eth.getStorageAt(ManacontractAddress, index));
 const contentsNum = await hexToNum.hexToNum(await web3.eth.getStorageAt(ManacontractAddress, index));
   console.log(contentsNum);
}

console.log(`------------------------READING FROM FANTOM TOKEN CONTRACTS STORAGE--------------------------------`)

let FTMcontractAddress = '0x4E15361FD6b4BB609Fa63C81A2be19d873717870';
for (index = 0; index < 11; index++){
console.log(`[${index}]` + 
 await web3.eth.getStorageAt(FTMcontractAddress, index));
 const contentsNum = await hexToNum.hexToNum(await web3.eth.getStorageAt(FTMcontractAddress, index));
   console.log(contentsNum);
}

console.log(`------------------------READING FROM SAND CONTRACTS STORAGE--------------------------------`)

let SandcontractAddress = '0x3845badAde8e6dFF049820680d1F14bD3903a5d0';
for (index = 0; index < 10; index++){
console.log(`[${index}]` + 
 await web3.eth.getStorageAt(SandcontractAddress, index));
 const contentsNum = await hexToNum.hexToNum(await web3.eth.getStorageAt(SandcontractAddress, index));
   console.log(contentsNum);
}

console.log(`------------------------READING FROM CHILIZ CONTRACTS STORAGE--------------------------------`)

let ChzcontractAddress = '0x3506424F91fD33084466F402d5D97f05F8e3b4AF';
for (index = 0; index < 10; index++){
console.log(`[${index}]` + 
 await web3.eth.getStorageAt(ChzcontractAddress, index));
 const contentsNum = await hexToNum.hexToNum(await web3.eth.getStorageAt(ChzcontractAddress, index));
   console.log(contentsNum);
}
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
