import React, { useState, useEffect, useCallback } from "react";
// import Image from 'next/image';
import useEmblaCarousel from "embla-carousel-react";
// import { DataImageLocalEmbla } from "../../../utils/DataImageLocalEmbla";
import BackIcon from '@mui/icons-material/ArrowBackIosNew';
import NextIcon from '@mui/icons-material/ArrowForwardIos';
import styles from "../../../styles/SliderCardAppFeatured.module.css";
import styles2 from "../../../styles/ArrowButtonSliderAppFeatured.module.css";
import MyIconButton from "../../Reuseable-components/MyIconButton";
import CardAppFeatured from "../../card-app-featured";

const SliderCardAppFeatured = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    dragFree: false,
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
          {/* <CardReview slides={slides}/> */}
          <CardAppFeatured slides={slides}/>
        </div>
      </div>

        <div onClick={scrollPrev} className={styles2.BackButtonAppFeatured}>
            <MyIconButton enabled={prevBtnEnabled} >
                <BackIcon/>
            </MyIconButton>
        </div>
        <div onClick={scrollNext} className={styles2.NextButtonAppFeatured}>
            <MyIconButton enabled={nextBtnEnabled}>
                <NextIcon/>
            </MyIconButton>
        </div>
    </div>
  );
};

export default SliderCardAppFeatured;
