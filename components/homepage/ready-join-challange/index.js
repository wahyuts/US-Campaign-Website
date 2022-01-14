import Image from 'next/image';
import React, {useState,useEffect} from 'react';
import IconEducation from '../../../public/assests/images/IconEducation.png';
import IconEnvirontment from '../../../public/assests/images/IconEnvirontment.png';
import IconEquality from '../../../public/assests/images/IconEquality.png';
import IconHealth from '../../../public/assests/images/IconHealth.png';

import ReactResponsiveHook from '../../../utils/ReactResponsiveHook';

import styles from "../../../styles/ReadyJoinChallanges.module.css";
import SliderEducation from '../../group-slider/slider-education/SilderEducation';
import SliderEnvirontment from '../../group-slider/slider-environtment';
import SliderEquality from '../../group-slider/slider-equality';
import SliderHealth from '../../group-slider/slider-health';


const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const ReadyJoinChallange = () => {
    const { isMobile, isTablet, isDesktop } = ReactResponsiveHook();
    const [divGroup,setDivGroup] =  useState('divEducation');

    const handleClickFirstDivBox = () => {
        setDivGroup('divEducation');
    }

    useEffect(()=>{
        handleClickFirstDivBox();
    },[])



    let navGroupSlider = (
        <div className={styles.contNavGroupSlider}>
            {
                divGroup === "divEducation" ? (
                    <div className={`${styles.contEachNav} ${styles.contEachNavPurple}`} tabIndex="0" onClick={()=>{setDivGroup('divEducation')}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{display:'flex', alignItems:'center',marginRight:10}} >
                                <Image src={IconEducation} alt="Icon Education" width={21} height={21} objectFit="contain"/>
                            </div>
                            <div>
                                <p style={{fontSize:20, marginBottom:0}}>Education</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.contEachNav} tabIndex="0" onClick={()=>{setDivGroup('divEducation')}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{display:'flex', alignItems:'center',marginRight:10}} >
                                <Image src={IconEducation} alt="Icon Education" width={21} height={21} objectFit="contain"/>
                            </div>
                            <div>
                                <p style={{fontSize:20, marginBottom:0}}>Education</p>
                            </div>
                        </div>
                    </div>
                )
            }
            
            {
                divGroup === "divEnvirontment" ? (
                    <div className={`${styles.contEachNav} ${styles.contEachNavGreen}`} tabIndex="0" onClick={()=>{setDivGroup('divEnvirontment')}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{display:'flex', alignItems:'center',marginRight:10}} >
                                <Image src={IconEnvirontment} alt="Icon Environtment" width={21} height={21} objectFit="contain"/>
                            </div>
                            <div>
                                <p style={{fontSize:20, marginBottom:0}}>Environtment</p>
                            </div>
                        </div>
                    </div>
                ) :(
                    <div className={styles.contEachNav} tabIndex="0" onClick={()=>{setDivGroup('divEnvirontment')}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{display:'flex', alignItems:'center',marginRight:10}} >
                                <Image src={IconEnvirontment} alt="Icon Environtment" width={21} height={21} objectFit="contain"/>
                            </div>
                            <div>
                                <p style={{fontSize:20, marginBottom:0}}>Environtment</p>
                            </div>
                        </div>
                    </div>
                )
            }
            
            {
                divGroup === "divEquality" ? (
                    <div className={`${styles.contEachNav} ${styles.contEachNavOrange}`} tabIndex="0" onClick={()=>{setDivGroup('divEquality')}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{display:'flex', alignItems:'center',marginRight:10}} >
                                <Image src={IconEquality} alt="Icon Equality" width={21} height={21} objectFit="contain"/>
                            </div>
                            <div>
                                <p style={{fontSize:20, marginBottom:0}}>Equality</p>
                            </div>
                        </div>
                    </div>
                ):(
                    <div className={`${styles.contEachNav}`} tabIndex="0" onClick={()=>{setDivGroup('divEquality')}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{display:'flex', alignItems:'center',marginRight:10}} >
                                <Image src={IconEquality} alt="Icon Equality" width={21} height={21} objectFit="contain"/>
                            </div>
                            <div>
                                <p style={{fontSize:20, marginBottom:0}}>Equality</p>
                            </div>
                        </div>
                    </div>
                )
            }

            {
                divGroup === "divHealth" ? (
                    <div className={`${styles.contEachNav} ${styles.contEachNavRed}`} tabIndex="0" onClick={()=>{setDivGroup('divHealth')}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{display:'flex', alignItems:'center',marginRight:10}} >
                                <Image src={IconHealth} alt="Icon Health" width={21} height={21} objectFit="contain"/>
                            </div>
                            <div>
                                <p style={{fontSize:20, marginBottom:0}}>Health</p>
                            </div>
                        </div>
                    </div>
                ):(
                    <div className={styles.contEachNav} tabIndex="0" onClick={()=>{setDivGroup('divHealth')}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{display:'flex', alignItems:'center',marginRight:10}} >
                                <Image src={IconHealth} alt="Icon Health" width={21} height={21} objectFit="contain"/>
                            </div>
                            <div>
                                <p style={{fontSize:20, marginBottom:0}}>Health</p>
                            </div>
                        </div>
                    </div>
                )

            }
            
            
        </div>
    )

    let navGroupMobileSlider = (
        <div className={styles.contNavGroupSlider}>
            {
                divGroup === "divEducation" ? (
                    <div className={`${styles.contEachNav} ${styles.contEachNavPurple}`} tabIndex="0" onClick={()=>{setDivGroup('divEducation')}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{display:'flex', alignItems:'center'}} >
                                <Image src={IconEducation} alt="Icon Education" width={21} height={21} objectFit="contain"/>
                            </div>
                        </div>
                    </div>
                ):(
                    <div className={styles.contEachNav} tabIndex="0" onClick={()=>{setDivGroup('divEducation')}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{display:'flex', alignItems:'center'}} >
                                <Image src={IconEducation} alt="Icon Education" width={21} height={21} objectFit="contain"/>
                            </div>
                        </div>
                    </div>
                )
            }

            {
                divGroup === "divEnvirontment" ? (
                    <div className={`${styles.contEachNav} ${styles.contEachNavGreen}`} tabIndex="0" onClick={()=>{setDivGroup('divEnvirontment')}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{display:'flex', alignItems:'center'}} >
                                <Image src={IconEnvirontment} alt="Icon Environtment" width={21} height={21} objectFit="contain"/>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.contEachNav} tabIndex="0" onClick={()=>{setDivGroup('divEnvirontment')}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{display:'flex', alignItems:'center'}} >
                                <Image src={IconEnvirontment} alt="Icon Environtment" width={21} height={21} objectFit="contain"/>
                            </div>
                        </div>
                    </div>
                )

            }

            {
                divGroup === "divEquality" ? (
                    <div className={`${styles.contEachNav} ${styles.contEachNavOrange}`} tabIndex="0" onClick={()=>{setDivGroup('divEquality')}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{display:'flex', alignItems:'center'}} >
                                <Image src={IconEquality} alt="Icon Equality" width={21} height={21} objectFit="contain"/>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.contEachNav} tabIndex="0" onClick={()=>{setDivGroup('divEquality')}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{display:'flex', alignItems:'center'}} >
                                <Image src={IconEquality} alt="Icon Equality" width={21} height={21} objectFit="contain"/>
                            </div>
                        </div>
                    </div>
                )
            }

            {
                divGroup === "divHealth" ? (
                    <div className={`${styles.contEachNav} ${styles.contEachNavRed}`}  tabIndex="0" onClick={()=>{setDivGroup('divHealth')}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{display:'flex', alignItems:'center'}} >
                                <Image src={IconHealth} alt="Icon Health" width={21} height={21} objectFit="contain"/>
                            </div>
                        </div>
                    </div>
                ):(
                    <div className={styles.contEachNav} tabIndex="0" onClick={()=>{setDivGroup('divHealth')}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{display:'flex', alignItems:'center'}} >
                                <Image src={IconHealth} alt="Icon Health" width={21} height={21} objectFit="contain"/>
                            </div>
                        </div>
                    </div>
                )
            }
            
            
            
            
        </div>
    )

    const edu = divGroup === "divEducation" ? 
        // <SliderEducation slides={slides}/>:
        <SliderEducation/>:
        null;

    const envi = divGroup === "divEnvirontment" ? 
        // <SliderEducation slides={slides}/>:
        <SliderEnvirontment/>:
        null;

    const eql = divGroup === "divEquality" ? 
        // <SliderEducation slides={slides}/>:
        <SliderEquality/>:
        null;

    const healthy = divGroup === "divHealth" ? 
        // <SliderEducation slides={slides}/>:
        <SliderHealth/>:
        null;

    return ( 
        <div className={styles.contReadyJoinChallange}>
            <div className={styles.innerContReadyJoinChallange}>
                <h2 className={styles.h2ReadyJoinChall}>Ready to join the challenge?</h2>
                <p className={styles.pReadyJoinChall}>You will be challanged to show your support for various social issues according to your interest</p>
            </div>

            {isMobile ? (
                isTablet ? (
                    isDesktop ? (
                        navGroupSlider
                    ) : (
                        navGroupSlider
                    )
                ) : (
                    navGroupSlider
                )
            ) : (
                //null
                navGroupMobileSlider
            )}

            <hr style={{border:'none',marginBottom:20, backgroundColor:'transparent'}}/>
            
            {edu}
            {envi}
            {eql}
            {healthy}
        </div>
     );
}
 
export default ReadyJoinChallange;