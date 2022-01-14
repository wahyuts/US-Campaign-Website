import Image from 'next/image';
import { useRouter } from 'next/router';
import { DataLocalProgramsUs } from "../../utils/DataLocalProgramsUs";
import styles from "../../styles/CardUsPrograms.module.css";
import MainButton from '../Reuseable-components/MainButton';

const CardUsPrograms = ({slides}) => {
    const router = useRouter();

    const handleClickOpen = (e) => {
        e.preventDefault();
        router.push('/student-ambasador-programs');
    }
    return ( 
        <>
            {slides.map((index) => (  
            <div className={styles.embla__card__slide} key={index}> {/*embla__slide ini buat cont car atau setiap card nya (bukan buat image doang yak))*/}
                <div className={styles.theCardUs}>
                    <div className={styles.innerCardUs}>
                        <div className={styles.contDivImage}>
                            <Image
                                src={DataLocalProgramsUs(index).photo}
                                alt="Photo"
                                layout="responsive"
                                objectFit="contain"
                            />
                        </div>
                        <div className={styles.secondPartCard}>
                            <h2 className={styles.cardTitleUs}>{DataLocalProgramsUs(index).title}</h2>

                            <div className={styles.descUs}>
                                <p style={{fontSize:16}}>{DataLocalProgramsUs(index).desc}</p>
                            </div>

                            <div className={styles.btnThisPrograms}>
                                <MainButton onClick={handleClickOpen}>
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
 
export default CardUsPrograms;