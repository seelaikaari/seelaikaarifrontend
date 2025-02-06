

import { useState } from "react";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//images
import loginimg from "../../assets/images/login/login.png"
//icons
import { FaUserCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiLoginCircleLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { IoMail } from "react-icons/io5";
//Css
import "../LoginSignup/LoginSignup.css";

const LoginSignup = () => {
    const [loginsignuotoggle, setLoginsignuotoggle] = useState(true)
    const [signupformdata, setSignupformdata] = useState({
        name: "",
        email: "",
        password: "",
        phoneno: "",
    })
    const [signuperror, setSignupError] = useState({})

    const [loginerror, setLoginError] = useState({})
    const [loginFormdata, setLoginFormdata] = useState({
        email: "",
        password: ""
    })
    const handelLoginformsubmite = (e) => {
        e.preventDefault()
        if (!loginhandelerror()) {
            return
        }

        toast.success('Loged In successfully!')
        setLoginFormdata({
            email: "",
            password: ""
        })
    }
    const loginhandelerror = () => {
        const newErrors = {};
        if (!loginFormdata.password) newErrors.password = "Password is required.";
        if (!loginFormdata.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(loginFormdata.email)) {
            newErrors.email = "Invalid email format.";
        }
        setLoginError(newErrors)
        return Object.keys(newErrors).length === 0;
    }

    const handelSignupformsubmit = (e) => {
        e.preventDefault()
        if (!handelSignupformError()) {
            return
        }
        toast.success('Log In successfully!')
        setSignupformdata({
            name: "",
            email: "",
            password: "",
            phoneno: "",
        })
    }
    const handelSignupformError = () => {
        var newErrors = {}
        if (!signupformdata.name) newErrors.name = "Name is required.";

        if (!signupformdata.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(signupformdata.email)) {
            newErrors.email = "Invalid email format.";
        }

        if (!signupformdata.phoneno) {
            newErrors.phoneno = "Phone number is required.";
        } else if (!/^\d{10}$/.test(signupformdata.phoneno)) {
            newErrors.phoneno = "Phone number must be 10 digits.";
        }
        if (!signupformdata.password.length) {
            newErrors.password = "Password is required."
        } else if (signupformdata.password.length < 8) {
            newErrors.password = "Password should be minimun of 8 letters."
        }
        setSignupError(newErrors)

        return Object.keys(newErrors).length === 0;
    }


    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <section className="d-flex align-items-center justify-content-center">
                <div className="login-wrapper">
                    <div className="row align-items-center row-gap-5 login-rev">
                        <div className="col-lg-6 col-md-5 login-img-wrap">
                            <img src={loginimg} alt="" className="w-100" />
                        </div>
                        <div className="col-lg-6 col-md-7 login-inp-wrapper">
                            {
                                loginsignuotoggle ?
                                    <div>
                                        <h4 className="login-heading">Log In</h4>
                                        <form action="" onSubmit={handelLoginformsubmite} className="login-form-wrapper">
                                            <div>
                                                <div className="login-inp-pos">
                                                    <input type="text" value={loginFormdata.email}
                                                        onChange={(e) => setLoginFormdata({ ...loginFormdata, email: e.target.value })}
                                                        className="login-input"
                                                        placeholder="Enter Your Email" />
                                                    <FaUserCircle className="log-inp-icon" />
                                                </div>
                                                {loginerror.email && <div className="log-err">{loginerror.email}</div>}
                                            </div>
                                            <div>
                                                <div className="login-inp-pos">
                                                    <input type="password"
                                                        value={loginFormdata.password}
                                                        onChange={(e) => setLoginFormdata({ ...loginFormdata, password: e.target.value })}
                                                        className="login-input"
                                                        placeholder="Enter Your Password" />
                                                    <RiLockPasswordLine className="log-inp-icon" />
                                                </div>
                                                {loginerror.password && <div className="log-err">{loginerror.password}</div>}
                                            </div>
                                            <div className="d-flex align-items-center gap-2 pt-2 login-inp-pos">
                                                <input type="checkbox" id="loginRem" />
                                                <label htmlFor="loginRem" className="login-label">Remember Me</label>
                                            </div>
                                            <button className="login-btn-f">Log In <RiLoginCircleLine /></button>
                                        </form>
                                        <button className="login-google-btn"><FcGoogle />Continue with Google</button>
                                        <p className="dont-btn-log" onClick={()=>setLoginsignuotoggle(false)}>Don&apos;t have an account yet? <span>Sign up</span></p>
                                    </div>
                                    :
                                    <div>
                                        <h4 className="login-heading">Sign Up</h4>
                                        <form action="" onSubmit={handelSignupformsubmit} className="login-form-wrapper">
                                            <div>
                                                <div className="login-inp-pos">
                                                    <input type="text" value={signupformdata.name}
                                                        onChange={(e) => setSignupformdata({ ...signupformdata, name: e.target.value })}
                                                        className="login-input"
                                                        placeholder="Enter Your Name" />
                                                    <FaUserCircle className="log-inp-icon" />
                                                </div>
                                                {signuperror.name && <div className="log-err">{signuperror.name}</div>}
                                            </div>
                                            <div>
                                                <div className="login-inp-pos">
                                                    <input type="text" value={signupformdata.email}
                                                        onChange={(e) => setSignupformdata({ ...signupformdata, email: e.target.value })}
                                                        className="login-input"
                                                        placeholder="Enter Your Email" />
                                                    <IoMail className="log-inp-icon" />
                                                </div>
                                                {signuperror.email && <div className="log-err">{signuperror.email}</div>}
                                            </div>
                                            <div>
                                                <div className="login-inp-pos">
                                                    <input type="text" value={signupformdata.phoneno}
                                                        onChange={(e) => setSignupformdata({ ...signupformdata, phoneno: e.target.value })}
                                                        className="login-input"
                                                        placeholder="Enter Your Phone" />
                                                    <FaPhone className="log-inp-icon" />
                                                </div>
                                                {signuperror.phoneno && <div className="log-err">{signuperror.phoneno}</div>}
                                            </div>
                                            <div>
                                                <div className="login-inp-pos">
                                                    <input type="password"
                                                        value={signupformdata.password}
                                                        onChange={(e) => setSignupformdata({ ...signupformdata, password: e.target.value })}
                                                        className="login-input"
                                                        placeholder="Enter Your Password" />
                                                    <RiLockPasswordLine className="log-inp-icon" />
                                                </div>
                                                {signuperror.password && <div className="log-err">{signuperror.password}</div>}
                                            </div>
                                            <button className="login-btn-f">Sign up <RiLoginCircleLine /></button>
                                        </form>
                                        <button className="login-google-btn"><FcGoogle />Continue with Google</button>
                                        <p className="dont-btn-log" onClick={()=>setLoginsignuotoggle(true)}>Already have an account? <span>Log In</span></p>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginSignup
