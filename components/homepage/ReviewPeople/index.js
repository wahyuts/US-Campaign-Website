import Image from "next/image";
import SliderCardReview from "../../group-slider/slider-card-review/SliderCardReview";
import BannerReview from '../../../public/assests/images/bgReview.png';
import styles from '../../../styles/ReviewPeople.module.css';

const SLIDE_COUNT = 4;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const ReviewPeople = () => {
    return ( 
        <div className={styles.contBannerReview}>
            <Image src={BannerReview} alt="HomeImageBanner" layout='fill' objectFit='cover' />
            <div className={styles.innerContBannerReview}>
                <h2 className={styles.h2BannerReview}>What They Say About Campaign #ForChange</h2>
                
            </div>

            <SliderCardReview slides={slides}/>
        </div>
     );
}
 
export default ReviewPeople;