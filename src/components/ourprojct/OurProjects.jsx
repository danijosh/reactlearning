import React from "react";
import style from './ourprojects.module.scss'
import corporate from '../../assets/corporate.png'
import brand from '../../assets/brand.png'
import globalexp from '../../assets/globalexp.png'

const OurProjects = () => {
    const ourProjct={
        corporate:{head:'Corporate Identity Campaign',
            desc:'An Innovative Solution'
        },
        brand:{head:'Brand Redesign',
            desc:'A Story Of Success'
        },
        globalexp:{head:'Global Expansion',
            desc:'Turning New Page'
        }
    }
  return (
    <div className={style.ourProjectBody}>
      <div className={style.ourProjectContainer}>
        <h1>Our Projects</h1>
        <section className={style.projectDivsContainer}>
          <div>
            <img src={corporate} alt="" />
            <h3>{ourProjct.corporate.head}</h3>
            <p>{ourProjct.corporate.desc}</p>
          </div>
          <div>
            <img src={brand} alt="" />
            <h3>{ourProjct.brand.head}</h3>
            <p>{ourProjct.brand.desc}</p>
          </div>
          <div>
            <img src={globalexp} alt="" />
            <h3>{ourProjct.globalexp.head}</h3>
            <p>{ourProjct.globalexp.desc}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurProjects;
