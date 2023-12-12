import React, { useState } from "react";
import Data from "../CountryJson/Data.json";
import HttpClientXml from "../utils/Utils/HttpClientXml";

const Scout = ({ closeModal }) => {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    countryCode: "",
    emoji: "",
    phoneNumber: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);
  const [checkPassword, setCheckPassword] = useState("");
  const [error, setError] = useState();
  // Validate the form before submission

  const [showPassword, setShowPassword] = useState(false);
  const [country, setCountry] = useState(false);
  const handledefault = (event) => {
    event.stopPropagation();
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClicklist = () => {
    setCountry(!country);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const validation = () => {
    let error = {};
    if (user.firstname === "") {
      error.fullName = "Name required";
      alert("name");
    }
    if (user.lastname === "") {
      error.lastname = "Email required";
      alert("lastname");
    }
    if (user.email === "") {
      error.email = "Email required";
      alert("email");
    }
    if (user.countryCode === "") {
      error.countryCode = "Country required";
      alert("code");
    }
    if (user.phoneNumber === "") {
      error.phoneNumber = "phoneNumber required";
      alert("number");
    }
    if (user.password === "") {
      error.password = "password required";
      alert("password");
    }
    if (user.password !== checkPassword) {
      error.checkPassword = "password mismatched";
      alert("checkpassword");
    }
    return error;
  };
  const handleCountryCode = (code, countryEmoji) => {
    // console.log("valuefgrr",value)
    setUser({ ...user, countryCode: code, emoji: countryEmoji });
    setCountry(false);
  };


  const SignUp = async(e) => {
    e.preventDefault();

    const data={
      "firstName": user.firstname,
      "lastName": user.lastname,
      "email":user.email ,
      "password": user.password,
      "phone": user.phoneNumber,
      "userType": "Scout",
      // "skillID": ["63dcc310811c87e00cd3a676"]
    }

    const res=await HttpClientXml.requestData("register",data,"POST")

    const err = validation();
    setError(err);
    if (Object.keys(err).length === 0) {
      const data = { ...user };
      console.log(data);
      alert("submit");
    } else {
      alert("Please check the fields");
    }
  };

  return (
    <>
      <div className="influencermodal">
        <div
          className="influencer_content"
          onClick={(event) => handledefault(event)}
        >
          <div className="icnacnt">
            <div className="" onClick={() => closeModal()}>
              <i className="fa-solid fa-arrow-left-long"></i>
            </div>
            <p className="crttxtacnt">create An Account</p>
          </div>
          <div className="crs" onClick={() => closeModal()}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="">
            {/* <form> */}
            {/*full name*/}
            <div className="txtinpt">
              <input
                type="text"
                name="firstname"
                placeholder="Your First Name"
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/*last name*/}
            <div className="txtinpt">
              <input
                type="text"
                name="lastname"
                placeholder="Your Last Name"
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/*Email*/}
            <div className="txtinpt">
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="txtinptphn">
              {/*phone number* type no defined yet */}
              <input
                type=""
                name="phoneNumber"
                placeholder=" Phone Number"
                onChange={(e) => handleChange(e)}
              />
              <div className="flgarwflx">
                <div className="numbflgarrow">
                  {user.countryCode ? (
                    user.emoji + user.countryCode
                  ) : (
                    <i className="fa-solid fa-flag"></i>
                  )}
                </div>
                <div className="arrow" onClick={handleClicklist}>
                  <i className="fa-solid fa-caret-down"></i>
                </div>
              </div>

              {country && (
                <div className="listcntry">
                  <ul>
                    <ul>
                      {/*country code*/}
                      {Data?.map((item, index) => {
                        // console.log(item)
                        return (
                          <>
                            <li className="cntrynmb">
                              <span className="">{item.emoji}</span>
                              <span
                                className=""
                                key={index}
                                onClick={() =>
                                  handleCountryCode(
                                    item?.phone?.[0],
                                    item?.emoji
                                  )
                                }
                              >
                                {item?.name}
                              </span>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </ul>
                </div>
              )}
            </div>
            <div className="txtinpt">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={(e) => handleChange(e)}
              />
              <div className="icnshw" onClick={handleTogglePassword}>
                {showPassword ? (
                  <i className="fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-regular fa-eye"></i>
                )}
              </div>
            </div>
            <div className="txtinpt">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="ShowPassword"
                value={checkPassword}
                onChange={(e) => setCheckPassword(e.target.value)}
              />
              <div className="icnshw" onClick={handleTogglePassword}>
                {showPassword ? (
                  <i className="fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-regular fa-eye"></i>
                )}
              </div>
            </div>
            <div className="chcktrm">
              {/*Check box*/}
              <input type="checkbox" />
              <p className="trms">Terms & Condition</p>
            </div>
            <div className="sgnbtn" onClick={SignUp}>
              Sign Up
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Scout;
