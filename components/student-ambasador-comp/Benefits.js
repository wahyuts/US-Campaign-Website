import Image from "next/image";
import BenefitsBck from '../../public/assests/images/benefitsbck.png';
import Ben1 from '../../public/assests/images/Ben1.png';
import Ben2 from '../../public/assests/images/Ben2.png';
import Ben3 from '../../public/assests/images/Ben3.png';
import Ben4 from '../../public/assests/images/Ben4.png';
import ReactResponsiveHook from '../../utils/ReactResponsiveHook';



import styles from '../../styles/BennefitProgram.module.css';
import SliderBennefit from "../group-slider/slider-bennefit";

const SLIDE_COUNT = 4;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Benefits = () => {
    const { isMobile, isTablet, isDesktop } = ReactResponsiveHook();

    let BenefitDesktop = (
        <div className={styles.benListCard}>
                <div className={styles.boxCard}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                        <div style={{width:92,height:76}}>
                            <Image src={Ben1} alt="Benefit1" layout='responsive' objectFit='contain' />
                        </div>
                        <p style={{textAlign:'center', marginTop:50}}>Gift cards up to $100</p>
                    </div>
                </div>
                <div className={styles.boxCard}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                        <div style={{width:92,height:76}}>
                            <Image src={Ben2} alt="Benefit2" layout='responsive' objectFit='contain' />
                        </div>
                        <p style={{textAlign:'center', marginTop:50}}>Career development consultation</p>
                    </div>
                </div>
                <div className={styles.boxCard}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                        <div style={{width:92,height:76}}>
                            <Image src={Ben3} alt="Benefit3" layout='responsive' objectFit='contain' />
                        </div>
                        <p style={{textAlign:'center', marginTop:40}}>Professional and personal development workshops</p>
                    </div>
                </div>
                <div className={styles.boxCard2}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                        <div style={{width:92,height:76}}>
                            <Image src={Ben4} alt="Benefit4" layout='responsive' objectFit='contain' />
                        </div>
                        <p style={{textAlign:'center', marginTop:40}}>Networking opportunities</p>
                    </div>
                </div>
        </div>
    )
    return ( 
        <div className={styles.contBannerReview}>
            <Image src={BenefitsBck} alt="BenefitBanner" layout='fill' objectFit='cover' />
            <div className={styles.innerContBannerReview}>
                <h2 className={styles.h2BannerReview}>Benefits</h2>
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
                <SliderBennefit slides={slides}/>
                // null
            )}

        </div>
     );
}
 
export default Benefits;