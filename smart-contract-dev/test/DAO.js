const {expect} = require("chai");

describe("DAO contract", function(){
    it("sdfsdf", async function (){
        const[owner] = await ethers.getSigners();

        const DAO = await ethers.getContractFactory("DAO");

        const hardhatDAO = await DAO.deploy();
      


        // hardhatDAO.nextTaskId = 2;
        console.log(hardhatDAO.nextTaskId);
        await hardhatDAO.createTask("desc",10);
        await hardhatDAO.createTask("desc",10);
        let id = await hardhatDAO.nextTaskId;
        console.log(id);
         id = await hardhatDAO.nextTaskId;
        console.log("----------");
        console.log(hardhatDAO.nextTaskId);
        console.log(id);
        // expect(await hardhatDAO.nextTaskId).to.equal(id);
    });
});