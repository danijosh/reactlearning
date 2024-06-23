import React, { useState } from "react";
import style from "./contactus.module.scss";
const ContactUs = () => {
  const details = {
    email: "info@techsolutions.com",
    phone: "020 3355 5093",
  };
const [value,setValue] = useState({
  name:'',
  email:'',
  phone:'',
  agree:false
})

  const [error, setError] = useState({
    nameEr: "",
    emailEr: "",
    phoneEr: "",
    agreeEr:""
  });

  const checkfield=(eve)=>{
    eve.preventDefault()
    console.log(value);
    if(value.name===''){
      setError(prevError=>({
        ...prevError,
        nameEr:"*Name cannot be empty!"
      }))
    }
    if(value.email===''){
      setError(prevError=>({
        ...prevError,
        emailEr:"*Email cannot be empty!"
      }))
    }
    if(value.phone===''){
      setError(prevError=>({
        ...prevError,
        phoneEr:"*Phone cannot be empty!"
      }))
    }
    if(value.agree===false){
      setError(prevError=>({
        ...prevError,
        agreeEr:"Plaese Agree our Terms and Conditions"
      }))
    }
  }

  return (
    <div className={style.contactusBody}>
      <div className={style.maincontainer}>
        <section className={style.contactContainer}>
          <h1>Contact Us</h1>
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
        </section>

        <section className={style.formContainer}>
          <form onSubmit={checkfield}>
            <section className={style.nameEmailContainer}>
              <div className={style.nameContainer}>
                <input type="text" onChange={(eve)=>{
                  setValue({...value,
                    name:eve.target.value
                  })
                  setError({
                    ...error,
                    nameEr:''
                  })
                }} placeholder="Name" />
                <p>{error.nameEr}</p>
              </div>
              <div className={style.emailContainer}>
                <input type="email" onChange={(eve)=>{
                  setValue({
                    ...value,
                    email:eve.target.value
                  })
                  setError({
                    ...error,
                    emailEr:''
                  })
                }} placeholder="Email" />
                <p>{error.emailEr}</p>
              </div>
            </section>

            <section className={style.phoneAddressContainer}>
              <div className={style.phoneContainer}>
                <input type="phone"
                onChange={(eve)=>{
                  setValue({
                    ...value,
                    phone:eve.target.value
                  })
                  setError({
                    ...error,
                    phoneEr:''
                  })
                }} 
                 placeholder="Phone" />
                <p>{error.phoneEr}</p>
              </div>
              <div className={style.addressContainer}>
                <input type="text" placeholder="Address" />
              </div>
            </section>

            <section>
              <div className={style.messageContainer}>
                <input type="text" placeholder="Type your message here..." />
              </div>
            </section>

            <section>
              <div className={style.agreeContainer}>
                <input type="checkbox" checked={value.agree} onChange={(eve)=>{
                  setValue({...value,
                    agree:!value.agree})
                    setError({
                      ...error,
                      agreeEr:''
                    })
                }}/>
                <label htmlFor="">
                  <a href="">Agree our Privacy Policy and Terms of Service</a>
                </label>
                <p>{error.agreeEr}</p>
              </div>
            </section>
            <section className={style.submitContainer}>
              <button>Submit</button>
            </section>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
