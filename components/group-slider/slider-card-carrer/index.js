import React, { useState, useEffect, useCallback } from "react";
// import Image from 'next/image';
import useEmblaCarousel from "embla-carousel-react";
// import { DataImageLocalEmbla } from "../../../utils/DataImageLocalEmbla";
import BackIcon from '@mui/icons-material/ArrowBackIosNew';
import NextIcon from '@mui/icons-material/ArrowForwardIos';
import styles from "../../../styles/SliderCardUsPrograms.module.css";
import styles2 from "../../../styles/ArrowButtonSlider.module.css";
import MyIconButton from "../../Reuseable-components/MyIconButton";
import CardCarrer from "../../card-carrer";

const SliderCardCarrer = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps"
    // slidesToScroll: 2,
    // skipSnaps: false
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className={styles.embla}> {/*embla ini container paling luar or cont card list/slider nya*/}
      <div className={styles.embla__viewport} ref={viewportRef}>
        <div className={styles.embla__container}> {/*embla__container ini inner main container diatas (bukan cont card nya ya)*/}
          {/* <CardUsPrograms slides={slides}/> */}
          <CardCarrer slides={slides}/>
        </div>
      </div>
      {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
      <div style={{width:'100%',marginTop:50}}>
          <div style={{backgroundColor:"transparent",marginLeft:'auto',marginRight:'auto',display:'flex',justifyContent:'center'}}>
              <div onClick={scrollPrev} className={styles2.BackButtonReviewBanner} style={{marginRight:10}}>
                 <MyIconButton enabled={prevBtnEnabled} >
                    <BackIcon/>
                 </MyIconButton>
              </div>
              <div onClick={scrollNext} className={styles2.NextButtonReviewBanner} style={{marginLeft:10}}>
                 <MyIconButton enabled={nextBtnEnabled}>
                    <NextIcon/>
                 </MyIconButton>
              </div>
          </div>
      </div>
    </div>
  );
};

export default SliderCardCarrer;
