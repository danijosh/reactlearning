import React from "react";
import style from "./homeframe.module.scss";
import solacehomeimg from "../../assets/solacehomeimg.png";
const HomeFrame = () => {
  return (
    <div className={style.IntroHomeFrameBody}>
      <div className={style.inrtoHeadingContainer}>
        <h1 className={style.inrtoHeading}>
          INTRODUCING <br />
          SOLACE <br />
          MANAGEMENT
        </h1>
      </div>
      <div className={style.buildingBox}>
        <p>
          {" "}
          Building better estate agents by <br /> powering your back office.
        </p>
      </div>
      <img className={style.introImg} src={solacehomeimg} alt="" />
      <div className={style.propertyContainer}>
        <p className={style.property}>
          "Property management <br />
          made easier than ever"
        </p>
        <p>
          <p className={style.stonehenge}>Stonehenge Property Management</p>
        </p>
        <a className={style.propertyLink} href="">
          Read More
        </a>
      </div>
    </div>
  );
};

export default HomeFrame;
