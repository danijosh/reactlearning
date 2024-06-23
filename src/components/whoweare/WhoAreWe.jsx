import React from "react";
import style from "./whoarewe.module.scss";
import whoareweImg from "../../assets/whoareweImg.png";
import cloudnet from '../../assets/cloudnet.png'
import reducecost from '../../assets/reducecost.png'
import lessstaff from '../../assets/lessstaff.png'
import time from '../../assets/time.png'
const WhoWeAre = () => {
  const content={
    para:`With decades of experience under one roof, we know how property
            management works. But more importantly — we know how to make it work
            better. From independent estate agents to large property management
            firms, we’ve delivered transcational change at lightning pace....`
  }
  return (
    <div className={style.whoareweBody}>
      <section className={style.WhoAreWeImgndParaContainer}>
        <div className={style.whoareweimgContainer}>
          <img src={whoareweImg} alt="" />
        </div>
        <div className={style.whoareweContainer}>
          <h1 className={style.whoarewe}>Who Are We</h1>
          <p>
            {content.para}
          </p>
          <a href="">Read More</a>
        </div>
      </section>
      <section className={style.imgsNdDetailsContainer}>
        <div>
          <img src={time} alt="" />
          <p>More time for<br />
          your business</p>
        </div>
        <div>
          <img src={lessstaff} alt="" />
          <p>Remove staff <br />
          dependency</p>
        </div>
        <div>
          <img src={reducecost} alt="" />
          <p>Reduce costs<br />
          up to 50%</p>
        </div>
        <div>
          <img src={cloudnet} alt="" />
          <p>Move your agency<br />
          to the cloud</p>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
