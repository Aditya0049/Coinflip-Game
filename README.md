# Coinflip-Game
This project is a simple coin flip game built on the [Blockchain Name] testnet. The game allows users to connect their crypto wallets, select a token amount to risk, and flip a virtual coin. If the coin lands on the side chosen by the user, they win double the tokens they risked. If it lands on the other side, they lose their tokens.

**Focus on Key Components**
-------------------------------------------------------------------------------------------
**Smart Contract:** Write a simple Solidity contract for the coin flip game.
**Frontend:** Use a basic React template to create the UI. Keep it minimal to save time.
**Wallet Integration:** Use MetaMask for Ethereum to connect to the Goerli testnet.
**Deployment:** Deploy the smart contract on Goerli using Hardhat. Deploy the frontend on Vercel.

**1. Root Directory**
The root directory of your project contains essential configuration files and the main directories for both backend (smart contracts) and frontend (web application).

hardhat.config.js: Configuration file for Hardhat, specifying the Solidity version, network configurations, and any required plugins.
package.json: Contains metadata about the project and its dependencies. It’s used for managing the project's Node.js packages.
package-lock.json: Automatically generated file that locks the versions of the dependencies installed.
.gitignore: Specifies which files and directories should be ignored by Git (e.g., node_modules, .env, etc.).
**2. Contracts Directory (contracts/)**
This directory contains your Solidity smart contracts.

CoinFlip.sol: The smart contract that contains the logic for the coin flip game. This contract handles user bets, determines the outcome of the coin flip, and manages token transfers.
**3. Scripts Directory (scripts/)**
This directory contains scripts to automate tasks like deploying contracts to the blockchain.

deploy.js: A script that deploys your CoinFlip smart contract to the Ethereum blockchain (Sepolia testnet in this case).
**4. Frontend Directory (coinflip-frontend/)**
This directory is where your React-based frontend application resides. It contains the code for the user interface and logic for interacting with the Ethereum network and the smart contract.
- Pick a blockchain from: Ethereum. Use their ‘devnet/testnet’
- ![image](https://github.com/user-attachments/assets/bc8c5b58-9d88-4337-8123-4a2fa1f62302)


- Build a coinflip game, where the user can connect their wallet and then flip a coin on the screen.
on it 
- User can select how much tokens from their wallet (SOL, ETH or BTC) they want to risk, and also select a side.
![image](https://github.com/user-attachments/assets/0b7963d1-f8a9-4f26-9652-d29fe8f29980)

- If it lands on the side that they chose, they get double their tokens back, if it’s the wrong side, they get nothing.

- To get testing tokens use a ‘faucet’
![image](https://github.com/user-attachments/assets/f6b114a5-a3e0-48c9-a46a-f5f877ea15cb)

- You should deploy a simple smart contract so that the users wallet actually loses/gains tokens.
![image](https://github.com/user-attachments/assets/b46439bc-4bab-4994-a0a8-3178c48a2ee7)

- Show the transaction of the user gaining / losing funds on etherscan, solscan, etc

**UI:**
![image](https://github.com/user-attachments/assets/887163eb-b372-4be3-a4e5-d7a2a4778a76)
![Screenshot 2024-08-26 171519](https://github.com/user-attachments/assets/916664f7-2765-473c-a41e-02576d310623)
![Screenshot 2024-08-26 171449](https://github.com/user-attachments/assets/b47518a7-d8b6-4a23-b4fa-6ce27a763d73)





