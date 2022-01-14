import Image from "next/image";
import Img01 from '../../../public/assests/images/01image.png';
import Img02 from '../../../public/assests/images/02image.png';
import Img03 from '../../../public/assests/images/03image.png';
import Img04 from '../../../public/assests/images/04image.png';
import Img05 from '../../../public/assests/images/05image.png';

import React, {useState,useEffect} from 'react';
import styles from '../../../styles/AppFeatured.module.css';
import ReactResponsiveHook from '../../../utils/ReactResponsiveHook';
import SliderCardAppFeatured from "../../group-slider/slider-card-appFeatured";


const AppFeatured = () => {
    const { isMobile, isTablet, isDesktop } = ReactResponsiveHook();
    const [pages,setPages] =  useState('01image');

    const SLIDE_COUNT = 5;
    const slides = Array.from(Array(SLIDE_COUNT).keys());

    const handleClickFirstBox = () => {
        setPages('01image');
    }

    useEffect(()=>{
        handleClickFirstBox();
        // document.getElementById("theFirst").classList.add(`${styles.CardAppFeatures}`)
    },[])

    // console.log("pagesnya apa",pages);

    const imageDiscoverChallange = pages === '01image' ? 
        <div className={styles.CardImagesAppFeatures}>
            <div className={styles.InnerCardImagesAppFeatures}>
                <Image src={Img01} alt="Image Discover Challange" objectFit="contain" />
            </div>
        </div> :
        null;

    const imageTakeActions = pages === '02image' ? 
        <div className={styles.CardImagesAppFeatures}>
            <div className={styles.InnerCardImagesAppFeatures}>
                <Image src={Img02} alt="Image Take Actions" objectFit="contain" />
            </div>
        </div> :
        null;

    const imageGiveDonation = pages === '03image' ? 
        <div className={styles.CardImagesAppFeatures}>
            <div className={styles.InnerCardImagesAppFeatures}>
                <Image src={Img03} alt="Image Donate Without Money" objectFit="contain" />
            </div>
        </div> :
        null;

    const imageTakeSocialImpact = pages === '04image' ? 
        <div className={styles.CardImagesAppFeatures}>
            <div className={styles.InnerCardImagesAppFeatures}>
                <Image src={Img04} alt="Image Take Social Impact" objectFit="contain" />
            </div>
        </div> :
        null;

    const imageLatestNews = pages === '05image' ? 
        <div className={styles.CardImagesAppFeatures}>
            <div className={styles.InnerCardImagesAppFeatures}>
                <Image src={Img05} alt="Image Latest News" objectFit="contain" />
            </div>
        </div> :
        null;

    let DeskotpAppFeatures = (
        <div className={styles.contDesktopAppFeatures}>
            <div className={styles.forImages}>
                {imageDiscoverChallange}
                {imageTakeActions}
                {imageGiveDonation}
                {imageTakeSocialImpact}
                {imageLatestNews}
            </div>
            <div className={styles.afterImages}>
                {
                    pages === "01image" ? (
                        <div className={`${styles.CardAppFeatures} ${styles.CardAppFeaturesTheFirst}`} tabIndex="0" onClick={handleClickFirstBox}>
                            <div className={styles.contNumber}>
                                <p className={styles.pTextNumber}>01</p>
                            </div>
                            <div className={styles.contCardAppFeaturesDesc}>
                                <div>
                                    <p className={styles.pTitleInsideCard}>Discover Challange</p>
                                    <p className={styles.pDescInsideCard}>Find fun interesting social campaign challanges to support here.<span></span></p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.CardAppFeatures} tabIndex="0" onClick={handleClickFirstBox}>
                            <div className={styles.contNumber}>
                                <p className={styles.pTextNumber}>01</p>
                            </div>
                            <div className={styles.contCardAppFeaturesDesc}>
                                <div>
                                    <p className={styles.pTitleInsideCard}>Discover Challange</p>
                                    <p className={styles.pDescInsideCard}>Find fun interesting social campaign challanges to support here.<span></span></p>
                                </div>
                            </div>
                        </div>
                    )
                }

                <hr style={{border:'none',marginBottom:10, backgroundColor:'transparent'}}/>

                <div className={styles.CardAppFeatures} tabIndex="0" onClick={()=>{setPages('02image')}}>
                    <div className={styles.contNumber}>
                        <p className={styles.pTextNumber}>02</p>
                    </div>
                    <div className={styles.contCardAppFeaturesDesc}>
                        <div>
                            <p className={styles.pTitleInsideCard}>Take Actions</p>
                            <p className={styles.pDescInsideCard}>After joining a challange, complete all actions of support to contribute to the social campaign.</p>
                        </div>
                    </div>
                </div>

                <hr style={{border:'none',marginBottom:10, backgroundColor:'transparent'}}/>

                <div className={styles.CardAppFeatures} tabIndex="0" onClick={()=>{setPages('03image')}}>
                    <div className={styles.contNumber}>
                        <p className={styles.pTextNumber}>03</p>
                    </div>
                    <div className={styles.contCardAppFeaturesDesc}>
                        <div>
                            <p className={styles.pTitleInsideCard}>Donate Without Money</p>
                            <p className={styles.pDescInsideCard}>Each time a challange is completed, a donation from the sponsor will be unlocked for the campaign organizer.</p>
                        </div>
                    </div>
                </div>

                <hr style={{border:'none',marginBottom:10, backgroundColor:'transparent'}}/>

                <div className={styles.CardAppFeatures} tabIndex="0" onClick={()=>{setPages('04image')}}>
                    <div className={styles.contNumber}>
                        <p className={styles.pTextNumber}>04</p>
                    </div>
                    <div className={styles.contCardAppFeaturesDesc}>
                        <div>
                            <p className={styles.pTitleInsideCard}>Track Social Impact</p>
                            <p className={styles.pDescInsideCard}>Track the progress of your campaign, challange, and action here.</p>
                        </div>
                    </div>
                </div>

                <hr style={{border:'none',marginBottom:10, backgroundColor:'transparent'}}/>

                <div className={styles.CardAppFeatures} tabIndex="0" onClick={()=>{setPages('05image')}}>
                    <div className={styles.contNumber}>
                        <p className={styles.pTextNumber}>05</p>
                    </div>
                    <div className={styles.contCardAppFeaturesDesc}>
                        <div>
                            <p className={styles.pTitleInsideCard}>Check The Latest News</p>
                            <p className={styles.pDescInsideCard}>Stay updated with the latest news, social, issues, and any updates from your campaigns!</p>
                        </div>
                    </div>
                </div>

                <hr style={{border:'none',marginBottom:20, backgroundColor:'transparent'}}/>

            </div>
        </div>
    )

    let mobileAppFeature = (
        <>
        <SliderCardAppFeatured slides={slides}/>
        </>
    )

    return ( 
        <div>
            <div style={{width:'100%',backgroundColor:'#EFF6FE'}}>
            {/* <div style={{width:'100%',backgroundColor:'#b4e5ed'}}> */}
                <div className={styles.appFeaturedTitleDesc}>
                    <h2 className={styles.h2AppFeatures}>Campaign #ForChange App Features</h2>
                    <p className={styles.pAppFeatures}>What can we do to support a variety of social issues</p>
                    {/* <button hidden onClick={handleClickFirstBox}>jajal</button> */}
                </div>

                {isMobile ? (
                        isTablet ? (
                            isDesktop ? (
                                DeskotpAppFeatures
                            ) : (
                                DeskotpAppFeatures
                            )
                        ) : (
                            DeskotpAppFeatures
                        )
                    ) : (
                        // null
                        mobileAppFeature
                    )}

            </div>
        </div>
     );
}
 
export default AppFeatured;
