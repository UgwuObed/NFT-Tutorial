// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// NFTee is  ERC721 signifies that the contract we are creating imports ERC721 and follows ERC721 contract from openzeppelin
contract NFTee is ERC721 {
    constructor() ERC721("LearnWeb3's NFT", "LEARNWEB-NFT") {
        // mint an NFT to yourself
        _mint(msg.sender, 1);
        _mint(msg.sender, 2);
      
    }
}
