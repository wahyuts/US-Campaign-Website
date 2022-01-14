import Image from "next/image";
import ReactResponsiveHook from '../../../utils/ReactResponsiveHook';
import Banner from '../../../public/assests/images/bannerBarcode.png';
import GPButtonIcon from '../../../public/assests/images/googlePlayBtn.png';
import IOSIcon from '../../../public/assests/images/IOS.png';
import IconBarcode from '../../../public/assests/images/Barcode-Image.png';
import Phone1 from '../../../public/assests/images/phone1.png';
import Phone2 from '../../../public/assests/images/phone2.png';


import styles from '../../../styles/BannerBarcode.module.css';
import MyIconButton from "../../Reuseable-components/MyIconButton";

const BannerBarcode = () => {
    const { isMobile, isTablet, isDesktop } = ReactResponsiveHook();

    const goToGooglePlay = () => {
        window.open('https://play.google.com/store/apps/details?id=paratu.com.apps.campaign')
    }

    // const goToIOS = () => {
    //     window.open('https://play.google.com/store/apps/details?id=paratu.com.apps.campaign')
    // }

    let displayBannerUIDesktop = (
        <div className={styles.contBannerBarcode}>
            <Image 
                src={Banner} 
                alt="Banner Barcode" 
                // width={1600}
                // height={538}
                layout='fill' 
                objectFit='cover'
            />
            <div className={styles.theBarcode}>
                <h2 className={styles.h2BannerText}>Download the Campaign #ForChange app for a better world!</h2>
                <p className={styles.pBannerText}>Skyrocket your social impact and lets change the world together.</p>

                <div style={{display:'flex'}}>
                    <div style={{marginRight:50}}>
                        <div style={{width:180,height:50,marginBottom:35}}>
                            <MyIconButton onClick={goToGooglePlay}>
                                <Image 
                                    src={GPButtonIcon} 
                                    alt="Banner Barcode" 
                                    // width={1600}
                                    // height={538}
                                    layout='responsive' 
                                    objectFit='cover'
                                />
                            </MyIconButton>
                        </div>
                        <div style={{width:180,height:50}}>
                            <MyIconButton>
                                <Image 
                                    src={IOSIcon} 
                                    alt="Banner Barcode" 
                                    // width={1600}
                                    // height={538}
                                    layout='responsive' 
                                    objectFit='cover'
                                />
                            </MyIconButton>
                        </div>
                    </div>

                    <div style={{width:140,height:140}}>
                        {/* <MyIconButton> */}
                            <Image 
                                src={IconBarcode} 
                                alt="Barcode" 
                                // width={1600}
                                // height={538}
                                layout='responsive' 
                                objectFit='cover'
                            />
                        {/* </MyIconButton> */}
                    </div>
                </div>

            </div>
            
        </div>
    )

    let displayBannerUIMobile = (
        <div className={styles.contBannerBarcodeMobile}>
            <div style={{width:'89%',marginLeft:'auto',marginRight:'auto',paddingTop:30}}>
                <h2 className={styles.h2BannerBarcodeText}>Download the Campaign #ForChange app for a better world!</h2>
            </div>
            <div style={{width:'89%',marginLeft:'auto',marginRight:'auto',marginTop:15}}>
                <h2 className={styles.pBannerBarcodeText}>Skyrocket your social impact and lets change the world together.</h2>
            </div>

            <div style={{display:'flex',width:'89%',justifyContent:'center',marginLeft:'auto',marginRight:'auto',marginTop:30}}>
                        <div style={{width:121,height:37,marginRight:10}}>
                            <MyIconButton onClick={goToGooglePlay}>
                                <Image 
                                    src={GPButtonIcon} 
                                    alt="Google Play" 
                                    // width={1600}
                                    // height={538}
                                    layout='responsive' 
                                    objectFit='cover'
                                />
                            </MyIconButton>
                        </div>
                        <div style={{width:121,height:37}}>
                            <MyIconButton>
                                <Image 
                                    src={IOSIcon} 
                                    alt="IOS Button" 
                                    // width={1600}
                                    // height={538}
                                    layout='responsive' 
                                    objectFit='cover'
                                />
                            </MyIconButton>
                        </div>
            </div>

            <div style={{ width:'45%',height:'30%',position:'absolute',bottom:0,left:10,display:'flex',alignItems:'flex-end'}}>
                <Image 
                    src={Phone2} 
                    alt="Phone 2" 
                    // width={161}
                    // height={368}
                    layout='fill' 
                    objectFit='contain'
                />
            </div>

            <div style={{ width:'45%',height:'40%',position:'absolute',bottom:0,right:10,display:'flex',alignItems:'flex-end'}}>
            {/* <div style={{ width:171,height:180,position:'absolute',bottom:0,right:3,display:'flex',alignItems:'flex-end'}}> */}
                <Image 
                    src={Phone1} 
                    alt="Phone 1" 
                    // width={161}
                    // height={368}
                    layout='fill' 
                    objectFit='cover'
                />
            </div>
            {/* <p>Coba Dulu</p> */}
        </div>
    )

    return ( 
        <div>
            {isMobile ? (
                isTablet ? (
                    isDesktop ? (
                        displayBannerUIDesktop
                    ) : (
                        displayBannerUIDesktop
                    )
                ) : (
                    displayBannerUIDesktop
                )
            ) : (
                displayBannerUIMobile
            )}
        </div>
     );
}
 
export default BannerBarcode;
