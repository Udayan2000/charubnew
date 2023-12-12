import React, { useState } from "react";
import Data from "../CountryJson/Data.json";

const Scout = ({ closeModal }) => {
  const [password, setPassword] = useState("");
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
            <form>
              <div className="txtinpt">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="txtinpt">
                <input type="text" placeholder="Your Email" />
              </div>
              <div className="txtinptphn">
                <input type="" placeholder=" Phone Number" />
                <div className="numbflgarrow">
                  <i className="fa-solid fa-flag"></i>
                </div>
                <div className="arrow" onClick={handleClicklist}>
                  <i className="fa-solid fa-caret-down"></i>
                </div>
                {country && (
                  <div className="listcntry">
                    <ul>
                      <ul>
                        {Data?.map((item, index) => {
                          // console.log(item)
                          return (
                            <>
                              <li className="cntrynmb">
                                <span className="">{item.emoji}</span>
                                <span className="">{item?.phone?.[0]}</span>
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
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
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
                  value={password}
                  placeholder="ShowPassword"
                  onChange={(e) => setPassword(e.target.value)}
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
                <input type="checkbox" />
                <p className="trms">Terms & Condition</p>
              </div>
              <div className="sgnbtn">Sign Up</div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scout;
