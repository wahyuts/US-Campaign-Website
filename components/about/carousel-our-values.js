import OwlCarousel from "react-owl-carousel";
import styles from "../../styles/About.module.css";
import { Image } from "react-bootstrap";
const options = {
    dots: false,
    nav: false,
    navText: [
      "<Image src='/about/left-arrow.png' alt='kiri'/>",
      "<Image src='/about/right-arrow.png' alt='kanan'/>",
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
      },
      701: {
        items: 1,
        margin: 0,
        nav: true,
      },
      1200: {
        items: 4,
        margin: 0,
        nav: false,
      },
    },
  };
  export default function CarouselValues(props) {
    const {ourvalues} = props;
    return (
      <>
        <div className={styles["section-4"]}>
        <div className="container p-0">
          <div className={`text-center ${styles["section-content"]}`}>
            <div className={styles["title-section1"]}>
              {ourvalues.title_value}
            </div>
            <div
              className={`mt-5 mb-5 px-4 text-left ${styles["desc-section1"]}`}
              id="title-value"
            >
              {ourvalues.desc_values}
            </div>
            <OwlCarousel className="owl-carousel owl-theme p-0" {...options}>
      <div className="item">
                <Image
                  src="/about/icon-social.svg"
                  className={styles["img-values"]}
                  alt="fun"
                />
                 <div className={`${styles["card-value"]}`}>
                <div className={` ${styles["title-value"]}`}>
                  Social Only
                </div>
                <div className={`mt-4 ${styles["desc-value"]}`}>
                  {ourvalues.desc_social_value}
                </div>
                </div>
      </div>
      <div className="item">
      <Image
                  src="/about/icon-collab.svg"
                  className={styles["img-values"]}
                  alt="fun"
                />
                <div className={`${styles["card-value"]}`}>
                <div className={` ${styles["title-value"]}`}>
                  Full Colaboration
                </div>
                <div className={`mt-4 ${styles["desc-value"]}`}>
                  {ourvalues.desc_collab_value}
                </div>
                </div>
      </div>
      <div className="item">
      <Image
                  src="/about/icon-safe.svg"
                  className={styles["img-values"]}
                  alt="fun"
                />
                <div className={`${styles["card-value"]}`}>
               
                <div className={` ${styles["title-value"]}`}>
                  Safe Space
                </div>
                <div className={`mt-4 ${styles["desc-value"]}`}>
                  {ourvalues.desc_safe_value}
                </div>
                </div>
      </div>
      <div className="item">
      <Image
                  src="/about/icon-fun.svg"
                  className={styles["img-values"]}
                  alt="fun"
                />
                <div className={`${styles["card-value"]}`}>
               
                <div className={` ${styles["title-value"]}`}>
                  Have Fun
                </div>
                <div className={`mt-4 ${styles["desc-value"]}`}>
                  {ourvalues.desc_havefun_value}
                </div>
                </div>
      </div>
      </OwlCarousel>
          </div>
        </div>
      </div>
      </>
    );
  }