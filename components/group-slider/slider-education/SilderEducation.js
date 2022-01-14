import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ReactResponsiveHook from '../../../utils/ReactResponsiveHook';
// import { DataImageLocalEmbla } from "../../../utils/DataImageLocalEmbla";
import BackIcon from '@mui/icons-material/ArrowBackIosNew';
import NextIcon from '@mui/icons-material/ArrowForwardIos';
import styles from "../../../styles/EmblaSlider.module.css";
import styles2 from "../../../styles/ArrowButtonSlider.module.css";
import MyIconButton from "../../Reuseable-components/MyIconButton";
import CardChallange from "../../card-challange";
import axios from 'axios';

const SliderEducation = () => {
  const { isMobile, isTablet, isDesktop } = ReactResponsiveHook();

  const [viewportRef, embla] = useEmblaCarousel({

    loop: true,
    dragFree: true,
    containScroll: "trimSnaps"

    // loop: true,
    // slidesToScroll: 2,
    // skipSnaps: false
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const [challData,setChallData] = useState([]);
  const [challDataReg,setChallDataReg] = useState([]);



  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  const getDataChallanges = async () => {
    const API ="https://api-prod.campaign.com/api/v1/campaign/featured-more-challenge?skip=0&take=10&orderBy=1&categoryName=Pendidikan";
    // const API = 'https://api.campaign.com/api/v1/campaign/featured-more-challenge?skip=0&take=10&orderBy=3&categoryName=Pendidikan';
    try {
        const res = await axios.get(API);
        const xxx = res.data.payload;
        const dataChallenge = xxx.map((data)=>(
            data.challenge
            // 
        ))
        const dataChallengeRegion = xxx.map((data)=>(
          data.challenge.challengeRegion
          // 
      ))
        setChallData(dataChallenge);
        setChallDataReg(dataChallengeRegion)
        // console.log("DATA",res);


    } catch (error) {
        console.log(error);
    }
  }

  useEffect (()=>{
    getDataChallanges();
  },[])

  // console log jangan diapus
  console.log("challData",challData);
  console.log("cscscs",challDataReg);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  let arrowButton = (
    <>
      <div style={{width:'100%',marginTop:50}}>
          <div style={{backgroundColor:"transparent",marginLeft:'auto',marginRight:'auto',display:'flex',justifyContent:'center'}}>
              <div onClick={scrollPrev} className={styles2.BackButton} style={{marginRight:10}}>
                 <MyIconButton enabled={prevBtnEnabled} >
                    <BackIcon/>
                 </MyIconButton>
              </div>
              <div onClick={scrollNext} className={styles2.NextButton} style={{marginLeft:10}}>
                 <MyIconButton enabled={nextBtnEnabled}>
                    <NextIcon/>
                 </MyIconButton>
              </div>
          </div>
      </div>
    </>
  )

  let cardContainer = (

    <div className={styles.embla}> {/*embla ini container paling luar or cont card list/slider nya*/}
      <div className={styles.embla__viewport} ref={viewportRef}>

          <div className={styles.embla__container}> 
            <CardChallange challData={challData} challDataReg={challDataReg}/>
          </div>
      </div>

      {isMobile ? (
                isTablet ? (
                    isDesktop ? (
                        arrowButton
                    ) : (
                      arrowButton
                    )
                ) : (
                  arrowButton
                )
            ) : (
                null
            )}
      
    </div>

  )

  let loading = (
    <div style={{width:'89%',marginLeft:'auto',marginRight:'auto', display:'flex',justifyContent:'center',alignItems:'center'}}> 
          <p>Loading...</p>
    </div>
  )

  return (
    challData.length === 0 ? loading : cardContainer
    
  );
};

export default SliderEducation;
