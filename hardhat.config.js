require("@nomiclabs/hardhat-ethers");

module.exports = {
    solidity: "0.8.20",
    networks: {
        sepolia: {
            url: 'https://eth-sepolia.g.alchemy.com/v2/FpqNYbz_bGURiDSuJWqN0zr3Hxl0WBfW',
            accounts: [`0x1e09dde093e57ed0097e4efe55d6be5c9763ca64163cdc3d33dda7c17ffa6cde`,] // Replace with your actual private key
        }
    }
};
