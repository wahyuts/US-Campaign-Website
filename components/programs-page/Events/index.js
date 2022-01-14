import Image from "next/image";
import BannerReview from '../../../public/assests/images/bgReview.png';
import styles from '../../../styles/Events.module.css';
import SliderCardEvent from "../../group-slider/slider-card-event";

const SLIDE_COUNT = 3;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Events = () => {
    return ( 
        <div className={styles.contBannerEvent}>
            <Image src={BannerReview} alt="HomeImageBanner" layout='fill' objectFit='cover' />
            <div className={styles.innerContBannerEvent}>
                <h2 className={styles.h2BannerEvent}>Events</h2>
                
            </div>

            <SliderCardEvent slides={slides}/>
        </div>
     );
}
 
export default Events;