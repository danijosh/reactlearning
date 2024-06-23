import React from "react";
import style from "./Weoffer.module.scss";
import OfferCard from "./offerCards/OfferCard";
const WeOffer = () => {
  return (
    <div className={style.weofferBody}>
      <div className={style.weofferContainer}>
        <h1>We offer</h1>
        <p>
          Solace property management service <br />
          replaces your physical property manager <br />
          with a virtual one.
        </p>
      </div>
      <section className={style.offersContainer}>
        <OfferCard className={style.offercard}
          title="Client Money"
          li1="Rental account monitoring"
          li2="Requesting payments from tenants"
          li3="Delivering landlord & supplier statements"
          li4="Handling of all administrative tasks"
        />
        <OfferCard className={style.offercard}
          title="Maintenance"
          li1="Tenants report via online portal"
          li2="Choose and assign preferred contractor"
          li3="Track maintenance requests"
          li4="End-to-end management"
        />

        <OfferCard className={style.offercard}
          title="Compliance"
          li1="Ensuring UK letting requirements are met"
          li2="Deposit protection & safety certificates arranged"
          li3="Access to all documents online"
          li4="Keeping your properties legal"
        />
        <OfferCard className={style.offercard}
          title="Periodic Inspections"
          li1="Scheduling periodic property assessments"
          li2="Conducting thorough evaluations & reports"
          li3="Recommending repairs or maintenance"
          li4="Hassle and headache free"
        />
      </section>
    </div>
  );
};

export default WeOffer;
