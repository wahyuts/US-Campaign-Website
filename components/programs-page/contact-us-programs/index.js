import Image from 'next/image';
import BotContactUs from '../../../public/assests/images/BotContactUs.png';
import styles from '../../../styles/ContactUsPrograms.module.css';
import ReactResponsiveHook from '../../../utils/ReactResponsiveHook';

const ContactUsPrograms = () => {
    const { isMobile, isTablet, isDesktop } = ReactResponsiveHook();

    let displayContactUsDesktop = (
        <div style={{width:'100%',height:414,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#0082FF'}}>
            <div className={styles.inerCont}>
                <div style={{width:373,height:211,marginRight:100}}>
                    <Image
                        src={BotContactUs}
                        alt="Contact Us"
                        // width={350}
                        // height={350}ff
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div>
                    <h2 className={styles.h2ContactUsPrograms}>Contact Us</h2>
                    <p className={styles.pContactUsPrograms}>Floriane Marguerite (Irene)</p>
                    <p style={{fontSize:20,fontWeight:400,color:'white',marginBottom:20}}>Expansion Officer</p>
                    <p style={{fontSize:20,fontWeight:400,color:'white'}}>ireneflo@campaign.com</p>
                </div>
            </div>
        </div>
    )

    let displayContactUsMobile = (
        <div style={{width:'100%',height:414,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#0082FF'}}>
            <h2 className={styles.h2ContactUsProgramsMobile}>Contact Us</h2>
            <div className={styles.inerContMobile}>
                <div style={{width:253,height:211,marginBottom:5}}>
                    <Image
                        src={BotContactUs}
                        alt="Contact Us"
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <p className={styles.pContactUsProgramsMobile}>Floriane Marguerite (Irene)</p>
                    <p style={{fontSize:16,fontWeight:400,color:'white',marginBottom:20}}>Expansion Officer</p>
                    <p style={{fontSize:16,fontWeight:400,color:'white'}}>ireneflo@campaign.com</p>
                </div>
            </div>
        </div>
    )

    return ( 
        <>
            {isMobile ? (
                isTablet ? (
                    isDesktop ? (
                        displayContactUsDesktop
                    ) : (
                        displayContactUsDesktop
                    )
                ) : (
                    displayContactUsDesktop
                )
            ) : (
                displayContactUsMobile
            )}
        </>
     );
}
 
export default ContactUsPrograms ;