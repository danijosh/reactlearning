import React from "react";
import style from "./superchargeframe.module.scss";
import superchargeImg from "../../assets/superchargeImg.png";
const SuperChargeFrame = () => {
  return (
    <div className={style.SuperChargeFrameBody}>
      <div className={style.superChargeContainer}>
        <h1 className={style.superCharge}>
          Supercharge Your
          <br /> Portfolio In Just <br /> 60 days
        </h1>
      </div>
      <div className={style.superParaContainer}>
        <p>
          Solace is proud to announce the future of <br />
          property management. We'd like to invite you <br />
          to become a partner and take advantage of <br />
          our professional services.
        </p>
      </div>
      <div className={style.superImgContiner}>
        <img src={superchargeImg} alt="" />
      </div>
    </div>
  );
};

export default SuperChargeFrame;
