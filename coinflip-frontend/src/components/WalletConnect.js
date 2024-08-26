import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const WalletConnect = () => {
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [address, setAddress] = useState('');

    useEffect(() => {
        const connectWallet = async () => {
            if (window.ethereum) {
                try {
                    // Create a new instance of BrowserProvider
                    const newProvider = new ethers.BrowserProvider(window.ethereum);
                    const newSigner = await newProvider.getSigner();
                    
                    // Set state with the provider and signer
                    setProvider(newProvider);
                    setSigner(newSigner);
                    
                    // Get and set the user's address
                    const userAddress = await newSigner.getAddress();
                    setAddress(userAddress);
                } catch (error) {
                    console.error("Error connecting wallet:", error);
                }
            } else {
                console.log('Please install MetaMask!');
            }
        };
        connectWallet();
    }, []);

    return (
        <div>
            {address ? (
                <div>
                    <p>Connected Address: {address}</p>
                </div>
            ) : (
                <button onClick={() => window.ethereum.request({ method: 'eth_requestAccounts' })}>
                    Connect Wallet
                </button>
            )}
        </div>
    );
};

export default WalletConnect;
