import React , { useState, useEffect } from 'react';

import Faq from './Faq';

export default function Home({contract}) {


  return(
      <React.Fragment>
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

                <h1 className="hero__title">0/5000</h1>

              </div>
              <p className="hero__subtitle">
               Mint Price: 0.05 ETH
              </p>
              <span className="header__btn-wrapper" style={{marginTop:"6%"}}>
                    <span className="header__btn-text">Launch Soon..</span>
                    <img src="assets/images/glass.png" alt="glass" className="header__btn-glass"/>
                </span>

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

      </React.Fragment>
  )
}