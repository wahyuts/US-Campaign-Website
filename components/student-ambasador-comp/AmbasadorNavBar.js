import styles from "../../styles/AmbasadorNavbar.module.css"

import ReactResponsiveHook from '../../utils/ReactResponsiveHook';
import { useRouter } from 'next/router';


const AmbasadorNavBar = () => {
    const router = useRouter();
    const { isMobile, isTablet, isDesktop } = ReactResponsiveHook();

    const handleClickHomepage = (e) => {
        e.preventDefault();
        router.push('/');
    }

    const handleClickProgram = (e) => {
        e.preventDefault();
        router.push('/programs');
    }

    let programsNavBar = (
        <div className={styles.mainCont}>
            <div onClick={handleClickHomepage}>
                <a style={{fontSize:16,fontWeight:400,cursor:'pointer'}}>Home</a>
            </div>
            <div className={styles.theNavBar}>
                {/* {'>'} */}
            </div>
            <div onClick={handleClickProgram}>
                <a style={{fontSize:16,fontWeight:400,cursor:'pointer'}}>Programs</a>
            </div>
            <div className={styles.theNavBar}>
                {/* {'>'} */}
            </div>
            <div>
                <a style={{fontSize:16,fontWeight:700}}>US Student Ambassador Progam</a>
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
 
export default AmbasadorNavBar;