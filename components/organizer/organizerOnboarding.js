import styles from "../../styles/Organizer.module.css";
import { Image } from "react-bootstrap";

export default function OrganizerOnboarding() {
    return (
        <div id="onboarding01" className={styles["section-onboarding"]}>
            <div className="container p-0">
            <div className={`text-center ${styles["section-content"]}`}>
            <div className={styles["title-section1"]}>
              {"Organizer Onboarding Process"}
        </div>
        <Image alt="step-organizer" src="/organizer/steps.svg" className={styles["img-steps"]}/>
        <Image alt="step-organizer" src="/organizer/step-mob.svg" className={styles["img-steps-mob"]}/>
            </div>
            </div>
            </div>
    );
}