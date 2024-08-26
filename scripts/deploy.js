const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const TokenAddress = "0xda96e4353f0ef3989c84e47c34752c7cf813289b"; // Replace with the actual token address

    const CoinFlip = await hre.ethers.getContractFactory("CoinFlip");
    const coinFlip = await CoinFlip.deploy(TokenAddress);

    console.log("CoinFlip contract deployed to:", coinFlip.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
