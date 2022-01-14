import styles from "../../styles/Organizer.module.css";
import { Image } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
const options = {
  dots: false,
  nav: false,
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
export default function OrganizerBenefit(props) {
    const {benefit} = props;
    return (
        <div className={styles["section-benefit"]}>
            <div className="container">
            <div className={`text-center ${styles["section-content"]}`}>
            <div className={styles["title-section"]}>
              {benefit.title}
        </div>
        <div className={styles["benefitdes"]}>
            <div className="d-flex mt-4">
                <div className={styles["card-benefit"]}>
                <Image alt="" src="/organizer/benefit-brand.svg" className={styles["img-benefit"]}/>
                <div className={styles["desc-section"]}>
              {benefit.benefit1}
                </div>
                </div>
                <div className={styles["card-benefit"]}>
                <Image alt="" src="/organizer/benefit-member.svg" className={styles["img-benefit"]}/>
                <div className={styles["desc-section"]}>
              {benefit.benefit2}
                </div>
                </div>
                <div className={styles["card-benefit"]}>
                <Image alt="" src="/organizer/benefit-shield.svg" className={styles["img-benefit"]}/>
                <div className={styles["desc-section"]}>
              {benefit.benefit3}
                </div>
                </div>
            </div>
            <div className={`d-flex ${styles["flex-card"]}`}>
            <div className={styles["card-benefit"]}>
                <Image alt="" src="/organizer/benefit-collaboration.svg" className={styles["img-benefit"]}/>
                <div className={styles["desc-section"]}>
              {benefit.benefit4}
                </div>
                </div>
                <div className={styles["card-benefit"]}>
                <Image alt="" src="/organizer/benefit-funds.svg" className={styles["img-benefit"]}/>
                <div className={styles["desc-section"]}>
              {benefit.benefit5}
                </div>
                </div>
            </div>
            </div>
<div className={styles["benefitmob"]}>
<OwlCarousel className="owl-carousel owl-theme p-0"  {...options}>
      <div className="item">
      <div className={styles["card-benefit"]}>
                <Image alt="" src="/organizer/benefit-brand.svg" className={styles["img-benefit"]}/>
                <div className={styles["desc-section"]}>
              {benefit.benefit1}
                </div>
                </div>
      </div>
      <div className="item">
      <div className={styles["card-benefit"]}>
                <Image alt="" src="/organizer/benefit-member.svg" className={styles["img-benefit"]}/>
                <div className={styles["desc-section"]}>
              {benefit.benefit2}
                </div>
                </div>
      </div>
      <div className="item">
      <div className={styles["card-benefit"]}>
                <Image alt="" src="/organizer/benefit-shield.svg" className={styles["img-benefit"]}/>
                <div className={styles["desc-section"]}>
              {benefit.benefit3}
                </div>
                </div>
      </div>
      <div className="item">
      <div className={styles["card-benefit"]}>
                <Image alt="" src="/organizer/benefit-collaboration.svg" className={styles["img-benefit"]}/>
                <div className={styles["desc-section"]}>
              {benefit.benefit4}
                </div>
                </div>
      </div>
      <div className="item">
      <div className={styles["card-benefit"]}>
                <Image alt="" src="/organizer/benefit-funds.svg" className={styles["img-benefit"]}/>
                <div className={styles["desc-section"]}>
              {benefit.benefit5}
                </div>
                </div>
      </div>
      
      </OwlCarousel>

</div>


            </div>
            </div>
            </div>
    );
}