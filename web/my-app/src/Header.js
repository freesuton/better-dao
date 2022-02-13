// import './css/index.min.css';
import React, {useState, useEffect,createContext,useContext,useRef} from 'react';
import { getWeb3 } from './utils.js';
import {ethers} from 'ethers'
import  Web3 from 'web3';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import AnimalWorldCollectionABI from './contracts/AnimalWorldCollection.json';
import GemotteNFTCollection from './contracts/GemotteNFTCollection.json';
import Home from "./Home";


//popup
import metamask from './assets/svg/metamask.svg';
import walletConnect from './assets/svg/walletconnect-hexagon-white.svg';

function Header() {
  const [connected, setConnected] = useState(false);

  const [web3, setWeb3] = useState(undefined);
  const [contract, setContract] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);




  const [tokenCount,setTokenCount] = useState(0);

  //for popup
  const [showPop,setShowPop] = useState(false);



  //Detect if wallet status
  useEffect(() => {

    console.log("useEffect");

    if (!accounts){
      // console.log("wallet null");
      setConnected(false);
    }else {
      //disconnect after connected
      if (accounts.length === 0){
        // console.log("wallet length = 0");
        setConnected(false);
      }
      window.ethereum.on('accountsChanged', accounts => {
        setAccounts(accounts);
      });
    }
    init();

    // console.log(contract);



  }, [accounts]);

   async function init()  {
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
     setWeb3(web3);
     setAccounts(accounts);

     if (accounts){
       setConnected(true);
     }


    const networkId = await web3.eth.net.getId();
    // const deployedNetwork = RockPaperScissors.networks[networkId];

    const contract = new web3.eth.Contract(
        GemotteNFTCollection.abi,
        "0x3a56590664fEF8f483063F3d714B88DafEe0Bbc7",
    );



     setContract(contract);
     // console.log(contract);
     //read token count
     const count = await contract.methods.tokenCount.call().call();
     // console.log(count);
     setTokenCount(count);

  }

  //wallet connect for button


  async function walletButton(){
    // web3Connect();
    // init();
     if (connected === false){
       // console.log(connected);
       // console.log("wallet connect false")
        setShowPop(!showPop);
     }
     // console.log(accounts[0]);
    // console.log(accounts.length);
     // await window.web3.eth.currentProvider.disconnect();
     // setConnected(false);
  }

  async function web3ConnectPop() {
    // Modern dapp browsers...
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        await window.ethereum.enable();
        // Acccounts now exposed
        const contract = new web3.eth.Contract(
            GemotteNFTCollection.abi,
            "0x3a56590664fEF8f483063F3d714B88DafEe0Bbc7",
        );

        setContract(contract);
        const accounts = await web3.eth.getAccounts();
        const count = await contract.methods.tokenCount.call().call();

        setWeb3(web3);
        setAccounts(accounts);
        setAccounts(accounts[0])
        setConnected(true);
        setShowPop(false);
        setTokenCount(count);

      } catch (error) {

      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      // Use Mist/MetaMask's provider.
      const web3 = window.web3;
      console.log("Injected web3 detected.");

    }
    // Fallback to localhost; use dev console port by default...
    else {
      const provider = new Web3.providers.HttpProvider(
          "http://localhost:9545"
      );
      const web3 = new Web3(provider);
      console.log("No web3 instance injected, using Local web3.");
    }
  }



  async function mint(e){
     e.preventDefault();
    await contract.methods.mint().send({from: accounts[0], value: ethers.utils.parseEther("0.05")});
    // const count = await contract.methods.tokenCount.call().call();
    console.log("mint");
  }

  async function withdraw(e){
    e.preventDefault();
    await contract.methods.withdraw("0x846684d5db5A149bAb306FeeE123a268a9E8A7E4",ethers.utils.parseEther("0.05")).send({from: accounts[0]});
  }

    return (
      <div>

        <header className="header">

          <div className="header__container">
            <div className="header__logo" data-clone="logo">
            </div>

            <nav className="header__nav" data-clone="nav">
              <a href="https://www.better-dao.com" className="header__link" style={{color:"white"}}>Home</a>
              <a href="https://opensea.io/collection/gemotte" target="_blank" className="header__link">Opensea</a>

              {/*<button onClick={(e) => withdraw(e)} style={{color:"white"}}>withdraw</button>*/}
              {/*<a href="#benefits" className="header__link">Benefits</a>*/}

              {/*<a href="#roadmap" className="header__link">Roadmap</a>*/}
            </nav>

            {/*<div>{connected ? "true" : "false"}</div>*/}



            {/*<button onClick={mint} style={{color:"white"}}>Button</button>*/}
            <button  href="#whitelist" className="header__btn" data-clone="mint-btn">
              <span onClick={walletButton} className="header__btn-wrapper">
                  <span  className="header__btn-text" style={{overflow:"hidden"}}>{connected ? accounts: "Connect Wallet"}</span>
                <img src="assets/images/glass.png" alt="glass" className="header__btn-glass"/>
              </span>

              {/*<div className="header__btn-wrapper"  style={{position:"absolute", color:"white"}}>*/}
              {/*  <div  className="header__btn-text" style={{overflow:"hidden"}}>mata</div>*/}
              {/*  <img src="assets/images/glass.png" alt="glass" className="header__btn-glass"/>*/}

              {/*</div>*/}
              {showPop ?
                  <div style={{position:"absolute", color:"white"}}>
                    <div onClick={web3ConnectPop} className="header__btn-wrapper__pop"  style={{ display:"flex"}}>
                      <img src={metamask} style={{width: '30%'}}/>
                      <img src="assets/images/glass.png" alt="glass" className="header__btn-glass"/>
                    </div>
                    <div className="header__btn-wrapper__pop"  style={{ display:"flex"}}>
                      <img src={walletConnect} style={{width: '30%'}}/>
                      <img src="assets/images/glass.png" alt="glass" className="header__btn-glass"/>
                    </div>
                  </div>
                  :
                <></>
              }

            </button>




            {/*<button className="burgermenu" id="burgermenu"></button>*/}
            {/*<NavBar handleLoginClick={handleLoginClick} />*/}

            {/*<PopupSignIn />*/}
          </div>


        </header>
        <section className="intro">
          <div className="intro__background">
            <picture>

              <img src="assets/images/intro/background@2x3.png" alt="background" className="intro-back"/>
            </picture>
            <img src="assets/videos/stars.gif" alt="" className="intro-star"/>
          </div>
          <div className="hero">
            <div className="hero__content" style={{background:"rgb(0,0,0,0.9)", padding:"2%", borderRadius:"20px"}}>
              <div className="hero__title-wrapper" >
                {connected ?
                    <h2 className="hero__title">{tokenCount}/5000</h2> :
                    <p className="hero__subtitle">Please Connect Wallet</p>}

              </div>
              <p className="hero__subtitle">
                Mint Price: 0.05 ETH
              </p>

              <div onClick={(e) => mint(e)} className="header__btn-wrapper" style={{marginTop:"6%"}}>
                    <span className="header__btn-text">Mint</span>
                    <img src="assets/images/glass.png" alt="glass" className="header__btn-glass"/>
              </div>

            </div>
            <div className="hero__ai">
              <picture>
                <source srcSet="assets/images/intro/rocks@mobile.png" media="(max-width: 768px)" type="image/png"/>
                <img src="assets/images/intro/rocks@2x.png" alt="rocks" className="hero__rocks"/>
              </picture>
              <picture>
                <source srcSet="" type="image/webp"/>
                <img src="assets/images/intro/path@2x.png" alt="path" className="hero__path"/>
              </picture>
              <img src="assets/images/intro/fighting-squirrel@2x.png" alt="rabbits" className="hero__rabbits"/>
              <picture>
                <source srcSet="assets/images/intro/path@mobile.png" media="(max-width: 768px)" type="image/png"/>
                <img src="assets/images/intro/path@2x.png" alt="path" className="hero__path"/>
              </picture>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="footer__container">
            <div className="footer-content">
              <div className="footer-content__left">
                <h2 className="footer-content__title">
                  <span>BetterDAO</span>

                </h2>
                <p className="footer-content__text">
                  Make The World Better.
                </p>
                <div className="socials">
                  <div className="socials__inner">
                    <a href="https://twitter.com/BetterDAO" className="socials__link">
                      <img src="assets/images/socials/twitter.svg" alt="twt"/>
                    </a>

                  </div>
                </div>
              </div>
              <div className="footer-content__right">
                <div className="footer-content__wrapper">
                  <nav className="footer-content__nav">
                    <a className="footer-content__nav-link" href="index.html">Home</a>
                    {/*<a className="footer-content__nav-link" href="#rarity">Rarity</a>*/}
                    {/*<a className="footer-content__nav-link" href="#benefits">Benefits</a>*/}
                  </nav>
                  <nav className="footer-content__nav">

                    {/*<a className="footer-content__nav-link" href="#roadmap">Roadmap</a>*/}
                    {/*<a className="footer-content__nav-link" href="#faq">FAQ</a>*/}
                  </nav>

                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <p className="footer-copyright__text">Copyright © 2021. All rights reserved</p>

            </div>
          </div>
        </footer>
      </div>

  );
}



export default Header;