import Image from "next/image";
import BannerSponsor from '../../public/assests/images/SponsorOurComm.png'
import styles from "../../styles/SponsorBanner.module.css"


const SponsorBanner = () => {
    return ( 
        <div className={styles.mainCont}>
            <div className={styles.innerCont}>
                <div style={{width:'85%',marginLeft:'auto',marginRight:'auto',paddingTop:40,paddingBottom:20}}>
                    <h2 className={styles.h2SponsorBanner}>Our Community</h2>
                </div>
                <div style={{width:'70%',marginLeft:'auto',marginRight:'auto'}}>
                    <Image src={BannerSponsor} alt="USA Ambasador Programs" objectFit="cover" />
                </div>
            </div>
        </div>
     );
}
 
export default SponsorBanner;