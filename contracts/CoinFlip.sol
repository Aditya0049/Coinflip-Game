// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract CoinFlip {
    address public owner;
    IERC20 public token;

    constructor(address _token) {
        owner = msg.sender;
        token = IERC20(_token);
    }

    function flipCoin(uint256 amount, bool choice) public returns (bool) {
        require(token.balanceOf(msg.sender) >= amount, "Insufficient balance");

        bool result = (block.timestamp % 2 == 0); // Simple coin flip
        if (result == choice) {
            // Win
            token.transfer(msg.sender, amount * 2);
        } else {
            // Lose
            token.transferFrom(msg.sender, address(this), amount);
        }
        return result;
    }
}
