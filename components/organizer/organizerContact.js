import styles from "../../styles/Organizer.module.css";
import { Image } from "react-bootstrap";
export default function OrganizerContact() {
    return (
        <div className={styles["section-contact"]}>
            <div className="container">
            <div className={styles["section-content"]}>
            <div className="row d-flex flex-row">
                <div className="text-center col-lg-6 col-md-12 col-12">
                <div className={`mt-2 mb-4 ${styles["title-section1"]} ${styles["title-mob"]} `}>
                    {"Contact Us"}
                </div>
                <Image alt="" src="/organizer/champ-contact.png" className={styles["img-contact"]}/>
                </div>
                <div className={`col-lg-6 col-md-12 col-12 ${styles["contact-center"]}`}>
                <div className={`${styles["title-section1"]} ${styles["title-des"]} `}>
                    {"Contact Us"}
                </div>
                <h3 className={styles.name}>Floriane Marguerite (Irene)</h3>
                <h5 className={styles.jobs}>Expansion Officer</h5>
                <p className={styles.email}>ireneflo@campaign.com</p>
                </div>
            </div>
            
            </div>
            </div>
            </div>
    );
}