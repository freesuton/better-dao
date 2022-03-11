import Web3 from 'web3';
import DAO from '../contracts/DAO.json'
import Gemotte from '../contracts/GemotteNFTCollection.json'

const v = 123123;

const getWeb3 = async () => {
  
    if (window.ethereum) {
        console.log('MetaMask is installed!');
        try{
            // await window.ethereum.request({method: 'eth_requestAccounts'});
            resolve(web3);
        }catch(error){
        }
    }else if(window.web3){

    }else{

    }
    console.log(v);
}

const getContract = async (contractAddress,provider,abi) => {
    const web3Provider = new Web3.providers.HttpProvider(provider);
    const web3 = new Web3(web3Provider);
    const contract = new web3.eth.Contract(
        abi,
        contractAddress,
    );
   
    // console.log(await contract.methods.getTestId().call());
    return contract;
    
}

const listener = () => {
    window.ethereum.on('networkChanged', function(networkId){
        console.log('networkChanged',networkId);
        // setNetwork(window.ethereum.networkVersion);
      });
    console.log("web4");
}

const getWeb4 = () => {
    console.log("web4");
}

export { getWeb3,getWeb4,getContract,listener };