import "./Popup.css"
import React, { useRef, useState } from 'react';
import email from "../../assets/images/icons/email.png"
const Popup = ({handleVerifyCode,handleEmailVerification,setVerificationCode}) => {
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const [verifyotp,setVerifyotp]=useState({
        imp1:"",
        imp2:"",
        imp3:"",
        imp4:"",
    })
   if(verifyotp.imp1 && verifyotp.imp2 && verifyotp.imp3 && verifyotp.imp4){
    setVerificationCode(verifyotp.imp1+verifyotp.imp2+verifyotp.imp3+verifyotp.imp4)
   }
    const handleChange = (e, index) => {
        const value = e.target.value;
        // Handle backspace: if the input is empty, focus the previous input field
        if (value.length === 0 && index > 0) {
            inputRefs[index - 1].current.focus();
          }
        // Ensure the user can only input a single number
        if (value.length > 1) {
          e.target.value = value.slice(0, 1); // Truncate to one character
        }
    
        // Focus the next input field once the current one has a value
        if (value.length === 1 && index < inputRefs.length - 1) {
          inputRefs[index + 1].current.focus();
        }
    
        
      };
    return (
        <>
            <div className="popup-wrapper">
                <div className="popup-inner-email">
                    <img src={email} alt="" width="70px" />
                    <h2 className="popupad">Verify Your Email Address</h2>

                    <div className="popupinp-wrapper">
                        <input
                            type="number" className="popupinp"
                            min="0"
                            max="9"
                            ref={inputRefs[0]}
                             maxLength="1"
                            onChange={(e) => {handleChange(e, 0); setVerifyotp({...verifyotp,imp1:e.target.value})}}
                        />
                        <input
                            type="number"
                            className="popupinp"
                            min="0"
                             maxLength="1"
                            max="9"
                            ref={inputRefs[1]}
                            onChange={(e) =>{ handleChange(e, 1); setVerifyotp({...verifyotp,imp2:e.target.value})}}
                        />
                        <input
                            type="number"
                            className="popupinp"
                            min="0"
                            max="9"
                             maxLength="1"
                            ref={inputRefs[2]}
                            onChange={(e) =>{ handleChange(e, 2); setVerifyotp({...verifyotp,imp3:e.target.value})}}
                        />
                        <input
                            type="number"
                            className="popupinp"
                            min="0"
                             maxLength="1"
                            max="9"
                            ref={inputRefs[3]}
                            onChange={(e) => {handleChange(e, 3); setVerifyotp({...verifyotp,imp4:e.target.value})}}
                        />
                    </div>
                    <button className="verifypopup" onClick={handleVerifyCode} disabled={verifyotp.imp1=="" ||verifyotp.imp2==""||verifyotp.imp3==""||verifyotp.imp4==""}>Verify</button><br />
                    <button className="resend-code" onClick={handleEmailVerification} >Resend Code </button>
                </div>
            </div>

        </>
    )
}

export default Popup