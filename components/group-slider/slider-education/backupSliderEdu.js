import React, { useState, useEffect, useCallback } from "react";
import Image from 'next/image';
import { PrevButton, NextButton } from "../../embla-arrow-button/CarouselArrowButton";
import useEmblaCarousel from "embla-carousel-react";
import { DataImageLocalEmbla } from "../../../utils/DataImageLocalEmbla";

import BackIcon from '@mui/icons-material/ArrowBackIosNew';
import NextIcon from '@mui/icons-material/ArrowForwardIos';
import CthCampaigner from "../../../public/assests/images/cthCampaigner.png";
import IconOutlineGroup from "../../../public/assests/images/IconOutlineGroup.png";
import IconUpHand from "../../../public/assests/images/upHand.png";
import styles from "../../../styles/EmblaSlider.module.css";
import styles2 from "../../../styles/ArrowButtonSlider.module.css";
import MyIconButton from "../../Reuseable-components/MyIconButton";
// import NoSSR from "../../../utils/NoSSR";

const SliderEducation = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 2,
    skipSnaps: false
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
          {slides.map((index) => (  // slide ini nanti diganti sama API
            <div className={styles.embla__slide} key={index}> {/*embla__slide ini buat cont car atau setiap card nya (bukan buat image doang yak))*/}
              
              <div style={{width:'90%',height:'90%',marginLeft:'auto',marginRight:'auto',backgroundColor:"yellow"}}>
                  <div style={{width:'100%',display:'flex'}}>
                      <div style={{width:'30%',height:'100%',backgroundColor:'green',position:'relative',display:'flex',alignItems:'center'}}>
                          {/* <p>buat pic</p> */}
                          {/* <div style={{display:'flex',alignItems:'center', height:50, weight:50}}> */}
                                <Image
                                    className={styles.embla__slide__img}
                                    src={DataImageLocalEmbla(index)}
                                    alt="Percobaan"
                                    width={300}
                                    height={300}
                                    // layout="fill"
                                    objectFit="contain"
                                />
                          {/* </div> */}
                          
                      </div>
                      <div style={{width:'70%',backgroundColor:'blue'}}>
                          <div style={{width:'90%',marginLeft:'auto',marginRight:'auto'}}>
                              <p style={{fontSize:18,fontWeight:700}}>One World Many Cultures: Embracing Diversity For Equality</p>
                              <hr style={{backgroundColor:'black'}}/>
                          </div>
                          <div style={{width:'90%',backgroundColor:'pink',marginLeft:'auto',marginRight:'auto', display:'flex', alignItems:'center'}}>
                              <div style={{marginRight:10, display:'flex', alignItems:'center'}}>
                                <div style={{marginRight:10,marginTop:5.5}}>
                                    <Image
                                          src={CthCampaigner}
                                          alt="Campaigner"
                                          width={21}
                                          height={21}
                                          // layout="fill"
                                          objectFit="contain"
                                      />
                                  </div>
                                  <p style={{fontSize:12,marginBottom:0}}>Name and logo</p>
                              </div>
                              <div style={{marginRight:10}}>
                                  |
                              </div>
                              <div>
                                  <p style={{fontSize:12,fontWeight:500,marginBottom:0, color:'#0082FF'}}># Hastag</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div style={{width:'100%',height:'30%',backgroundColor:'brown',display:'flex',alignItems:'center'}}>
                      <div style={{width:'80%',backgroundColor:'pink',marginLeft:'auto',marginRight:'auto', display:'flex'}}>
                          <div style={{marginRight:30, display:'flex', alignItems:'center'}}>
                              <div style={{marginRight:10,marginTop:5.5}}>
                                  <Image
                                      src={IconOutlineGroup}
                                      alt="Supporters"
                                      width={21}
                                      height={21}
                                      // layout="fill"
                                      objectFit="contain"
                                  />
                              </div>
                              <p style={{fontSize:14,marginBottom:0}}>1263 Supporters</p>
                          </div>
                          <div style={{display:'flex', alignItems:'center'}}>
                              <div style={{marginRight:10,marginTop:5.5}}>
                                  <Image
                                      src={IconUpHand}
                                      alt="Actions"
                                      width={21}
                                      height={21}
                                      // layout="fill"
                                      objectFit="contain"
                                  />
                              </div>
                              <p style={{fontSize:14,marginBottom:0}}>3 Actions</p>
                          </div>
                          
                      </div>
                  </div>
                  
              </div>
              {/* <div className={styles.embla__slide__inner}>
                    <Image
                        className={styles.embla__slide__img}
                        src={DataImageLocalEmbla(index)}
                        alt="A cool cat."
                        width={300}
                        height={300}
                        layout="responsive"
                        objectFit="cover"
                    />
              </div> */}
            </div>
          ))}
        </div>
      </div>
      {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
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
    </div>
  );
};

export default SliderEducation;
