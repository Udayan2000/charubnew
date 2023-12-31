import React, { useEffect, useState } from "react";
import HttpClientXml from "../utils/Utils/HttpClientXml";
import AuthService from "../Service/AuthService";
import toast from "react-hot-toast";

const Creator = ({ closeModal }) => {
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

  //Skills
  const [skills, setSkills] = useState([]);
  console.log(skills);
  //Skill ID
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedSkillsName, setselectedSkillsName] = useState([]);
  console.log("selectedSkillsName",selectedSkillsName)
  console.log(
    selectedSkills,
    "selectedskilssID",
    selectedSkillsName,
    "seletectedSKilss"
  );

  const [user, setUser] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [checkshowPassword, setCheckShowPassword] = useState(false);
  const [country, setCountry] = useState(false);
  const [error, setError] = useState();
  const [checked, setChecked] = useState(false);
  const [countryDetails, setCountryDetails] = useState([]);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleCheckPassword=()=>{
    setCheckShowPassword(!checkshowPassword);
  }
  const handleClicklist = () => {
    setCountry(!country);
  };
  //Checked
  const handleCheck = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    getAllCountryData();
    getAllSkills();
  }, []);
  const getAllCountryData = async () => {
    let res = await AuthService.GetAllCountry();
    if (res && res?.status) {
      setCountryDetails(res?.data);
      const usa = res?.data?.find((item) => item?.name === "United States");
      // console.log("idd", usa);
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

  const getAllSkills = async () => {
    let res = await AuthService.GetAllSkills();
    if (res && res?.status) {
      setSkills(res?.data);
    } else {
      console.log(res?.message);
    }
  };
  //selected Skilss
  const userSkilss = (id, skillname) => {
    // Add the skill ID to the array if it's not already present
    if (selectedSkills.length < 3) {
      if (
        !selectedSkills.includes(id) &&
        !selectedSkillsName.includes(skillname)
      ) {
        setSelectedSkills([...selectedSkills, id]);
        setselectedSkillsName([...selectedSkillsName, { name: skillname, id: id }]);
      }
    } else {
      toast.error("You Can add only 3 skills");
    }
  };
  //DeleteSkilss
  const DeleteSkilss = (name, id) => {
    setSelectedSkills(selectedSkills.filter((x) => x !== id));
    setselectedSkillsName(selectedSkillsName.filter((x) => x.name !== name));
  };
  //taking values from input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const validation = async () => {
    let error = {};
    if (user.firstname === "") {
      error.fullName = "first name Name required";
      return await toast.error("First Name Required");
    }
    if (user.lastname === "") {
      error.lastname = "lastname required";
      return await toast.error("Last Name Required");
    }
    if (user.email === "") {
      error.email = "Email required";
      return await toast.error("Email Required");
    }
    if (user.countryCode === "") {
      error.countryCode = "Country Required";
      return await toast.error("Code Required");
    }
    if (user.phoneNumber === "") {
      error.phoneNumber = "Phone Number Required";
      return await toast.error("Phone Number Required");
    }
    if (user.password === "") {
      error.password = "password required";
      return await toast.error("Password Required");
    }
    if (user.password !== user.checkPassword) {
      error.checkPassword = "password mismatched";
      return await toast.error("Password Mismatched");
    }
    if (selectedSkills.length === 0) {
      error.selectedSkills = "check box";
      return await toast.error("Select at least one skill");
    }
    if (!checked) {
      error.checked = "check box";
      return await toast.error("Please Check Terms & Condition");
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
      userType: "buddingTalent",
      skillID: selectedSkills,
      // "skillID": ["63dcc310811c87e00cd3a676"]
    };

    //  return console.log("DATAfgdgdfgdgdfd" , data);

    const err = await validation();
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

  return (
    <>
      <div className="influencermodal">
        <div className="smartphone">
          <div className="wrap">
            <div className="scrlsmrt">
              <div className="influencer_content">
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
                  <form>
                    <div className="crttxtinpt">
                      <input
                        type="text"
                        name="firstname"
                        value={user.firstname}
                        placeholder="Your First Name"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="crttxtinpt">
                      <input
                        type="text"
                        name="lastname"
                        value={user.lastname}
                        placeholder="Your Last Name"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="crttxtinpt">
                      <input
                        type="text"
                        name="email"
                        value={user.email}
                        placeholder="Your Email"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="txtinptphn">
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
                        </div>
                      )}
                    </div>
                    <div className="crttxtinpt">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={(e) => handleChange(e)}
                      />
                      <div className="shwinpt" onClick={handleTogglePassword}>
                        {showPassword ? (
                          <i className="fa-solid fa-eye-slash"></i>
                        ) : (
                          <i className="fa-regular fa-eye"></i>
                        )}
                      </div>
                    </div>
                    <div className="crttxtinpt">
                      <input
                        type={checkshowPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        name="checkPassword"
                        value={user.checkPassword}
                        onChange={handleChange}
                      />
                      <div className="shwinpt" onClick={handleToggleCheckPassword}>
                        {checkshowPassword ? (
                          <i className="fa-solid fa-eye-slash"></i>
                        ) : (
                          <i className="fa-regular fa-eye"></i>
                        )}
                      </div>
                    </div>
                    <div className="sklinct">
                      {/* <i className="fa-solid fa-arrow-left-long"></i> */}
                      <p className="crttxtacnt">Add Your Skill</p>
                    </div>
                    <div className="sklmax">
                      <p className="skltxt">Maximum 3 skills</p>
                      <div className="sprtdnccmd">
                        {skills?.map((item, index) => {
                          return (
                            <>
                              <div
                                className="btnskl"
                                key={index}
                                onClick={() => {
                                  console.log(item, "userskills");
                                  userSkilss(item?._id, item?.skillName);
                                }}
                              >
                                {item?.skillName}
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>

                    <div className="addskl">
                      <p className="skltxt"> Selected Skill</p>
                      <div className="sdmotohrflx">
                        {selectedSkillsName?.map((item, index) => {
                          console.log("item", item)
                          return (
                            <>
                              <div className="btnsklitm">
                                {item?.name}
                                <div className="crsicn" onClick={()=>DeleteSkilss(item?.name, item?.id)}>
                                  <i className="fa-solid fa-xmark"></i>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>

                    <div className="chcktrm">
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
                  </form>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Creator;
