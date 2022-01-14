import Image from 'next/image';
import { DataLocalBennefit } from "../../utils/DataLocalBennefit";

import styles from "../../styles/CardBennefit.module.css";

const CardBennefit = ({slides}) => {
    return ( 
        <>
            {slides.map((index) => (  
            <div className={styles.embla__card__slide} key={index}> {/*embla__slide ini buat cont car atau setiap card nya (bukan buat image doang yak))*/}
                <div style={{width:'80%',marginLeft:'auto',marginRight:'auto',marginTop:40,marginBottom:20}}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                        <div style={{width:92,height:76}}>
                            <Image src={DataLocalBennefit(index).photo} alt="Benefit" layout='responsive' objectFit='contain' />
                        </div>
                        <p style={{textAlign:'center', marginTop:50}}>{DataLocalBennefit(index).desc}</p>
                    </div>
                </div>
              
            </div>
          ))}
        </>
     );
}
 
export default CardBennefit;