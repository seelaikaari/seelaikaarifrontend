import { toast } from "react-toastify";
import "./Popup.css"
import React, { useRef, useState } from 'react';
import email from "../../assets/images/icons/email.png"
import { IoClose } from "react-icons/io5";
const Popup = ({setPopuptoggle}) => {
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const [verifyotp,setVerifyotp]=useState({
        otpnum1:"",
        otpnum2:"",
        otpnum3:"",
        otpnum4:"",
    })
    
    
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

      const handelverifyotp=()=>{
        if (verifyotp.otpnum1==""||verifyotp.otpnum2==""||verifyotp.otpnum3==""||verifyotp.otpnum4==""){
            toast.error("Invalid OTP");
            return 
        }
        console.log("verified");
        setVerifyotp({
        otpnum1:"",
        otpnum2:"",
        otpnum3:"",
        otpnum4:"",
    })
      }
    return (
        <>
            <div className="popup-wrapper">
                <div className="popup-inner-email">
                    <button className="pop-close-btn" onClick={()=>setPopuptoggle(false)}><IoClose/></button>
                    <img src={email} alt="" width="70px" />
                    <h2 className="popupad">Verify Your Email Address</h2>

                    <div className="popupinp-wrapper">
                        <input
                            type="number" className="popupinp"
                            min="0"
                            max="9"
                            ref={inputRefs[0]}
                             maxLength="1"
                             value={verifyotp.otpnum1}
                            onChange={(e) => {handleChange(e, 0); setVerifyotp({...verifyotp,otpnum1:e.target.value})}}
                        />
                        <input
                            type="number"
                            className="popupinp"
                            min="0"
                             maxLength="1"
                            max="9"
                            ref={inputRefs[1]}
                            value={verifyotp.otpnum2}
                            onChange={(e) =>{ handleChange(e, 1); setVerifyotp({...verifyotp,otpnum2:e.target.value})}}
                        />
                        <input
                            type="number"
                            className="popupinp"
                            min="0"
                            max="9"
                             maxLength="1"
                            ref={inputRefs[2]}
                            value={verifyotp.otpnum3}
                            onChange={(e) =>{ handleChange(e, 2); setVerifyotp({...verifyotp,otpnum3:e.target.value})}}
                        />
                        <input
                            type="number"
                            className="popupinp"
                            min="0"
                             maxLength="1"
                            max="9"
                            ref={inputRefs[3]}
                            value={verifyotp.otpnum4}
                            onChange={(e) => {handleChange(e, 3); setVerifyotp({...verifyotp,otpnum4:e.target.value})}}
                        />
                    </div>
                    <button className="verifypopup" onClick={handelverifyotp}>Verify</button><br />
                    <button className="resend-code">Resend Code </button>
                </div>
            </div>

        </>
    )
}

export default Popup