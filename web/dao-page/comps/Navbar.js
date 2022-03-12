import {ethers} from 'ethers'
import {useEffect,useState,useContext}  from 'react'
import {CountContext} from '../comps/Layout'
import {getWeb3,getWeb4} from '../pages/api/utils'
import Image from 'next/image'
import Web3 from 'web3';
import Link from 'next/link'



const Navbar = () => {
    //store networkId in config
    const { connected,setConnected,setAccounts, networkId,accounts } = useContext(CountContext);
    // const [accounts,setAccounts] = useContext(CountContext); 
    // const [connected,setConnected] = useContext(CountContext); 
    // const [networkId,setNetworkId] = useContext(CountContext); 
  

    //for popup
    const [showPop,setShowPop] = useState(false);
    async function walletButton(){
        if (connected == false){
            setShowPop(!showPop);
        }
        // setAccounts("f");

    }

    async function connectWeb3Pop() {
        setShowPop(!showPop);
        const web3 = await getWeb3();
        
        const _accounts = await web3.eth.getAccounts();
        setAccounts(_accounts);
        setConnected(true);

    }

    function initMenu(){
        var body = document.body;
        var openMenuBtn = document.getElementById("burgermenu");
        var closeMenuBtn = document.getElementById("close-menu");
        openMenuBtn.addEventListener("click", function () {
          body.classList.add("show-menu");
        });
        closeMenuBtn.addEventListener("click", function () {
          body.classList.remove("show-menu");
        });
    }


    useEffect(() => {
        initMenu();
        // getWeb3();
        console.log(connected);
      }, []);


    return (
        <>
            <header className="header">
                <div className="header__container">
                <div className="header__logo" data-clone="logo">
                </div>
                <nav className="header__nav" data-clone="nav">
         
                    <a href="https://www.better-dao.com" className="header__link" style={{color:"white"}}>Home</a>
                    <Link href="/nft" ><a className="header__link" style={{color:"white"}}>NFT</a></Link>
                    <Link href="/dao"><a  className="header__link" style={{color:"white"}}>Govern</a></Link>
                    {/* <Link href="/nft" ><a>dsd</a></Link> */}
                    {/* <a href="https://www.better-dao.com" className="header__link" style={{color:"white"}}>Govern</a> */}
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
                <button class="burgermenu" id="burgermenu"></button>
   
                </div>
            </header>

            <div class="menu" id="menu">
                <header class="menu__header">
                    <div data-insert="logo"></div>
                    <div data-insert="mint-btn"></div>
                    <button class="menu__closed" id="close-menu"></button>
                </header>
                <div class="menu__body">
                    <h3 class="menu__title">Menu</h3>
                    <div data-insert="nav"></div>
                </div>
                <footer class="menu__footer" data-clone="socials">
                    <h3 class="menu__title">Get in touch</h3>
                    <div class="socials-menu">
                        <a href="https://twitter.com/MaelstromDAO" class="socials-menu__link twt">
                            <img src="assets/images/socials/twitter-menu.png" alt="twitter"/>
                        </a>

                    </div>
                </footer>
            </div>

        </>
    );
}

export default Navbar;