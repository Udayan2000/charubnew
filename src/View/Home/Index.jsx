import React, { useEffect, useState } from 'react'
import homebanner from "../../Images/homebanner.jpg";
import charublogo from "../../Images/charublogo.png";
import bg1 from "../../Images/bg1.png";
import bg2 from "../../Images/bg2.png";
import bg3 from "../../Images/bg3.png";
import bg4 from "../../Images/bg4.png";
import bg5 from "../../Images/bg5.png";
import Influencer from '../../Modal/Influencer';
import Scout from '../../Modal/Scout';
import Creator from '../../Modal/Creator';
const Index = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [modala, setModala] = useState(false);
    const [modalb, setModalb] = useState(false);
    const [modalc, setModalc] = useState(false)
    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible((prevVisibility) => !prevVisibility);
        }, 2000); // Adjust the interval based on your blink frequency

        return () => clearInterval(interval);
    }, []);

    const handlemodalreg = () => {
        setModala(true)
    }
    const handlemodaltale = () => {
        setModalb(true)
    }
    const handlemodalcre = () => {
        setModalc(true)
    }
    return (
        <>
            <section className='home_banner'>
                <div className='ownimgdiv'>
                    <img src={homebanner} className="" alt="..." />
                </div>
            </section>
            <section className='charubsuper'>
                <div className='cust_container'>
                    <div className='btnimgflx'>
                        <div className='chrblogo'>
                            <img className="img-fluid " src={charublogo} alt="..." />
                            <div className='tlntcrtapp'>
                                <p className='tlntcrtsct'>The Talent & Creators with Scout</p>
                                <p className='sprapp'>Super APP</p>
                            </div>
                            <div className='btnmainbx'>
                                <div className='btbbx' onClick={handlemodalreg}>
                                    Register as an Influencer
                                </div>
                                <div className='btbbx' onClick={handlemodalcre}>
                                    Register as a Creator
                                </div>
                                <div className='btbbx' onClick={handlemodaltale}>
                                    Register as a Growth Mentor  or Talent Scout
                                </div>
                            </div>
                        </div>




                        <div className='bhmainimgall'>
                            <div className='bgimg'>
                                <img className={`blinking-image ${isVisible ? 'visible' : 'hidden'}`} alt=".." src={bg1} />
                                <div className='bgimgsnd'>
                                    <img className='' alt="..." src={bg2} />
                                </div>
                                <div className='bgimgthrd'>
                                    <img className='' alt="..." src={bg4} />
                                </div>
                                <div className='bgimgfrth'>
                                    <img className="" alt="..." src={bg3} />
                                </div>
                                <div className='bgimgfth'>
                                    <img className='' alt="..." src={bg5} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {modala && <Influencer closeModal={setModala} />}
            {modalb && <Scout closeModal={setModalb} />}
            {modalc && <Creator closeModal={setModalc} />}
        </>


    )
}

export default Index
