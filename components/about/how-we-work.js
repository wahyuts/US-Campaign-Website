import styles from "../../styles/About.module.css";
import { Image } from "react-bootstrap";
export default function HowWeWork(props) {
  const {title} = props;
  return (
    <>
       
       <div className={styles["section-3"]}>
        <div className="container">
          <div className={styles["section-content"]}>
          <div className={`text-center mb-5 ${styles["title-section"]}`}>{title}</div>
          <Image src="/about/howwework.svg" alt={title} className={styles["img-howwework"]} />
          </div>
        </div>
      </div>
    </>
  );
}
