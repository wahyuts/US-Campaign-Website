import Image from 'next/image';
import { DataLocalProgramsUs } from "../../utils/DataLocalProgramsUs";
import { DataLocalCarrer } from "../../utils/DataLocalCarrer";
import styles from "../../styles/CardCarrer.module.css";
import MainButton from '../Reuseable-components/MainButton';

const CardCarrer = ({slides}) => {
    return ( 
        <>
            {slides.map((index) => (  
            <div className={styles.embla__card__slide} key={index}> {/*embla__slide ini buat cont car atau setiap card nya (bukan buat image doang yak))*/}
                <div className={styles.theCardUs}>
                    <div className={styles.innerCardUs}>
                        <div className={styles.contDivImage}>
                            <Image
                                src={DataLocalCarrer(index).photo}
                                alt="Photo"
                                layout="responsive"
                                objectFit="contain"
                            />
                        </div>
                        <div className={styles.secondPartCard}>
                            <h2 className={styles.cardTitleUs}>{DataLocalCarrer(index).title}</h2>

                            <div className={styles.descUs}>
                                <p style={{fontSize:16}}>{DataLocalCarrer(index).desc}</p>
                                <p style={{fontSize:16}}>{DataLocalCarrer(index).desc2}</p>
                                <li style={{fontSize:16}}>{DataLocalCarrer(index).loker1}</li>
                                <li style={{fontSize:16}}>{DataLocalCarrer(index).loker2}</li>
                                <li style={{fontSize:16}}>{DataLocalCarrer(index).loker3}</li>
                                <li style={{fontSize:16}}>{DataLocalCarrer(index).loker4}</li>
                            </div>
                            <hr style={{border:'none',marginBottom:10,backgroundColor:'transparent'}}/>

                            {/* <div className={styles.descUs}>
                                <p style={{fontSize:16}}>{DataLocalCarrer(index).desc2}</p>
                            </div> */}

                            <div className={styles.btnThisPrograms}>
                                <MainButton>
                                    See This Programs
                                </MainButton>
                            </div>
                        </div>

                    </div>
                </div>
                 
            </div>
          ))}
        </>
     );
}
 
export default CardCarrer;