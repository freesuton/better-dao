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

    useEffect(async() => {
        //check current connect status
        if(window.ethereum){
            if(!accounts){
                setConnected(false);
                
            }else{
                if (accounts.length === 0){
                    // console.log("wallet length = 0");
                    setConnected(false);
                }
                
                window.ethereum.on('accountsChanged', accounts => {
                    setAccounts(accounts);
                });

                window.ethereum.on('networkChanged', function(networkId){
                    setNetworkId( window.ethereum.networkVersion);
         });
        }
        init();
        console.log(accounts);
        


    }

       
      }, []);
    //   useEffect(async() => {
    //     init();

       
    //   }, []);

      async function init()  {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
        setAccounts(accounts);
        setNetworkId( window.ethereum.networkVersion);
        if (accounts){
            setConnected(true);
          }
      }
      

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