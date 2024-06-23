import React, { useState,useEffect } from 'react'
import style from './mainnav.module.scss'
import solacelogo from '../../assets/solacelogo.png'
import HomeFrame from '../homeframe/HomeFrame'
import menuIcon from "../..//assets/menuIcon.png"
import SuperChargeFrame from '../superchargeframe/SuperChargeFrame'
import WeOffer from '../weOffer/WeOffer'
import WhoWeAre from '../whoweare/WhoAreWe'
import WhatClientSay from '../ourprojct/OurProjects'
import ContactUs from '../contactus/ContactUs'
import Footer from '../footer/Footer'
import OurProjects from '../ourprojct/OurProjects'
import WhatClientsSay from '../carouselClientsSay/WhatClientsSay'
const MainNav = () => {

  const [miniMenu,setMiniMenu] = useState(false)

  return (
    <div className={style.navBody}>
        <nav className={style.navcontainer}>
            <div className={style.logoContainer}>
                <img src={solacelogo} alt="" />
            </div>
            <ul className={style.navlist}>
                <li className={style.services}><a href="">Services</a></li>
                <li className={style.about}><a href="">About Us</a></li>
                <button className={style.contactbtn}>Contact</button>
            </ul>
            <div className={style.navMenuList}>

            <img onClick={()=>{miniMenu===true?setMiniMenu(false):setMiniMenu( true)}} src={menuIcon} alt="menuIcon" />

            </div>
            {miniMenu && (
              <div className={style.miniMenuContainer}>
                <ul className={style.miniMenuUl}>
                  <li><a href="">Services</a></li>
                  <li><a href="">About Us</a></li>
                  <li><a href="">Contact</a></li>
                </ul>
              </div>
            )}
        </nav>
      
        <HomeFrame/>
        <SuperChargeFrame/>
        <WeOffer/>
        <WhoWeAre/>
        <WhatClientsSay/>
        <OurProjects/>
        <ContactUs/>
        <Footer/>
    </div>

  )
}

export default MainNav