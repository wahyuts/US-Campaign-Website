import Head from "next/head";
import Image from "next/image";
import ReactResponsiveHook from '../utils/ReactResponsiveHook';

import AwardImage from '../public/assests/images/Award.png';
import AwardImageMobile from '../public/assests/images/AwardMobileModif.png';
import CupAward from '../public/assests/images/CupAward.png';
import CollaborateOrganizer from '../public/assests/images/Collaborate-Organizer.png';
import CollaborateSponsor from '../public/assests/images/Collaborate-Sponsor.png';
import CollaborateFairWeek from '../public/assests/images/Collaborate-FairWeek.png';

import styles from "../styles/Home.module.css";
import SocialDataTaken from "../components/homepage/social-data-taken";
import AppFeatured from "../components/homepage/app-featured";
import ReadyJoinChallange from "../components/homepage/ready-join-challange";
import ReviewPeople from "../components/homepage/ReviewPeople";
import FormReceiveUpdates from "../components/homepage/form-receive-updates";
import BannerBarcode from "../components/homepage/banner-barcode";
// import ForModalDownload from '../utils/ForModalDownload';

// import Footer from "../components/navbar/footer";

export default function Home() {
//   const {openModal} = ForModalDownload();

  const { isMobile, isTablet, isDesktop } = ReactResponsiveHook();

  let gpaDesktop = (
    <div style={{width:'100%', height:140, display:'flex', justifyContent:'center', alignItems:'center', backgroundColor: '#000000'}}>
        <div style={{display:'flex', alignItems:'center'}}>
            <div style={{fontSize:36, fontWeight:700, marginLeft:15, color:'white'}}>
                <p>Google Play Awards 2020: Best App For Good</p>
            </div>
            <div style={{height:140, width:384}}>
                <Image src={AwardImage} alt="Logo" />
            </div>
        </div>
    </div>
  )

  let gpaMobile = (
    <div style={{position:'relative',width:'100%', height: 90, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Image src={AwardImageMobile} alt="Award Google Play" layout='fill' objectFit='cover' />
        <div style={{ position:'absolute', color:"white", width: '85%', display:'flex',justifyContent:'space-around',alignItems:'center',marginLeft:'auto',marginRight:'auto'}}>
            <div style={{marginRight:10}}>
                <Image src={CupAward} alt="Award Google Play" width={72} height={70} />
            </div>
            <div style={{width:'100%'}}>
                <h2 className={styles.h2BannerAwardMobile}>Best of 2020</h2>
                <p className={styles.pBannerAwardMobile}>App for Good - Campaign #ForChange</p>
            </div>
        </div>
    </div>
  )

  return (
    <div>
        <Head>
            <title>Campaign.com || Home</title>
        </Head>
        {/**Div untuk images homepage */}

        {isMobile ? (
            isTablet ? (
                isDesktop ? (
                  gpaDesktop
                ) : (
                  gpaDesktop
                )
            ) : (
              gpaDesktop
            )
        ) : (
            gpaMobile
        )}
      
        <SocialDataTaken/>
        <AppFeatured/>
        <ReadyJoinChallange/>
        <ReviewPeople/>
        
        
        {/** Bagian Lets Collaboratee */}
        <div id="collaborate01" style={{width:'100%',backgroundColor:'#ffffff'}}>
            <div className={styles.ContBannerCollaborate}>
                <h2 className={styles.h2LetsCollaborate}>Lets Collaborate</h2>
            </div>
            <div className={styles.contListCardCollaborate}>

                <div className={styles.cardOrganizerAndSponsor}>
                    <Image
                        src={CollaborateOrganizer}
                        alt="Organizer"
                        width={400}
                        height={250}
                        layout="responsive"
                        objectFit="cover"
                    />
                    <p style={{fontSize:24,fontWeight:900,color:"#16006D",textAlign:'center',marginTop:24,marginBottom:24}}>ORGANIZER</p>
                    <div style={{width:'80%',marginLeft:'auto',marginRight:'auto',marginBottom:24}}>
                        <p style={{fontSize:18,textAlign:'center'}}>Create & launch your social campaign now to get fundraising & networking opportunties from organizations, sponsors, and supporters from all over the world.</p>
                    </div>
                    <div style={{width:178,height:59,marginLeft:'auto',marginRight:'auto',marginBottom:24}}>
                        <button className={styles.ImInterestedButton}>
                            {`I'm Interested`}
                        </button>
                    </div>
                </div>

                <div className={styles.cardOrganizerAndSponsor2}>
                    <Image
                        src={CollaborateSponsor}
                        alt="Organizer"
                        width={400}
                        height={250}
                        layout="responsive"
                        objectFit="cover"
                    />
                    <p style={{fontSize:24,fontWeight:900,color:"#16006D",textAlign:'center',marginTop:24,marginBottom:24}}>SPONSOR</p>
                    <div style={{width:'80%',marginLeft:'auto',marginRight:'auto',marginBottom:24}}>
                        <p style={{fontSize:18,textAlign:'center'}}>Support a variety of social causes and expand your impact to campaign organizers all over the world.</p>
                    </div>
                    <div className={styles.btnForCard23}>
                        <div style={{width:178,height:59,marginLeft:'auto',marginRight:'auto',marginBottom:24}}>
                            <button className={styles.ImInterestedButton}>
                                {`I'm Interested`}
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.cardSocialFairWeek}>
                    <Image
                        src={CollaborateFairWeek}
                        alt="Organizer"
                        width={400}
                        height={250}
                        layout="responsive"
                        objectFit="cover"
                    />
                    <p style={{fontSize:24,fontWeight:900,color:"#16006D",textAlign:'center',marginTop:24,marginBottom:24}}>SOOCIAL FAIR WEEK</p>
                    <div style={{width:'80%',marginLeft:'auto',marginRight:'auto',marginBottom:24}}>
                        <p style={{fontSize:18,textAlign:'center'}}>Bring the change to your community and take part in team bonding activities together #ForChange.</p>
                    </div>
                    <div className={styles.btnForCard23}>
                        <div style={{width:178,height:59,marginLeft:'auto',marginRight:'auto',marginBottom:24}}>
                            <button className={styles.ImInterestedButton}>
                                {`I'm Interested`}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <FormReceiveUpdates/>
        <BannerBarcode/>

    </div>
  );
}
