// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract GemotteNFTCollection is ERC1155, Ownable {

    string public name;
    string public symbol;
    uint256 public tokenCount;
    string public baseUri;
    address public admin;
    uint256 private tokenCap = 5000;

    constructor(string memory _name, string memory _symbol, string memory _baseUri) ERC1155(_baseUri){
        name = _name;
        symbol = _symbol;
        baseUri = _baseUri;
        admin = msg.sender;
    }

    function mint() payable public
    {
        require(msg.value >= 0.05 ether, "Insufficient ETH");
        require(tokenCap >= tokenCount, "Minting Closed");
        tokenCount += 1;
        _mint(msg.sender, tokenCount, 1, "");
    }

    function uri(uint256 _tokenId) override public view returns(string memory)
    {
        return string(
            abi.encodePacked(
                baseUri, //URL
                Strings.toString(_tokenId), // + Token Id
                ".json" // + Json
            ));
    }

    function withdraw(address payable to, uint amount) external onlyAdmin{
        to.transfer(amount);
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, 'only admin');
        _;
    }
}