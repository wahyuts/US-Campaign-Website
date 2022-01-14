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
export default function OrganizerSuccessStories(props) {
    const {stories} = props;
    return (
        <div className={styles["section-stories"]}>
            <div className="container p-0">
            <div className={`text-center ${styles["section-content"]}`}>
            <div className={styles["title-section"]}>
              {"Success Stories & Testimonials"}
        </div>
        <OwlCarousel className="owl-carousel owl-theme p-0" {...options}>
      <div className="item">
                <Image alt=""
                  src="/organizer/logo-permias-nasional.svg"
                  className={styles["img-stories"]}
                />
                 <div className={`${styles["card-stories"]}`}>
                <div className={` ${styles["desc-stories"]}`}>
                  {stories.desc_stories1}
                </div>
                <center>
              <hr className={`d-flex justify-content-center ${styles.garis}`} />
            </center>
                <h4 className={styles.name}>{stories.name_stories1}</h4>
                <h6 className={styles.title}>{stories.title_stories1}</h6>
                <h6>{stories.job_stories1}</h6>
                </div>
      </div>
      <div className="item">
                <Image alt=""
                  src="/organizer/logo-permias-seattle.svg"
                  className={styles["img-stories"]}
                />
                 <div className={`${styles["card-stories"]}`}>
                <div className={` ${styles["desc-stories"]}`}>
                  {stories.desc_stories2}
                </div>
                <center>
              <hr className={`d-flex justify-content-center ${styles.garis}`} />
            </center>
                <h4 className={styles.name}>{stories.name_stories2}</h4>
                <h6 className={styles.title}>{stories.title_stories2}</h6>
                <h6>{stories.job_stories2}</h6>
                </div>
      </div>
      <div className="item">
                <Image
                  src="/organizer/logo-permias-newyork.svg"
                  className={styles["img-stories"]}
                  alt="fun"
                />
                 <div className={`${styles["card-stories"]}`}>
                <div className={` ${styles["desc-stories"]}`}>
                  {stories.desc_stories3}
                </div>
                <center>
              <hr className={`d-flex justify-content-center ${styles.garis}`} />
            </center>
                <h4>{stories.name_stories3}</h4>
                </div>
      </div>
      <div className="item">
                <Image
                  src="/organizer/logo-kerjaio.svg"
                  className={styles["img-stories"]}
                  alt="fun"
                />
                 <div className={`${styles["card-stories"]}`}>
                <div className={` ${styles["desc-stories"]}`}>
                  {stories.desc_stories4}
                </div>
                <center>
              <hr className={`d-flex justify-content-center ${styles.garis}`} />
            </center>
                <h4>{stories.name_stories4}</h4>
                </div>
      </div>
      </OwlCarousel>
            </div>
            </div>
            </div>
    );
}