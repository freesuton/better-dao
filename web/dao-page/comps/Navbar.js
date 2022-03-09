import {ethers} from 'ethers'
import {useEffect,useState}  from 'react'
import {getWeb3,getWeb4} from '../pages/api/utils'
import Image from 'next/image'
import Web3 from 'web3';

const Navbar = () => {
    const [connected, setConnected] = useState(false);

    const [web3, setWeb3] = useState(undefined);
    const [contract, setContract] = useState(undefined);
    const [accounts, setAccounts] = useState(undefined);

    const [tokenCount,setTokenCount] = useState(0);

    //for popup
    const [showPop,setShowPop] = useState(false);

    async function walletButton(){
        if (connected === false){
            setShowPop(!showPop);
        }
    }

    async function connectWeb3Pop() {
        getWeb3();
    }


    useEffect(() => {
        // getWeb3();
      }, []);


    return (
        <>
            <header className="header">
                <div className="header__container">
                <div className="header__logo" data-clone="logo">
                </div>
                <nav className="header__nav" data-clone="nav">
                    <a href="https://www.better-dao.com" className="header__link" style={{color:"white"}}>Home</a>
                    <a href="https://www.better-dao.com" className="header__link" style={{color:"white"}}>Govern</a>
                    <a href="https://opensea.io/collection/gemotte" target="_blank" className="header__link">Opensea</a>
                </nav>
                <button  href="#whitelist" className="header__btn" data-clone="mint-btn">
                    <span onClick={walletButton} className="header__btn-wrapper">
                        <span  className="header__btn-text" style={{overflow:"hidden"}}>{connected ? accounts: "Connect Wallet"}</span>
                    <img src="assets/images/glass.png" alt="glass" className="header__btn-glass"/>
                    </span>

                    {showPop ?
                        <div style={{position:"absolute", color:"white"}}>
                        <div onClick={connectWeb3Pop} className="header__btn-wrapper__pop"  style={{ display:"flex"}}>
                            <img src="/assets/svg/metamask.svg" style={{width: '30%'}}/>
                            <img src="/assets/images/glass.png" alt="glass" className="header__btn-glass"/>
                        </div>
                        <div className="header__btn-wrapper__pop"  style={{ display:"flex"}}>
                            <img src="/assets/svg/walletconnect-hexagon-white.svg" style={{width: '30%'}}/>
                            <img src="/assets/images/glass.png" alt="glass" className="header__btn-glass"/>
                        </div>
                        </div>
                        :
                        <></>
                    }
                </button>
                </div>
            </header>
        </>
    );
}

export default Navbar;