const { ethers } = require('ethers');  // Import ethers
const { JsonRpcProvider } = require('ethers'); // Import JsonRpcProvider if not already imported

const provider = new JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/FpqNYbz_bGURiDSuJWqN0zr3Hxl0WBfW");

const coinFlipAddress = "0x31B084F9D3BE047DAcb754ef343d3D1D69FCfC54";
const coinFlipABI = [ "function flipCoin(bool _guess) public payable returns (bool)",
    "constructor()"];

const contract = new ethers.Contract(coinFlipAddress, coinFlipABI, provider);

const getBalance = async (address) => {
    const balance = await provider.getBalance(address);
    return ethers.formatEther(balance);
};

const flipCoin = async (amount, side, userAddress) => {
    // You would need to interact with your contract here
    // Example:
    const tx = await contract.flipCoin(amount, side);
    return tx.wait();
};

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/balance/:address', async (req, res) => {
    try {
        const balance = await getBalance(req.params.address);
        res.json({ balance });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/flip', async (req, res) => {
    try {
        const { amount, side, userAddress } = req.body;
        const tx = await flipCoin(amount, side, userAddress);
        res.json({ txHash: tx.transactionHash });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
