import React, { useState } from 'react';
import { ethers } from 'ethers';

import { coinFlipAddress, coinFlipABI } from '../utils.js';

const CoinFlip = () => {
    const [betAmount, setBetAmount] = useState('');
    
    const handleFlip = async () => {
        if (!window.ethereum) return;
        
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(coinFlipAddress, coinFlipABI, signer);
        
        const amount = ethers.parseEther(betAmount);
        const tx = await contract.flipCoin({ value: amount });
        
        await tx.wait();
        console.log('Transaction confirmed:', tx);
    };
    
    return (
        <div>
            <input
                type="text"
                value={betAmount}
                onChange={(e) => setBetAmount(e.target.value)}
                placeholder="Enter amount"
            />
            <button onClick={handleFlip}>Flip Coin</button>
        </div>
    );
};

export default CoinFlip;
