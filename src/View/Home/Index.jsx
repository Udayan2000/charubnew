import React, { useState } from 'react'
import homebanner from "../../Images/homebanner.jpg";
import charublogo from "../../Images/charublogo.png";
import kj from "../../Images/kj.jpg"
import Influencer from '../../Modal/Influencer';
import Scout from '../../Modal/Scout';
import Creator from '../../Modal/Creator';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import dance from "../../Images/dance.jpg";
import basketball from "../../Images/basketball.jpg";
import boy from "../../Images/boy.jpg";
import read from "../../Images/read.jpg";
import femalephone from "../../Images/femalephone.png"
const Index = () => {
    var settings = {
        // dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        fade: true,
        autoplay: true,
        speed: 3000,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    fade: true,
                    autoplay: true,
                    speed: 3000,
                    cssEase: "ease-in",
                    autoplaySpeed: 2000,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    fade: true,
                    autoplay: true,
                    speed: 3000,
                    cssEase: "ease-in",
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                    autoplay: true,
                    speed: 3000,
                    cssEase: "ease-in",
                    autoplaySpeed: 2000,
                }
            }
        ]
    };
    const slideimg =[
        {
             img:dance,
        },
        {
            img:basketball,
        },
        {
            img:boy,
        },
        {
            img:read,
        }
    ]

    const [modala, setModala] = useState(false);
    const [modalb, setModalb] = useState(false);
    const [modalc, setModalc] = useState(false)
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
                {/* <div className='ownimgdiv'>
                    <img src={homebanner} className="" alt="..." />
                </div> */}
                <div className='cust_container'>
                    <div className='row'>
                        <div className='col-xl-4 col-lg-4 col-md-6  col-12'>
                            <div className=''>
                                <Slider {...settings}>
                                    {slideimg.map((item, index) => {
                                        return (
                                            <div>
                                               <div className='sldallimg' key={index}>
                                                 <img src={item.img} alt="..." />
                                               </div>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </div>
                        <div className='col-xl-5 col-lg-5 col-md-6  col-12'>
                            <div className=''>
                                <div className='chrb'>
                                    <img className="" src={charublogo} alt="..." />
                                </div>
                                <div className='tlntcrtapp'>
                                    <p className='crttxt'>The Talent & Creators with Scout</p>
                                    <p className='spttxt'>Super APP</p>
                                </div>
                                <div className=''>
                                    <p className='alltxtspr'>The All-In-One Creators & Talent SUPERAPP !</p>
                                    <p className='alltxtsprthn'>We are Unleashing Brilliance,
                                        Connecting, Showcasing, and Elevating Talent and Creativity Globally.
                                    </p>
                                    <p className='alltxtsprbld'>By Invite only – Join us now by registering below!
                                    </p>
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
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6  col-12'>
                           <div className=''>
                            <div className='phndiv'>
                                <img src={femalephone} alt="..." />
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className='charubsuper'>
                <div className='cust_container'>
                    <div className='btnimgflx'>
                        <div className='chrblogo'>
                            <div className=''>
                            <img className="img-fluid " src={charublogo} alt="..." />
                            </div>
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




                        {modala||modalb||modalc?"":<div className='bhmainimgall'>
                            <div className='chrbgrpimg'>
                                <img src={kj} alt="..." />
                            </div>
                        </div>}
                    </div>

                </div>
            </section> */}
           

            {modala && <Influencer closeModal={setModala} />}
            {modalb && <Scout closeModal={setModalb} />}
            {modalc && <Creator closeModal={setModalc} />}
        </>


    )
}

export default Index
