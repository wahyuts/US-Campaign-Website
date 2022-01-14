import styles from "../../styles/About.module.css";
import { Image } from "react-bootstrap";
export default function DescSection(props) {
  const { title, desc, imgUrl } = props;
  return (
    <>
      
      <div className={`text-center ${styles["title-section"]}`}>{title}</div>
      <div className="row mt-5 gx-5 d-flex flex-row-reverse mx-auto">
        <div className="col-xl-6 col-lg-6 justify-content-center align-items-center">
          <Image src={imgUrl} alt={title} className={styles["img-aboutus"]} />
        </div>
        <div className="col-xl-6 col-lg-6 pt-4 pb-4">
          <div className={styles["desc-section"]}>{desc}</div>
        </div>
      </div>
    </>
  );
}
