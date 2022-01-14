// import Image from "next/image";
// import BannerReview from '../../../public/assests/images/bgReview.png';
import styles from '../../../styles/Carrer.module.css';
import SliderCardCarrer from '../../group-slider/slider-card-carrer';
// import SliderCardPrograms from '../../group-slider/slider-card-programs';

const SLIDE_COUNT = 1;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Carrer = () => {
    return ( 
        <div className={styles.contBannerEvent}>
            {/* <Image src={BannerReview} alt="HomeImageBanner" layout='fill' objectFit='cover' /> */}
            <div className={styles.innerContBannerEvent}>
                <h2 className={styles.h2BannerPrograms}>Carrer & Recruitment</h2>
            </div>

            {/* <SliderCardPrograms slides={slides}/> */}
            <SliderCardCarrer slides={slides}/>
        </div>
     );
}
 
export default Carrer;