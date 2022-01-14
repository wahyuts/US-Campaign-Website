import Image from "next/image";
import BenefitsBck from '../../public/assests/images/benefitsbck.png';
import sps1 from '../../public/assests/images/sps1.png';
import sps2 from '../../public/assests/images/sps2.png';
import sps3 from '../../public/assests/images/sps3.png';
import sps4 from '../../public/assests/images/sps4.png';
import sps5 from '../../public/assests/images/sps5.png';
import sps6 from '../../public/assests/images/sps6.png';

import ReactResponsiveHook from '../../utils/ReactResponsiveHook';

import styles from '../../styles/WhatYouWillGet.module.css';
// import SliderBennefit from "../group-slider/slider-bennefit";
import SliderWhatYouGet from "../group-slider/slider-whatYouGet";

const SLIDE_COUNT = 6;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const WhatYouWillGet = () => {
    const { isMobile, isTablet, isDesktop } = ReactResponsiveHook();

    let BenefitDesktop = (
        <>
        <div className={styles.benListCard}>
                <div className={styles.boxCard}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                        <div style={{width:92,height:76}}>
                            <Image src={sps1} alt="Benefit1" layout='responsive' objectFit='contain' />
                        </div>
                        <div style={{width:'85%',marginLeft:'auto',marginRight:'auto'}}>
                            <p style={{textAlign:'center', marginTop:50}}>Sponsor logo on all communication materials</p>
                        </div>
                    </div>
                </div>
                <div className={styles.boxCard}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                        <div style={{width:92,height:76}}>
                            <Image src={sps2} alt="Benefit2" layout='responsive' objectFit='contain' />
                        </div>
                        <p style={{textAlign:'center', marginTop:50}}>Features on our social media channels</p>
                    </div>
                </div>
                <div className={styles.boxCard2}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                        <div style={{width:92,height:76}}>
                            <Image src={sps3} alt="Benefit3" layout='responsive' objectFit='contain' />
                        </div>
                        <p style={{textAlign:'center', marginTop:40}}>Speaking slots at amplification events</p>
                    </div>
                </div>
        </div>
        <div className={styles.benListCard2}>
                <div className={styles.boxCard}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                        <div style={{width:92,height:76}}>
                            <Image src={sps4} alt="Benefit1" layout='responsive' objectFit='contain' />
                        </div>
                        <p style={{textAlign:'center', marginTop:50}}>Ad-libs during all activations</p>
                    </div>
                </div>
                <div className={styles.boxCard}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                        <div style={{width:92,height:76}}>
                            <Image src={sps5} alt="Benefit2" layout='responsive' objectFit='contain' />
                        </div>
                        <div style={{width:'85%',marginLeft:'auto',marginRight:'auto'}}>
                            <p style={{textAlign:'center', marginTop:50}}>Logo & recognition on Campaign #ForChange App</p>
                        </div>
                    </div>
                </div>
                <div className={styles.boxCard2}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                        <div style={{width:92,height:76}}>
                            <Image src={sps6} alt="Benefit3" layout='responsive' objectFit='contain' />
                        </div>
                        <div style={{width:'85%',marginLeft:'auto',marginRight:'auto'}}>
                            <p style={{textAlign:'center', marginTop:40}}>Media exposure via Campaign.com events</p>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
    return ( 
        <div className={styles.contBannerReview}>
            <Image src={BenefitsBck} alt="BenefitBanner" layout='fill' objectFit='cover' />
            <div className={styles.innerContBannerReview}>
                <h2 className={styles.h2BannerReview}>What You Will Get</h2>
            </div>

            {isMobile ? (
                isTablet ? (
                    isDesktop ? (
                        BenefitDesktop
                    ) : (
                        BenefitDesktop
                    )
                ) : (
                    BenefitDesktop
                )
            ) : (
                // <SliderBennefit slides={slides}/>
                <SliderWhatYouGet slides={slides}/>
                // null
            )}

        </div>
     );
}
 
export default WhatYouWillGet;