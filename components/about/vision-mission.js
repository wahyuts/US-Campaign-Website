import styles from "../../styles/About.module.css";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
const options = {
    dots: false,
    nav: false,
    // autoHeight:true,
    navText: [
      "<Image src='/about/left-arrow1.png' alt='kiri'/>",
      "<Image src='/about/right-arrow1.png' alt='kanan'/>",
    ],
    
    responsive: {
      0: {
        items: 1,
        margin: 0,
        nav: true,
        loop: false,
        autoplay: false,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        autoHeight:true,
      },
      701: {
        items: 1,
        margin: 0,
        nav: true,
        autoHeight:true,
      },
      1200: {
        items: 4,
        margin: 0,
        nav: false,
      },
    },
  };
export default function VisionMission(props) {
  const {visionmission} = props;
  const [visi, setVisi] = useState('biru');
  return (
    <>
       <div className={styles["section-2"]} >
          <div className={`${styles["section-content1"]} `}>
          <div className={`text-center mb-5 ${styles["title-section"]}`}>{visionmission.title}</div>
          <div className={styles["visimisides"]}>
          <div className={`row m-0 ${visi == "biru" && "d-flex"} ${visi != "biru" && "d-none"}`}>
          <div className="col-xl-5 col-md-5 col-sm-5 p-0">
          <Image 
          src="/about/visimisi1.png" 
          alt={visionmission.title} 
          className={styles["img-visionmission"]} 
          id="img-visimisi"/>
          </div>

          <div className="col-xl-1 col-md-1 col-sm-1 mt-3">
          <Image 
          src="/about/icon-earth.svg" 
          alt="icon-earth" 
          className={`mt-5 ${styles["img-icon"]}`}
          onClick={() => setVisi("biru")}
          />
           <Image 
           src="/about/icon-protection.svg" 
           alt="icon-protection" 
           className={`mt-5 ${styles["img-icon"]}`}
          onClick={() => setVisi("merah")}
           />
          </div>
         
          <div className="col-xl-6 col-md-6 col-sm-6 p-0 m-auto">
          <div className={styles["title-section2"]}>{visionmission.title1}</div>
          <div className={styles["desc-section4"]}>{visionmission.desc1}</div>
        </div>
          </div>
          <div className={`row m-0 ${visi == "merah" && "d-flex"} ${visi != "merah" && "d-none"}`}>
          <div className="col-xl-5 col-md-5 col-sm-5 p-0">
          <Image 
          src="/about/visimisi2.png" 
          alt={visionmission.title} 
          className={styles["img-visionmission"]} 
          id="img-visimisi"/>
          </div>

          <div className="col-xl-1 col-md-1 col-sm-1 mt-3">
          <Image 
          src="/about/icon-earth1.svg" 
          alt="icon-earth" 
          className={`mt-5 ${styles["img-icon"]}`}
          onClick={() => setVisi("biru")}
          />
           <Image 
           src="/about/icon-protection1.svg" 
           alt="icon-protection" 
           className={`mt-5 ${styles["img-icon"]}`}
           onClick={() => setVisi("merah")}
           />
          </div>
         
          <div className="col-xl-6 col-md-6 col-sm-6 p-0 m-auto">
          <div className={styles["title-section3"]}>{visionmission.title2}</div>
          <div className={styles["desc-section4"]}>{visionmission.desc2}</div>
        </div>
          </div>
          </div>
          <div className={styles["visimisimob"]}>
        <OwlCarousel className="owl-carousel owl-theme p-0"  {...options}>
      <div className={`item ${styles["bg-item1-visimisi"]}`}>
          <div className={styles["title-visimisi"]}>{visionmission.title1}</div>
          <div className={styles["desc-visimisi"]}>{visionmission.desc1}</div>
      </div>
      <div className={`item ${styles["bg-item2-visimisi"]}`}>
          <div className={styles["title-visimisi"]}>{visionmission.title2}</div>
          <div className={styles["desc-visimisi"]}>{visionmission.desc2}</div>
      </div>
      </OwlCarousel>
      </div>
        </div>
       
      </div>
    </>
  );
}
