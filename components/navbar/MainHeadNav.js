import Image from "next/image";
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import HomeImageBanner from '../../public/assests/images/picHMP1.png';
import AboutBanner from '../../public/assests/images/AboutBanner.png';
import OrgBanner from '../../public/assests/images/OrgBanner.png';
import ProgramsBanner from '../../public/assests/images/ProgramsBanner.png';
import SponsorsBanner from '../../public/assests/images/SponsorsBanner.png';
import IconBarcode from '../../public/assests/images/Barcode-Image.png';
import GPButtonIcon from '../../public/assests/images/googlePlayBtn.png';
import IOSIcon from '../../public/assests/images/IOS.png';
import CloseIcon from '@mui/icons-material/Close';

import styles from "../../styles/Home.module.css";
import MainButton from '../Reuseable-components/MainButton';
import HeadNav from './HeadNav';
import ForModalDownload from "../../utils/ForModalDownload";
import MyIconButton from "../Reuseable-components/MyIconButton";
import ModalVideo from "../sponsor-comp/ModalVideo";
// import MainButton from "../components/Reuseable-components/MainButton";

const MainHeadNav = () => {
    const router = useRouter();
    const currentPath = router.pathname;
    // const [nameUrl,setNameUrl] = useState(currentPath);
    const {clickModal,openModal} = ForModalDownload();

    // console log jangan diapus
    //console.log("STATUS MODAL",openModal);



    const goToCollaborateSection = () => {
        // router.push('/about');
        location.href="#collaborate01"
    }

    const goToOrganizerOnboarding = () => {
        location.href="#onboarding01"
    }

    const goToFeatureChallSponsor = () => {
        location.href="#sponsChall01"
    }

    const goToContactUs = () => {
        window.open('https://www.campaign.com/contact')
    }

    let MainHeadNav_Homepage = (
        currentPath === "/" ? (
        <div className={styles.contBannerHomepage}>
            <Image src={HomeImageBanner} alt="HomeImageBanner" layout='fill' objectFit='cover' />
                <div className={styles.innerContBanner}>
                    <h2 className={styles.h2BannerFontDetail}>More Than</h2>
                    <h2 className={styles.h2BannerFontDetail}>A Crowdfunding Platform</h2>
                    <p className={styles.pBannerFontDetail}>#DonateWithoutADime, be part of the change now</p>
                    <div className={styles.btnCollaborate}>
                        <MainButton onClick={goToCollaborateSection}>
                            <p className={styles.HeadNavButtonText}>Lets Collaborate</p>
                        </MainButton>
                </div>
            </div>
        </div> ) : null
    )

    let MainHeadNav_About = (
        currentPath === "/about" ? (
        <div className={styles.contBannerHomepage}>
            <Image src={AboutBanner} alt="AboutBanner" layout='fill' objectFit='cover' />
                <div className={styles.innerContBanner}>
                    <h2 className={styles.h2BannerFontDetail}>You Do The Challenges</h2>
                    <h2 className={styles.h2BannerFontDetail}>We Find The Sponsors</h2>
                    <p className={styles.pBannerFontDetail}>#DonateWithoutADime</p>
                    <div className={styles.btnCollaborate}>
                        <MainButton onClick={goToContactUs}>
                            <p className={styles.HeadNavButtonText}>Contact Us</p>
                        </MainButton>
                       
                </div>
            </div>
        </div> ) : null
    )

    let MainHeadNav_Organizer = (
        currentPath === "/organizers" ? (
        <div className={styles.contBannerHomepage}>
            <Image src={OrgBanner} alt="OrgainerzBanner" layout='fill' objectFit='cover' />
                <div className={styles.innerContBanner}>
                    <h2 className={styles.h2BannerFontDetail}>We Turn Actions Into</h2>
                    <h2 className={styles.h2BannerFontDetail}>Awareness and Donations</h2>
                    <div className={styles.btnCollaborate2}>
                        <MainButton onClick={goToOrganizerOnboarding}>
                            <p className={styles.HeadNavButtonText}>Start Your Social Campaign</p>
                        </MainButton>
                </div>
            </div>
        </div> ) : null
    )

    let MainHeadNav_Programs = (
        currentPath === "/programs" ? (
        <div className={styles.contBannerHomepage}>
            <Image src={ProgramsBanner} alt="ProgramBanner" layout='fill' objectFit='cover' />
                <div className={styles.innerContBanner}>
                    <h2 className={styles.h2BannerFontDetail}>Welcome to Our</h2>
                    <h2 className={styles.h2BannerFontDetail}>Changemakers Community!</h2>
                    <div style={{width:'80%', marginLeft:'auto',marginRight:'auto',marginTop:24}}>
                        <p className={styles.pBannerFontPrograms}>Collaborate your own Events, or Engage in Programs and Career Opportunities in our Campaign Community</p>
                    </div>
            </div>
        </div> ) : null
    )

    let MainHeadNav_Sponsors = (
        currentPath === "/sponsors" ? (
        <div className={styles.contBannerHomepageSponsor}>
        {/* <div className={styles.contBannerHomepage}> */}
            <Image src={SponsorsBanner} alt="SponsorsBanner" layout='fill' objectFit='cover' />
                <div className={styles.innerContBannerSponsor}>
                {/* <div className={styles.innerContBanner}> */}

                    <div className={styles.firstBox}>
                        <h2 className={styles.h2BannerFontDetailSponsor}>Impact</h2>
                        <h2 className={styles.h2BannerFontDetailSponsor}>Sponsorships</h2>
                        <h2 className={styles.h2BannerFontDetailSponsor}>#For Changes</h2>
                        <div className={styles.btnCollaborate2Sponsor}>
                            <MainButton onClick={goToFeatureChallSponsor}>
                                <p className={styles.HeadNavButtonText}>Sponsor A Challenges</p>
                            </MainButton>
                        </div>
                    </div>
                    <ModalVideo/>
                      
                    
                </div>
        </div> ) : null
    )

    let MainHeadNav_AmbasadorProgramUS = (
        currentPath === "/student-ambasador-programs" ? (
            <div className={styles.contBannerHomepage}>
            <Image src={ProgramsBanner} alt="US Programs" layout='fill' objectFit='cover' />
                <div className={styles.innerContBanner}>
                    <h2 className={styles.h2BannerFontDetail}>Welcome to Our</h2>
                    <h2 className={styles.h2BannerFontDetail}>Changemakers Community!</h2>
                    <div style={{width:'80%', marginLeft:'auto',marginRight:'auto',marginTop:24}}>
                        <p className={styles.pBannerFontPrograms}>Collaborate your own Events, or Engage in Programs and Career Opportunities in our Campaign Community</p>
                    </div>
            </div>
        </div> ) : null
    )

    let theModal = openModal ? (
        <div className={styles.layoutModal}>
            <div className={styles.modal}>
                <div style={{width:'89%',marginLeft:'auto',marginRight:'auto',display:'flex'}}>
                    <div style={{width:'50%',height:300}}>
                        <Image 
                            src={IconBarcode} 
                            alt="Barcode" 
                            layout='responsive' 
                            objectFit='contain'
                        />
                    </div>
                    <div style={{position:'relative',width:'50%'}}>
                        <div style={{width:'80%',textAlign:'center',marginLeft:'auto',marginRight:'auto',marginTop:30}}>
                            <p style={{fontSize:24,fontWeight:400}}>Scan this QR code or download from:</p>
                        </div>
                        <div style={{width:188,height:60,marginLeft:'auto',marginRight:'auto',marginBottom:20}}>
                            <MyIconButton>
                                <Image 
                                    src={GPButtonIcon} 
                                    alt="Google Play" 
                                    layout='responsive' 
                                    objectFit='cover'
                                />
                            </MyIconButton>
                        </div>
                        <div style={{width:188,height:60,marginLeft:'auto',marginRight:'auto'}}>
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
                        <div style={{position:'absolute',top:0,right:0,fontSize:23,fontWeight:700,cursor:'pointer'}} onClick={clickModal}>
                            <CloseIcon/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        ) : (
            null
        )


    return ( 
        <>
            <div style={{position:'relative'}}>
                <HeadNav clickModal={clickModal}/>
                {MainHeadNav_Homepage}
                {MainHeadNav_About}
                {MainHeadNav_Organizer}
                {MainHeadNav_Programs}
                {MainHeadNav_Sponsors}
                {MainHeadNav_AmbasadorProgramUS}

                {theModal}

            </div>
        </>
     );
}
 
export default MainHeadNav;
