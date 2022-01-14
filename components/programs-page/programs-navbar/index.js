import styles from "../../../styles/ProgramsNavbar.module.css"

import ReactResponsiveHook from '../../../utils/ReactResponsiveHook';
import { useRouter } from 'next/router';

const ProgramsNavBar = () => {
    const router = useRouter();
    const { isMobile, isTablet, isDesktop } = ReactResponsiveHook();

    const handleClickHomepage = (e) => {
        e.preventDefault();
        router.push('/');
    }

    let programsNavBar = (
        <div className={styles.mainCont}>
            <div onClick={handleClickHomepage}>
                <a style={{fontSize:16,fontWeight:400, cursor:'pointer'}}>Home</a>
            </div>
            <div className={styles.theNavBar}>
                {/* {'>'} */}
            </div>
            {/* <div style={{marginLeft:10,marginRight:10}}>
                {'>'}
            </div> */}
            <div>
                <a style={{fontSize:16,fontWeight:700}}>Programs</a>
            </div>
        </div>
    )
    return ( 
        <>
            {isMobile ? (
                isTablet ? (
                    isDesktop ? (
                        programsNavBar
                    ) : (
                        programsNavBar
                    )
                ) : (
                    programsNavBar
                )
            ) : (
                null
            )}
        </>
     );
}
 
export default ProgramsNavBar;
