// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract BetterNFTCollection is ERC1155, Ownable {

    string public name;
    string public symbol;
    uint256 public tokenCount;
    string public baseUri;
    address public admin;
    uint256 private tokenCap = 3;

    bool private revealed = false;

    string private revealUrl =  "https://ipfs.io/ipfs/QmVqiSLZLbyJMwwBaomUr1JQHMGcjxVeU9ALR1VNQoGF17/bg.json";

    //instantiate ERC1155
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
    //"https://game.example/api/item/{id}.json"
    function uri(uint256 _tokenId) override public view returns(string memory) {

        if(revealed != true){
            return revealUrl;
        }else{
            //solidity is not good at dealing with string . for string concatenation we need abi.encodePacked
            return string(
                abi.encodePacked(
                    baseUri, //URL
                    Strings.toString(_tokenId), // + Token Id
                    ".json" // + Json
                )
            );// URL
//            return "https://ipfs.io/ipfs/QmUdfrksUfNAbiozeMSVQKh21Xc4VbQGmN87aPhwn6RbQb/1.json";
        }

    }

    function revealCollection() external {
//        baseUri = _baseUri;
        revealed = true;
    }

    function withdraw(address payable to, uint amount) external onlyAdmin{
        to.transfer(amount);
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, 'only admin');
        _;
    }
}