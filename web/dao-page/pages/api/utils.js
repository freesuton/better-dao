import Web3 from 'web3';
import DAO from '../contracts/DAO.json'

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

const getContract = async () => {
    const provider = "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
    const web3Provider = new Web3.providers.HttpProvider(provider);
    const web3 = new Web3(web3Provider);
    const contract = new web3.eth.Contract(
        DAO.abi,
        "0x59bCA427c75Db65c9ACc85e683e7859364B157DA",
    );
    // console.log(await contract.methods.getTestId().call());
    return contract;
    
}

const getWeb4 = () => {
    console.log("web4");
}

export { getWeb3,getWeb4,getContract };