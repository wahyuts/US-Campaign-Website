import OwlCarousel from "react-owl-carousel";
import styles from "../../styles/Organizer.module.css";
import { Image } from "react-bootstrap";
const options = {
  dots: false,
  nav: true,
  navText: [
    "<Image src='/about/left-arrow1.png' alt='kiri'/>",
    "<Image src='/about/right-arrow1.png' alt='kanan'/>",
  ],
  responsive: {
    0: {
      items: 1,
      margin: 0,
      nav: true,
      loop: true,
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
      items: 1,
      margin: 0,
      nav: true,
      loop: true,
    },
  },
};
export default function OrganizerGuideBook() {
    return (
        <div className={styles["section-guidebook"]}>
            <div className="container p-0">
            <div className={`text-center ${styles["section-content1"]}`}>
            <div className={styles["title-section"]}>
              {"Download our Campaign #ForChange Guidebook"}
        </div>
        <div className={styles["guidebook-des"]}>
        <div className="row mt-5">
               <div className="col-12 col-md-6 d-flex align-items-center">
          <Image
            alt="organizerguidebook"
            className={styles.careerImg}
            src="https://campaign.com/assets/uni_img/organizer/newbanner/organizerguidebook.png"
          />
        </div>
                <div className="col-12 col-md-6">
          <p className={`${styles.pcTitle} ${styles.col1Title}`}>
          Organizer Guidebook
          </p>
          <div className={styles.col1Content}>
          One-stop for Organizer needs:
      <li>Onboarding 101</li>
      <li>Forms that you should have</li>
      <li>Assets to make your Campaign & Challenge</li>
          </div>
          <div className={`d-flex ${styles.mob}`}>
            <a
              href="https://drive.google.com/uc?export=download&id=1iJPI33TSfE-jjjkzjegGQcLhlW4v_J7i"
              className={styles.btnTim}
              id="btn-agenda2">
              Download Now
            </a>
          </div>
        </div>
            </div>
            <div className="row mt-5">
               <div className="col-12 col-md-6 d-flex align-items-center">
          <Image
            alt="organizerguidebook"
            className={styles.careerImg}
            src="https://campaign.com/assets/uni_img/organizer/newbanner/supporterguidebook.png"
          />
        </div>
                <div className="col-12 col-md-6">
          <p className={`${styles.pcTitle} ${styles.col1Title}`}>
          Supporter Guidebook
          </p>
          <div className={styles.col1Content}>
          Very helpful guidebook for our Supporter
      <li>Learn more about Campaign.com</li>
      <li>Help you complete your Action</li>
      <li>Help you complete your Challenge</li>
          </div>
          <div className={`d-flex ${styles.mob}`}>
            <a
              href="https://drive.google.com/uc?export=download&id=1y28thgx2xUDKll9_i3rHr21VePRf3Yhu"
              className={styles.btnTim}
              id="btn-agenda2">
              Download Now
            </a>
          </div>
        </div>
            </div>
            </div>
          <div className={styles["guidebook-mob"]}>
          <OwlCarousel className="owl-carousel owl-theme p-0" {...options}>
      <div className="item">
      <h5 className="mt-4">
          Organizer Guidebook
          </h5>
      <Image
            alt="organizerguidebook"
            className={styles.careerImg}
            src="https://campaign.com/assets/uni_img/organizer/newbanner/organizerguidebook.png"
          />
          <div className={styles.col1Content}>
          One-stop for Organizer needs:
      <li>Onboarding 101</li>
      <li>Forms that you should have</li>
      <li>Assets to make your Campaign & Challenge</li>
          </div>
          <div className={`d-flex ${styles.mob}`}>
            <a
              href="https://drive.google.com/uc?export=download&id=1iJPI33TSfE-jjjkzjegGQcLhlW4v_J7i"
              className={styles.btnTim}
              id="btn-agenda2">
              Download Now
            </a>
          </div>
      </div>
      <div className="item">
      <h5 className="mt-4">
          Supporter Guidebook
          </h5>
          <Image
            alt="organizerguidebook"
            className={styles.careerImg}
            src="https://campaign.com/assets/uni_img/organizer/newbanner/supporterguidebook.png"
          />
          <div className={styles.col1Content}>
          Very helpful guidebook for our Supporter
      <li>Learn more about Campaign.com</li>
      <li>Help you complete your Action</li>
      <li>Help you complete your Challenge</li>
          </div>
          <div className={`d-flex ${styles.mob}`}>
            <a
              href="https://drive.google.com/uc?export=download&id=1y28thgx2xUDKll9_i3rHr21VePRf3Yhu"
              className={styles.btnTim}
              id="btn-agenda2">
              Download Now
            </a>
          </div>
      </div>
      </OwlCarousel>
          </div>
            </div>
            </div>
            </div>
    );
}