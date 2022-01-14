import Image from "next/image";
// import Photos from '../../../public/assests/images/SocialFairWeek-Photos.png';
import USA from "../../public/assests/images/USA-Ambasador.png";

import styles from "../../styles/AmbasadorDesc.module.css"
const AmbasadorProgramDesc = () => {
    return ( 
        <div className={styles.mainContSocialFairWeek}>
            <h2 className={styles.h2SocialFairWeekTitle}>US Student Ambassador Program</h2>
            <hr style={{border:'none',marginBottom:20, backgroundColor:'transparent'}}/>
            <div className={styles.contPicAndDesc}>
                <div className={styles.contDesc}>
                    <p>Campaign.com is aiming to make a bigger impact through their international expansion plans. This program recruits college students in the US, who have the ability to expand the company’s outreach among the target market and increase the company’s brand presence in the country. </p>

                    <p>In this 4-month program, ambassadors are responsible for reaching out to their American student connections in their respective college communities, to participate in our market survey. Furthermore, they are also in charge of promoting the company’s mobile app to student organizations in their college. Throughout the program, these ambassadors work closely with the US Expansion Team in developing expansion strategies, through biweekly meetings and completing specific tasks.</p>
                </div>
                <div className={styles.contPicture}>
                    <div className={styles.InnerCardImagesSocialFairWeek}>
                        <Image src={USA} alt="USA Ambasador Programs" objectFit="cover" />
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default AmbasadorProgramDesc;