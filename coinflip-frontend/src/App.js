import React, { useState } from 'react';
import './App.css';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { coinFlipAddress, coinFlipABI } from './utils';

const App = () => {
    const [provider, setProvider] = useState(null);
    const [contract, setContract] = useState(null);
    const [walletAddress, setWalletAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [choice, setChoice] = useState(true); // true for heads, false for tails
    const [status, setStatus] = useState('');

    const connectWallet = async () => {
        const web3Modal = new Web3Modal({
            cacheProvider: true,
            providerOptions: {} // Add any provider options here if needed
        });
        const instance = await web3Modal.connect();
        const ethersProvider = new ethers.BrowserProvider(instance);
        const signer = ethersProvider.getSigner();
        const contractInstance = new ethers.Contract(coinFlipAddress, coinFlipABI, signer);

        setProvider(ethersProvider);
        setContract(contractInstance);
        setWalletAddress(await signer.getAddress());
    };

    const handleFlip = async () => {
        if (!provider || !contract) return;

        try {
            const tx = await contract.flipCoin(ethers.parseUnits(amount, 'ether'), choice);
            await tx.wait();
            setStatus(`Transaction successful: ${tx.hash}`);
        } catch (error) {
            setStatus(`Transaction failed: ${error.message}`);
        }
    };

    return (
        <div>
            <h1>Coin Flip Game</h1>
            {!walletAddress ? (
                <button onClick={connectWallet}>Connect Wallet</button>
            ) : (
                <div>
                    <p>Connected Wallet: {walletAddress}</p>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Amount to risk"
                    />
                    <select onChange={(e) => setChoice(e.target.value === 'heads')}>
                        <option value="heads">Heads</option>
                        <option value="tails">Tails</option>
                    </select>
                    <button onClick={handleFlip}>Flip Coin</button>
                    <p>Status: {status}</p>
                </div>
            )}
        </div>
    );
};

export default App;
