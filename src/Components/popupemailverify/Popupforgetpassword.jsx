import { toast } from "react-toastify";
import "./Popup.css"
import React, { useRef, useState } from 'react';
import email from "../../assets/images/icons/email.png"
const Popupforgetpassword = () => {
    const [fpemail,setFpemail]=useState();
    const handleresendresetpassword=()=>{

    }

    return (
        <>
            <div className="popup-wrapper">
                <div className="popup-inner-email">
                    <button className="pop-close-btn" onClick={()=>setPopuptoggle(false)}></button>
                    <img src={email} alt="" width="70px" />
                    <h2 className="popupad">Enter your email address</h2>

                    <div className="popupinp-wrapper">
                        <input
                            type="email" className="popupinp"
                             value={fpemail}
                            onChange={(e) => {setFpemail(e.target.value)}}
                        />
                     
                    </div>
                    <button className="verifypopup" onClick={handleresendresetpassword} >reset password</button><br />
                </div>
            </div>

        </>
    )
}

export default Popupforgetpassword;