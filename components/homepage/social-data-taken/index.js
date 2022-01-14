import Image from "next/image";
import styles from '../../../styles/SocialDataTaken.module.css';
import IconFlagSocialTaken from '../../../public/assests/images/icon-social-action-taken.png';
import IconGroupOrganizers from '../../../public/assests/images/iconGroup.png';
import IconDonation from '../../../public/assests/images/icon-donation.png';

const SocialDataTaken = () => {
    return ( 
        <div>
            <div style={{width:'100%', backgroundColor: '#ffffff'}}>
                <div style={{width:'80%',textAlign:'center',marginLeft:'auto',marginRight:'auto',paddingTop:60}}>
                    <h2 className={styles.h2SocialFontDetail}>Be the change, #ForChange</h2>
                    <p className={styles.pSocialFontDetail}>per Sept 30th 2021</p>
                </div>
                <div className={styles.contDataTaken}>
                    <div className={styles.innerContDataTaken}>
                        <div className={styles.moreInnerDiv}>
                            <div className={styles.onlyForSocial}>
                                <Image src={IconFlagSocialTaken} alt="Social Actions Taken" width={157} height={162} objectFit="contain"/>
                            </div>
                            <div className={styles.onlyTextForSocial}>
                                <h2 className={styles.h2NumberSocialFontDetailSos}>343K+</h2>
                                <p className={styles.pNumberSocialFontDetailSos}>Social actions taken</p>
                            </div>
                        </div>
                        <div className={styles.moreInnerDiv}>
                            <div className={styles.onlyForOrg}>
                                <Image src={IconGroupOrganizers} alt="Organizers" width={57} height={62} objectFit="contain"/>
                            </div>
                            <div className={styles.onlyTextForOrg}>
                                <h2 className={styles.h2NumberSocialFontDetailOrg}>341+</h2>
                                <p className={styles.pNumberSocialFontDetailOrg}>Campaign Organizers</p>
                            </div>
                        </div>
                        <div className={styles.moreInnerDiv}>
                            <div>
                                <Image src={IconDonation} alt="Donations" width={177} height={172} objectFit="contain"/>
                            </div>
                            <div>
                                <h2 className={styles.h2NumberSocialFontDetailDonation}>$98K+</h2>
                                <p className={styles.pNumberSocialFontDetailDonation}>Unlock donation to social causes</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
     )
}
 
export default SocialDataTaken;