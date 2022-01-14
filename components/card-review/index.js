import Image from 'next/image';
import { DataLocalPhotoReview } from "../../utils/DataLocalPhotoReview";
import styles from "../../styles/CardReview.module.css";

const CardReview = ({slides}) => {
    return ( 
        <>
            {slides.map((index) => (  
            <div className={styles.embla__card__slide} key={index}> {/*embla__slide ini buat cont car atau setiap card nya (bukan buat image doang yak))*/}
                <div className={styles.contImagePhoto}>
                        <div style={{border:'2px solid white',borderRadius:'50%',width:100,height:100,backgroundColor:'white'}} >
                                <Image
                                    src={DataLocalPhotoReview(index).photo}
                                    alt="Photo"
                                    objectFit="cover"
                                />
                        </div>
                </div>
                <div className={styles.firstInnerContCard}>
                    <div className={styles.innerContComment}>
                        <p style={{fontSize:15}}>{DataLocalPhotoReview(index).comment}</p>
                    </div>
                </div>
                
                <div className={styles.secondPartCard}>
                    <div className={styles.innerSecondPartCard}>
                            <p style={{fontSize:18,fontWeight:700,color:'white',marginBottom:0,textAlign:'center'}}>{DataLocalPhotoReview(index).name}</p>
                            <p style={{fontSize:12,fontWeight:500,color:'white',marginBottom:0,textAlign:'center'}}>{DataLocalPhotoReview(index).job}</p>
                    </div>
                </div>     
              
            </div>
          ))}
        </>
     );
}
 
export default CardReview;