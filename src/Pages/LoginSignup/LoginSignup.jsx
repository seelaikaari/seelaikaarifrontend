import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import loginimg from "../../assets/images/login/login.png";
//icons
import { FaUserCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiLoginCircleLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { IoMail } from "react-icons/io5";
import { jwtDecode } from "jwt-decode";
//Css
import "../LoginSignup/LoginSignup.css";
import axios from "axios";
const API_URL = "http://localhost:5000";

import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GoogleLoginButton = ({ btntext }) => {
  const handleSuccess = async (response) => {
    const decoded = jwtDecode(response.credential);
    console.log("User Info:", decoded);
    const sigindata = {
      name: decoded.name,
      email: decoded.email,
    };
    try {
      const response = await axios.post(
        `${API_URL}/api/users/register`,
        sigindata
      );

      toast.success("Signed up successfully!");
    } catch (error) {
      if (error.response) {
        // Server responded with a status outside the 2xx range
        console.error("Error:", error.response.data);
        toast.error(error.response.data.error || "Registration failed");
      } else if (error.request) {
        console.error("No response received:", error.request);
        toast.error("No server response");
      } else {
        console.error("Unexpected error:", error.message);
        toast.error("An error occurred");
      }
    }
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId="498241484142-90guse0fmn72senci02m639as366jfh1.apps.googleusercontent.com">
      <div className="flex justify-center mt-4">
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          text="continue_with"
        />
      </div>
    </GoogleOAuthProvider>
  );
};

const LoginSignup = () => {
  const [loginsignuotoggle, setLoginsignuotoggle] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const [signupformdata, setSignupformdata] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [signuperror, setSignupError] = useState({});

  const [loginerror, setLoginError] = useState({});
  const [loginFormdata, setLoginFormdata] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    // Check if user is already remembered
    const storedEmail = localStorage.getItem("rememberedEmail");
    if (storedEmail) {
      setLoginFormdata({ ...loginFormdata, email: storedEmail });
      setRememberMe(true);
    }
  }, []);
  const handelLoginformsubmite = async (e) => {
    e.preventDefault();
    if (!loginhandelerror()) {
      return;
    }
    try {
      const response = await axios.post(
        `${API_URL}/api/users/login`,
        loginFormdata
      );
      console.log(response);

      if (response.data.token) {
        if (rememberMe) {
          localStorage.setItem("rememberedEmail", loginFormdata.email); // Store email for next time
          localStorage.setItem("token", response.data.token); // Store JWT token
        } else {
          sessionStorage.setItem("token", response.data.token); // Store temporarily
        }
      }
      toast.success("Loged In successfully!");
      setLoginFormdata({
        email: "",
        password: "",
      });
    } catch (error) {
      if (error.response) {
        // Server responded with a status outside the 2xx range
        console.error("Error:", error.response.data);
        setLoginError(
          error.response.data.error === "Invalid credentials"
            ? { password: error.response.data.error }
            : { email: error.response.data.error }
        );
        toast.error(error.response.data.error || "Login failed");
      } else if (error.request) {
        console.error("No response received:", error.request);
        toast.error("No server response");
      } else {
        console.error("Unexpected error:", error.message);
        toast.error("An error occurred");
      }
    }
  };
  const loginhandelerror = () => {
    const newErrors = {};
    if (!loginFormdata.password) newErrors.password = "Password is required.";
    if (!loginFormdata.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(loginFormdata.email)) {
      newErrors.email = "Invalid email format.";
    }
    setLoginError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handelSignupformsubmit = async (e) => {
    // console.log(response);
    e.preventDefault();
    if (!handelSignupformError()) {
      return;
    }
    try {
      const response = await axios.post(
        `${API_URL}/api/users/register`,
        signupformdata
      );

      toast.success("Signed up successfully!");
      setSignupformdata({ name: "", email: "", password: "", phone: "" });
    } catch (error) {
      if (error.response) {
        // Server responded with a status outside the 2xx range
        console.error("Error:", error.response.data);
        setSignupError({ email: error.response.data.error });
        toast.error(error.response.data.error || "Registration failed");
      } else if (error.request) {
        console.error("No response received:", error.request);
        toast.error("No server response");
      } else {
        console.error("Unexpected error:", error.message);
        toast.error("An error occurred");
      }
    }
  };
  const handelSignupformError = () => {
    var newErrors = {};
    if (!signupformdata.name) newErrors.name = "Name is required.";

    if (!signupformdata.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(signupformdata.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!signupformdata.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(signupformdata.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!signupformdata.password.length) {
      newErrors.password = "Password is required.";
    } else if (signupformdata.password.length < 8) {
      newErrors.password = "Password should be minimun of 8 letters.";
    }
    setSignupError(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <>
      <section className="d-flex align-items-center justify-content-center">
        <div className="login-wrapper">
          <div className="row align-items-center row-gap-5 login-rev">
            <div className="col-lg-6 col-md-5 login-img-wrap">
              <img src={loginimg} alt="" className="w-100" />
            </div>
            <div className="col-lg-6 col-md-7 login-inp-wrapper">
              {loginsignuotoggle ? (
                <div>
                  <h4 className="login-heading">Log In</h4>
                  <form
                    action=""
                    onSubmit={handelLoginformsubmite}
                    className="login-form-wrapper"
                  >
                    <div>
                      <div className="login-inp-pos">
                        <input
                          type="text"
                          value={loginFormdata.email}
                          onChange={(e) =>
                            setLoginFormdata({
                              ...loginFormdata,
                              email: e.target.value,
                            })
                          }
                          className="login-input"
                          placeholder="Enter Your Email"
                        />
                        <FaUserCircle className="log-inp-icon" />
                      </div>
                      {loginerror.email && (
                        <div className="log-err">{loginerror.email}</div>
                      )}
                    </div>
                    <div>
                      <div className="login-inp-pos">
                        <input
                          type="password"
                          value={loginFormdata.password}
                          onChange={(e) =>
                            setLoginFormdata({
                              ...loginFormdata,
                              password: e.target.value,
                            })
                          }
                          className="login-input"
                          placeholder="Enter Your Password"
                        />
                        <RiLockPasswordLine className="log-inp-icon" />
                      </div>
                      {loginerror.password && (
                        <div className="log-err">{loginerror.password}</div>
                      )}
                    </div>
                    <div className="d-flex align-items-center gap-2 pt-2 login-inp-pos">
                      <input
                        type="checkbox"
                        id="loginRem"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <label htmlFor="loginRem" className="login-label">
                        Remember Me
                      </label>
                    </div>
                    <button className="login-btn-f">
                      Log In <RiLoginCircleLine />
                    </button>
                  </form>
                  <GoogleLoginButton btntext={"Continue with Google"} />
                  {/* <button className="login-google-btn"><FcGoogle />Continue with Google</button> */}
                         <p className="dont-btn-log" onClick={()=>setLoginsignuotoggle(false)}>Don&apos;t have an account yet? <span>Sign up</span></p> 
                </div>
              ) : (
                <div>
                  <h4 className="login-heading">Sign Up</h4>
                  <form
                    action=""
                    onSubmit={handelSignupformsubmit}
                    className="login-form-wrapper"
                  >
                    <div>
                      <div className="login-inp-pos">
                        <input
                          type="text"
                          value={signupformdata.name}
                          onChange={(e) =>
                            setSignupformdata({
                              ...signupformdata,
                              name: e.target.value,
                            })
                          }
                          className="login-input"
                          placeholder="Enter Your Name"
                        />
                        <FaUserCircle className="log-inp-icon" />
                      </div>
                      {signuperror.name && (
                        <div className="log-err">{signuperror.name}</div>
                      )}
                    </div>
                    <div>
                      <div className="login-inp-pos">
                        <input
                          type="text"
                          value={signupformdata.email}
                          onChange={(e) =>
                            setSignupformdata({
                              ...signupformdata,
                              email: e.target.value,
                            })
                          }
                          className="login-input"
                          placeholder="Enter Your Email"
                        />
                        <IoMail className="log-inp-icon" />
                      </div>
                      {signuperror.email && (
                        <div className="log-err">{signuperror.email}</div>
                      )}
                    </div>
                    <div>
                      <div className="login-inp-pos">
                        <input
                          type="text"
                          value={signupformdata.phone}
                          onChange={(e) =>
                            setSignupformdata({
                              ...signupformdata,
                              phone: e.target.value,
                            })
                          }
                          className="login-input"
                          placeholder="Enter Your Phone"
                        />
                        <FaPhone className="log-inp-icon" />
                      </div>
                      {signuperror.phone && (
                        <div className="log-err">{signuperror.phone}</div>
                      )}
                    </div>
                    <div>
                      <div className="login-inp-pos">
                        <input
                          type="password"
                          value={signupformdata.password}
                          onChange={(e) =>
                            setSignupformdata({
                              ...signupformdata,
                              password: e.target.value,
                            })
                          }
                          className="login-input"
                          placeholder="Enter Your Password"
                        />
                        <RiLockPasswordLine className="log-inp-icon" />
                      </div>
                      {signuperror.password && (
                        <div className="log-err">{signuperror.password}</div>
                      )}
                    </div>
                    <button className="login-btn-f">
                      Sign up <RiLoginCircleLine />
                    </button>
                  </form>
                  <GoogleLoginButton btntext={"Continue with Google"} />
                  {/* <button className="login-google-btn"><FcGoogle />Continue with Google</button>*/}
                                        <p className="dont-btn-log" onClick={()=>setLoginsignuotoggle(true)}>Already have an account? <span>Log In</span></p> 
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginSignup;
