import React, {  useState } from 'react'
import homebanner from "../../Images/homebanner.jpg";
import charublogo from "../../Images/charublogo.png";
import kj from "../../Images/kj.jpg"
import Influencer from '../../Modal/Influencer';
import Scout from '../../Modal/Scout';
import Creator from '../../Modal/Creator';
const Index = () => {

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
                <div className='ownimgdiv'>
                    <img src={homebanner} className="" alt="..." />
                </div>
            </section>
            <section className='charubsuper'>
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




                        <div className='bhmainimgall'>
                            <div className='chrbgrpimg'>
                                <img src={kj} alt="..." />
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
