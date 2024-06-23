import React from "react";
import style from "./offercard.module.scss";
const OfferCard = ({ title, li1, li2, li3, li4 }) => {
  return (
    <div className={style.offercardBody}>
      <div className={style.offercardContainer}>
        <h4>{title}</h4>
        <div className={style.underlineoffer}></div>
        <div className={style.offerdetailsContainer}>
        <ul className={style.offerdetails}>
          <li>{li1}</li>
          <li>{li2}</li>
          <li>{li3}</li>
          <li>{li4}</li>
        </ul>
        </div>
        </div>
      </div>
  );
};

export default OfferCard;
