// import Image from "next/image";
// import BannerReview from '../../../public/assests/images/bgReview.png';
import styles from '../../../styles/Events.module.css';
import SliderCardPrograms from '../../group-slider/slider-card-programs';

const SLIDE_COUNT = 1;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const UsPrograms = () => {
    return ( 
        <div className={styles.contBannerEvent}>
            {/* <Image src={BannerReview} alt="HomeImageBanner" layout='fill' objectFit='cover' /> */}
            <div className={styles.innerContBannerEvent}>
                <h2 className={styles.h2BannerPrograms}>Programs</h2>
            </div>

            <SliderCardPrograms slides={slides}/>
        </div>
     );
}
 
export default UsPrograms;