import React, { useEffect, useState } from "react";
import HttpClientXml from "../utils/Utils/HttpClientXml";
import AuthService from "../Service/AuthService";
import toast from "react-hot-toast";

const Scout = ({ closeModal }) => {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    countryCode: "",
    emoji: "",
    phoneNumber: "",
    password: "",
    checkPassword: "",
    countryId: "",
  };

  const [user, setUser] = useState(initialState);
  const [checked, setChecked] = useState(false);
  console.log("checked", checked);
  const [error, setError] = useState();
  // Validate the form before submission

  const [showPassword, setShowPassword] = useState(false);
  const [checkshowPassword, setCheckShowPassword] = useState(false);
  const [country, setCountry] = useState(false);
  const [countryDetails, setCountryDetails] = useState([]);

  //Checked
  const handleCheck = () => {
    setChecked(!checked);
  };
  useEffect(() => {
    getAllCountryData();
  }, []);

  const getAllCountryData = async () => {
    let res = await AuthService.GetAllCountry();
    if (res && res?.status) {
      setCountryDetails(res?.data);
      const usa = res?.data?.find((item) => item?.name === "United States");
      console.log("idd", usa);
      setUser({
        ...user,
        countryId: usa?._id,
        countryCode: usa?.phone_code,
        emoji: usa?.emoji,
      });
    } else {
      console.log(res?.message);
    }
  };

  const handledefault = (event) => {
    event.stopPropagation();
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleCheckPassword=()=>{
    setCheckShowPassword(!checkshowPassword);
  }
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
      error.fullName = "first name Name required";
      return toast.error("first name required");
    }
    if (user.lastname === "") {
      error.lastname = "lastname required";
      return toast.error("lastname required");
    }
    if (user.email === "") {
      error.email = "Email required";
      return toast.error("email required");
    }
    if (user.countryCode === "") {
      error.countryCode = "Country required";
      return toast.error("code required");
    }
    if (user.phoneNumber === "") {
      error.phoneNumber = "phoneNumber required";
      return toast.error("phonenumber required");
    }
    if (user.password === "") {
      error.password = "password required";
      return toast.error("password");
    }
    if (user.password !== user.checkPassword) {
      error.checkPassword = "password mismatched";
      return toast.error("checkpassword");
    }
    if (!checked) {
      error.checked = "check box";
      return toast.error("tick the checkbox");
    }
    return error;
  };
  const handleCountryCode = (code, countryEmoji, CountryId) => {
    // console.log("valuefgrr",value)
    setUser({
      ...user,
      countryCode: code,
      emoji: countryEmoji,
      countryId: CountryId,
    });
    setCountry(false);
  };

  const SignUp = async (e) => {
    e.preventDefault();

    const data = {
      firstName: user.firstname,
      lastName: user.lastname,
      email: user.email,
      password: user.password,
      phone: user.phoneNumber,
      countryID: user.countryId,
      userType: "Scout",
      // "skillID": ["63dcc310811c87e00cd3a676"]
    };

    //  return console.log("DATAfgdgdfgdgdfd" , data);

    const err = validation();
    setError(err);
    if (Object.keys(err).length === 0) {
      const res = await AuthService.Register(data);
      if (res && res?.status) {
        toast.success("Register Successfully");
        setUser(initialState);
        closeModal();
        
      } else {
        return toast.error(res?.message);
      }
      // console.log("ressDD", res);
    }
  };

  //

  return (
    <>
      <div className="influencermodal">
        <div className="smartphone">
          <div className="scrlsmrt">
          <div
            className="influencer_content"
            onClick={(event) => handledefault(event)}
          >
            <div className="icnacnt">
              <div className="" onClick={() => closeModal()}>
                <i className="fa-solid fa-arrow-left-long"></i>
              </div>
              <p className="crttxtacnt">Create An Account</p>
            </div>
            <div className="crs" onClick={() => closeModal()}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="scrlwrp">
              {/* <form> */}
              {/*full name*/}
              <div className="txtinpt">
                <input
                  type="text"
                  name="firstname"
                  value={user.firstname}
                  placeholder="Your First Name"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              {/*last name*/}
              <div className="txtinpt">
                <input
                  type="text"
                  name="lastname"
                  value={user.lastname}
                  placeholder="Your Last Name"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              {/*Email*/}
              <div className="txtinpt">
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  placeholder="Your Email"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="txtinptphn">
                {/*phone number* type no defined yet */}
                <input
                  type="number"
                  name="phoneNumber"
                  value={user.phoneNumber}
                  placeholder=" Phone Number"
                  onChange={(e) => handleChange(e)}
                />
                <div className="flgarwflx">
                  <div className="numbflgarrow">
                    {user.countryCode ? (
                      user.emoji + "+" + user.countryCode
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
                        {countryDetails?.map((item, index) => {
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
                                      item?.phone_code,
                                      item?.emoji,
                                      item?._id
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
                  value={user.password}
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
                  type={checkshowPassword ? "text" : "password"}
                  placeholder="ShowPassword"
                  name="checkPassword"
                  value={user.checkPassword}
                  onChange={handleChange}
                />
                <div className="icnshw" onClick={handleToggleCheckPassword}>
                  {checkshowPassword ? (
                    <i className="fa-solid fa-eye-slash"></i>
                  ) : (
                    <i className="fa-regular fa-eye"></i>
                  )}
                </div>
              </div>
              <div className="chcktrm">
                {/*Check box*/}
                <input
                  type="checkbox"
                  checked={checked ? true : false}
                  onClick={handleCheck}
                />
                <p className="trms">Terms & Condition</p>
              </div>
              <div className="sgnbtn" onClick={SignUp}>
               Register
              </div>
              {/* </form> */}
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scout;
