// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;


import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract BetterNFTERC721 is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    bool private revealed = false;
    string private revealUrl =  "https://ipfs.io/ipfs/QmUdfrksUfNAbiozeMSVQKh21Xc4VbQGmN87aPhwn6RbQb/egg.json";

    constructor() ERC721("BetterNFTERC721", "BNFT") {}

    function mintNFT(string memory _tokenURI)
    public
    returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, _tokenURI);

        return newItemId;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {

        if(revealed == true) {
            return super.tokenURI(tokenId);
        }else{
            return revealUrl;
        }
    }

    function revealCollection() public {
        revealed = true;
    }
}