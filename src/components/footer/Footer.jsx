import React from "react";
import solacelogo from "../../assets/solacelogo.png";
import style from "./footer.module.scss";
import fbicon from '../../assets/fbicon.png'
import linkedicon from '../../assets/linkedicon.png'
import instaicon from '../../assets/instaicon.png'
const Footer = () => {
  return (
    <div className={style.footerBody}>
      <div className={style.mainContainer}>
          <div className={style.logoContainer}><img src={solacelogo} alt="" /></div>
        <section className={style.detailsContainer}>
          <div className={style.logoNdParaContainer}>
            {/* <img src={solacelogo} alt="" /> */}
            <p>
              With decades of experience under one roof,<br /> we know how property
              
              management works.<br /> but more importantly - we know how to<br /> make it
              
              work better. 
            </p>
          </div>
          <div className={style.managementContainer}>
            <h3>SOLACE MANAGEMENT</h3>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
            </ul>
          </div>
          <div className={style.contactContainer}>
            <h1>CONTACT US</h1>
            <p className={style.mail}>
              <a href="mailto:info@solacemanagement.co.uk">
                info@solacemanagement.co.uk
              </a>
            </p>
            <p className={style.phone}>
              <a href="tel:020 3355 5093">020 3355 5093</a>
            </p>
            <p className={style.address}>
              <>
                6 Mitre Passage <br />
              </>
              <>
                Greenwich <br />
              </>
              <>
                London <br />
              </>
              SE10 0ER
            </p>
          </div>
        </section>
        <section className={style.followWaysContainer}>
          <div className={style.followuscontainer}>
            <h2>FOLLOW US</h2>
          </div>
          <div className={style.followiconsContainer}>
              <img className={style.fbicon} src={fbicon} alt="" />
              <img src={linkedicon} alt="" />
              <img src={instaicon} alt="" />
          </div>
          <footer className={style.footerline}></footer>
        </section>
      </div>
      <div className={style.copyrightContainer}>
        <section>© Copyright 2022 Solace Management® All Rights Reserved.</section>
        <section className={style.privacyContainer}><a href="">Privacy Policy and Terms of Service</a>
        </section>
      </div>
    </div>
  );
};

export default Footer;
