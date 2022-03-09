const Footer = () => {
    return (
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
    );
}

export default Footer;