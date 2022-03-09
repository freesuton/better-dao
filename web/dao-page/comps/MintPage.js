import {useEffect,useState}  from 'react'
import {ethers} from 'ethers'
import {getWeb3,getWeb4} from '../pages/api/utils'


const MintPage = () => {
    const [connected, setConnected] = useState(false);

    return (

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

    );
}

export default MintPage;