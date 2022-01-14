import Image from 'next/image';
import React, { useState } from 'react';

import { useRouter } from 'next/router';
import Logo from '../../public/assests/images/CampaignLogo.png';
import MenuIcon from '@mui/icons-material/Menu';
import ReactResponsiveHook from '../../utils/ReactResponsiveHook';

import styles from '../../styles/HeadNav.module.css';
import ModalDownload from '../homepage/modal-download';

const HeadNav = ({clickModal}) => {

    const { isMobile, isTablet, isDesktop } = ReactResponsiveHook();
    const router = useRouter();

    const [open,setOpen] = useState(false);

    const openMenu = () => {
        setOpen(!open)
    }

    const handleClickHomepage = (e) => {
        e.preventDefault();
        router.push('/');
        setOpen(false);
    }

    const handleClickAboutUs = (e) => {
        e.preventDefault();
        router.push('/about');
        setOpen(false);
    }

    const handleClickPrograms = (e) => {
        e.preventDefault();
        router.push('/programs');
        setOpen(false);
    }

    const handleClickOrganizers = (e) => {
        e.preventDefault();
        router.push('/organizers');
        setOpen(false);
    }

    const handleClickSponsors = (e) => {                 
        e.preventDefault();
        router.push('/sponsors');
        setOpen(false);
    }

    const handleClickFAQ = (e) => {
        e.preventDefault();
        window.open('https://www.campaign.com/faq')
        // router.push('/faq');
        setOpen(false);
    }

    let normalNav = (
        <div className={styles.contLiNav}>
            
            <a className={styles.eachLi} onClick={handleClickAboutUs}>
                About Us
            </a>
            
            <a className={styles.eachLi} onClick={handleClickPrograms}>
                Programs
            </a>
            
            <a className={styles.eachLi} onClick={handleClickOrganizers}>
                Organizers
            </a>
            
            <a className={styles.eachLi} onClick={handleClickSponsors}>
                Sponsors
            </a>

            {/* <a className={styles.eachLi}>
                Sponsors
            </a> */}
            
            <a className={styles.eachLi} onClick={handleClickFAQ}>
                FAQ
            </a>

            {/* <div className={styles.btnDownload}>
                Download
            </div> */}
            
        </div>
    );

    let displayUIforDesktop = (
    <div className={styles.navmainbar}> 
        <div className={styles.contToolbar}>

            <div style={{ display: 'flex', alignItems: 'center', width: '100%',height:80, justifyContent: 'space-between' }}>
                <div style={{marginRight:50}} onClick={handleClickHomepage}>
                    <Image src={Logo} alt="Logo" width={192} height={33} />
                </div>

                {normalNav}

                <ModalDownload clickModal = {clickModal}/>
                {/* <div className={styles.btnDownload}>
                    DownloadDD
                </div> */}
            </div>

        </div>
    </div>

    );

    let menuMobile = (
        open ? (
            <div style={{position:'absolute',width:'100%',backgroundColor:'black',zIndex:1}}>
                <div className={styles.eachBoxMenuMobile} onClick={handleClickAboutUs}>
                    <p style={{color:'white',fontSize:18,marginBottom:0}}>About Us</p>
                </div>
                <div className={styles.eachBoxMenuMobile} onClick={handleClickPrograms}>
                    <p style={{color:'white',fontSize:18,marginBottom:0}}>Programs</p>
                </div>
                <div className={styles.eachBoxMenuMobile} onClick={handleClickOrganizers}>
                    <p style={{color:'white',fontSize:18,marginBottom:0}}>Organizers</p>
                </div>
                <div className={styles.eachBoxMenuMobile} onClick={handleClickSponsors}>
                    <p style={{color:'white',fontSize:18,marginBottom:0}}>Sponsors</p>
                </div>
                <div className={styles.eachBoxMenuMobile} onClick={handleClickFAQ}>
                    <p style={{color:'white',fontSize:18,marginBottom:0}}>FAQ</p>
                </div>
            </div>
        ): null
        
    )

    let displayUIforMobile = (

    <div className={styles.navmainbarMobile}> 
        <div className={styles.contToolbar}>

            <div style={{ display: 'flex', alignItems: 'center', width: '100%',height:80, justifyContent: 'space-between' }}>
                <div onClick={handleClickHomepage}>
                    <Image src={Logo} alt="Logo" width={192} height={33} />
                </div>
                <div style={{color:'white',display:'flex',alignItems:'center'}} onClick={openMenu}>
                    <MenuIcon/>
                </div>
            </div>

        </div>
        {menuMobile}
    </div>

    );

    return ( 
        <div>
            {isMobile ? (
                isTablet ? (
                    isDesktop ? (
                        displayUIforDesktop
                    ) : (
                        displayUIforDesktop
                    )
                ) : (
                    displayUIforDesktop
                )
            ) : (
                displayUIforMobile
            )}

        </div>
     );
}
 
export default HeadNav;