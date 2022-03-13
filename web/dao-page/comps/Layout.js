import { useState, useEffect, createContext } from "react";
import {getWeb3,getWeb4} from '../pages/api/utils'
import Footer from "./Footer"
import Navbar from "./Navbar"
import Web3 from 'web3';
export const CountContext = createContext({});



const Layout = ({ children }) => {
    const [networkId, setNetworkId] = useState(0);
    const [accounts, setAccounts] = useState(undefined);
    const [connected,setConnected] = useState(false);

    useEffect(() => {
        const checkConnection = async () => {
            // Check if browser is running Metamask
            let web3;
            if (window.ethereum) {
                web3 =  await getWeb3();
            } else if (window.web3) {
                web3 = new Web3(window.web3.currentProvider);
            };
 
            // Check if User is already connected by retrieving the accounts
            web3.eth.getAccounts()
                .then(async (addr) => {
                    // Set User account into state
                    setAccounts(addr);
                    setConnected(true);
                    setNetworkId(window.ethereum.networkVersion);
                    console.log("ASdas");
            });
            //detect account change
            window.ethereum.on('accountsChanged', accounts => {
                
                setAccounts(accounts);
                if(!accounts || accounts.length == 0){
                    setConnected(false);
                }
            });
            //detect network change
            window.ethereum.on('networkChanged', function(networkId){
                setNetworkId( window.ethereum.networkVersion);
            });
        };
        if(window.ethereum || window.web3 ){
            checkConnection();
        }
        console.log("effect in layout");
    }, []);

      

    return (
       
            <>
                <CountContext.Provider value={{connected,setConnected,networkId,setNetworkId,accounts,setAccounts}}>
                    <Navbar />
                    { children }
                    <Footer />
                </CountContext.Provider>
            </>
     
    );
}
 
export default Layout;