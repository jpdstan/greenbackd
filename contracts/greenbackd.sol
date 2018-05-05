pragma solidity ^0.4.23;

import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract Greenbackd is Ownable {

    // Items to token value
    mapping (uint32 => uint32) itemIdToToken;

    // User ID to balance
    mapping (address => uint32) userIdToBalance;

    constructor(uint32[] itemIds, uint32[] tokenValues) public {
        
        // Initialize contract with set items and values
        require(itemIds.length == tokenValues.length);
        for (uint32 i = 0; i < itemIds.length; i++) {
            itemIdToToken[itemIds[i]] = tokenValues[i];
        }
    }

    // Credit MSG.SENDER's balance with the appropriate token amount.
    function makePurchase(uint32 itemId) external {
        userIdToBalance[msg.sender] += itemIdToToken[itemId];
    }

    // Get balance of MSG.SENDER.
    function getBalance() view external returns (uint32 balance) {
        return userIdToBalance[msg.sender];
    }

    // Add an (itemId, value) pair to itemIdToToken.
    function addItemToTokenList(uint32 itemId, uint32 value) external onlyOwner {
        require(itemIdToToken[itemId] == 0); // don't allow for duplicate items
        itemIdToToken[itemId] = value;
    }

    // Modify an existing (itemId, value) pair in itemIdToToken.
    function changeItemPrice(uint32 itemId, uint32 value) external onlyOwner {
        require(itemIdToToken[itemId] != 0); // item must exist already
        itemIdToToken[itemId] = value;
    }
}