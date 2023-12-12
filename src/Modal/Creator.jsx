import React, { useState } from 'react'

const Creator = ({ closeModal }) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [country, setCountry] = useState(false);
    const handledefault = (event) => {
        event.stopPropagation()
    }
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    const handleClicklist = () => {
        setCountry(!country)
      }
    return (
        <>
            <div className='influencermodal'>
                <div className='influencer_content' onClick={(event) => handledefault(event)}>
                    <div className='icnacnt'>
                        <div className='' onClick={() => closeModal()}>
                            <i className="fa-solid fa-arrow-left-long"></i>
                        </div>
                        <p className='crttxtacnt'>create An Account</p>
                    </div>
                    <div className='crs' onClick={() => closeModal()}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <div className=''>
                        <form >
                            <div className='crttxtinpt'><input type="text" placeholder='Your Name' /></div>
                            <div className='crttxtinpt'><input type="text" placeholder="Your Email" /></div>
                            <div className='txtinptphn'>
                                <input type="" placeholder=" Phone Number" />
                                <div className='numbflgarrow'>
                                    <i className="fa-solid fa-flag"></i>
                                </div>
                                <div className='arrow' onClick={handleClicklist}>
                  <span className='flg'>

                  </span>
                </div>
                {country && <div className='listcntry'>
                  <ul>
                    <li className='cntrynmb'>
                      <span className=''>

                        +91
                      </span>

                    </li>
                  </ul>
                </div>}
                            </div>
                            <div className='crttxtinpt'>
                                <input type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    placeholder='Password'
                                    onChange={(e) => setPassword(e.target.value)} />
                                <div className='shwinpt' onClick={handleTogglePassword}>
                                    {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
                                </div>
                            </div>
                            <div className='crttxtinpt'>
                                <input type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    placeholder='ShowPassword'
                                    onChange={(e) => setPassword(e.target.value)} />
                                <div className='shwinpt' onClick={handleTogglePassword}>
                                    {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
                                </div>
                            </div>
                            <div className='sklinct'>
                                <i className="fa-solid fa-arrow-left-long"></i>
                                <p className='crttxtacnt'>Add Your Skill</p>
                            </div>
                            <div className='sklmax'>
                                <p className='skltxt'>Maximum 3 skills</p>
                                <div className='sprtdnccmd'>
                                    <div className='btnskl'>Sport</div>
                                    <div className='btnskl'>Dance</div>
                                    <div className='btnskl'>Drama</div>
                                    <div className='btnskl'>Music</div>
                                    <div className='btnskl'>Fashion</div>
                                    <div className='btnskl'>Others</div>
                                </div>
                            </div>

                            <div className='addskl'>
                                <p className='skltxt'>Add Skil</p>
                                <div className='sdmotohrflx'>
                                    <div className='btnskl'>Sport</div>
                                    <div className='btnskl'>Dance</div>
                                    <div className='btnskl'>Comedy</div>
                                </div>
                            </div>


                            <div className='chcktrm'>
                                <input type="checkbox" />
                                <p className='trms'>Terms & Condition</p>
                            </div>
                            <div className='sgnbtn'>
                                Sign Up
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Creator
