import Image from 'next/image';
import { DataLocalEventUs } from "../../utils/DataLocalEventUs";
import styles from "../../styles/CardEvent.module.css";

const CardEvent = ({slides}) => {
    return ( 
        <>
            {slides.map((index) => (  
            <div className={styles.embla__card__slide} key={index}> {/*embla__slide ini buat cont car atau setiap card nya (bukan buat image doang yak))*/}
                <div style={{position:'relative',width:'100%',marginBottom:20}}>
                    <Image
                        src={DataLocalEventUs(index).photo}
                        alt="Photo"
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div style={{position:'relative',width:'100%',minHeight:72,textAlign:'center',marginBottom:20}}>
                    <h2 style={{fontSize:24,color:'#0b318f',marginBottom:0}}>{DataLocalEventUs(index).title}</h2>
                </div>
                <div style={{position:'relative',width:'100%',textAlign:'center',marginBottom:20}}>
                    <div style={{width:'89%',minHeight:255,marginLeft:'auto',marginRight:'auto'}}>
                        <p style={{fontSize:16}}>{DataLocalEventUs(index).desc}</p>
                    </div>
                </div>
                <div style={{width:'89%',height:64,marginLeft:'auto',marginRight:'auto',marginBottom:20}}>
                    <button style={{width:'100%',height:'100%',backgroundColor:'#FFFFFF',border:'2px solid #0082FF'}}>
                        {`See This Event`}
                    </button>
                </div>
                
              
            </div>
          ))}
        </>
     );
}
 
export default CardEvent;