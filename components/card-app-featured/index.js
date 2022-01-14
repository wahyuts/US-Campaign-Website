import Image from 'next/image';
import { DataLocalAppFeatured } from "../../utils/DataLocalAppFeatured";
import styles from "../../styles/CardAppFeatured.module.css";

const CardAppFeatured = ({slides}) => {
    return ( 
        <>
            {slides.map((index) => (  
            <div className={styles.embla__card__slide} key={index}> 
                <div className={styles.contImagePhoto}>
                    <Image
                        src={DataLocalAppFeatured(index).photo}
                        alt="Photo"
                        objectFit="cover"
                    />
                </div>
                <div style={{width:'100%',height:20,backgroundColor:'transparent'}}>
                    <p style={{color:'transparent'}}>pembatas</p>
                </div>
                <div style={{width:'100%',height:180,border:'1px solid #0082FF'}}>
                    <h2 style={{textAlign:'center',fontSize:24,fontWeight:700,paddingTop:10}}>{DataLocalAppFeatured(index).number}</h2>
                    <h2 style={{textAlign:'center',fontSize:18,fontWeight:700}}>{DataLocalAppFeatured(index).title}</h2>
                    <div style={{width:'90%',marginLeft:'auto',marginRight:'auto'}}>
                        <p style={{textAlign:'center',fontSize:14,fontWeight:400}}>{DataLocalAppFeatured(index).desc}</p>
                    </div>
                </div>



                {/* <div className={styles.contImagePhoto}>
                        <div style={{border:'2px solid white',borderRadius:'50%',width:100,height:100,backgroundColor:'white'}} >
                                <Image
                                    src={DataLocalAppFeatured(index).photo}
                                    alt="Photo"
                                    objectFit="cover"
                                />
                        </div>
                </div>
                <div className={styles.firstInnerContCard}>
                    <div className={styles.innerContComment}>
                        <p style={{fontSize:15}}>{DataLocalAppFeatured(index).comment}</p>
                    </div>
                </div>
                
                <div className={styles.secondPartCard}>
                    <div className={styles.innerSecondPartCard}>
                            <p style={{fontSize:18,fontWeight:700,color:'white',marginBottom:0,textAlign:'center'}}>{DataLocalAppFeatured(index).name}</p>
                            <p style={{fontSize:12,fontWeight:500,color:'white',marginBottom:0,textAlign:'center'}}>{DataLocalAppFeatured(index).job}</p>
                    </div>
                </div>      */}
              
            </div>
          ))}
        </>
     );
}
 
export default CardAppFeatured;