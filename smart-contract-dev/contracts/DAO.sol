// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

// import "@openzeppelin/contracts/access/Ownable.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

contract DAO is Ownable {
    struct Task{
        uint id;
        string desc;
        uint credit;
        mapping(address => string) takers;
        bool finished;
    }
    
    mapping(uint => Task) private tasks;
    uint private nextTaskId;
    // mapping(uint => mapping (address => string)) detailLinks;
    mapping(address => uint) private creditRecorder;

    constructor(){
        nextTaskId = 0;
    }


    function createTask(string memory _desc, uint _credit) external onlyOwner {
       Task storage task = tasks[nextTaskId];
        task.id = nextTaskId;
        task.desc = _desc;
        task.credit = _credit;
        nextTaskId = nextTaskId + 10;
    }

    //task exist and hasn't been taken
    // order id < currentTaskId && taker address == 0
    function submitProposal(uint _id,string memory _detailLink) external availableTask(_id){
        
        tasks[_id].takers[msg.sender] = _detailLink;
    }

    function finishTask(uint _id, address _taker) external onlyOwner availableTask(_id){
        tasks[_id].finished = true;
        creditRecorder[_taker] += tasks[_id].credit; 
    }

    modifier availableTask(uint _id) {
        require(_id < nextTaskId && tasks[_id].finished == false,"Task doesn't exist");
        _;
   }
}