import Image from "next/image";
import Photos from '../../../public/assests/images/SocialFairWeek-Photos.png';


import styles from "../../../styles/SocialFairWeek.module.css"
const SocialFairWeek = () => {
    return ( 
        <div className={styles.mainContSocialFairWeek}>
            <h2 className={styles.h2SocialFairWeekTitle}>Social Fair Week</h2>
            <p className={styles.pSocialFairWeekSubTitle}>Encouraging society of today to become Agents of Change</p>
            <hr style={{border:'none',marginBottom:20, backgroundColor:'transparent'}}/>
            <div className={styles.contPicAndDesc}>
                <div className={styles.contPicture}>
                    <div className={styles.InnerCardImagesSocialFairWeek}>
                        <Image src={Photos} alt="Social Fair Week Photos" objectFit="cover" />
                    </div>
                </div>
                <div className={styles.contDesc}>
                    <p style={{marginBottom:0}}>Social Fair Week is a Program organized by Campaign.com to introduce various Social Activities based on the issues most raised by social organizations:</p>
                    <ol>
                        <li>Education</li>
                        <li>Environtment</li>
                        <li>Health</li>
                        <li>Equality</li>
                    </ol>
                    <p>Invited Social Organizations are partners of Campaign.com who have collaborated in conducting digital campaigns in
                    the form of challenges on the Campaign #ForChange
                    Mobile App. </p>

                    <p>Sign-up for our Social Fair Week in an educational, insightful, impactful, and fun way. Aimed for students, schools, work-places, and companies to be raise greater awareness to contribute in social impact.</p>

                   
                </div>
            </div>

        </div>
     );
}
 
export default SocialFairWeek;