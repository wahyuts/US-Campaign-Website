import Image from 'next/image';
// import { DataImageLocalEmbla } from "../../utils/DataImageLocalEmbla";
import CthCampaigner from "../../public/assests/images/cthCampaigner.png";
import IconOutlineGroup from "../../public/assests/images/IconOutlineGroup.png";
import IconUpHand from "../../public/assests/images/upHand.png";
import styles from "../../styles/CardChallange.module.css";


// const CardChallange = ({slides}) => {
const CardChallange = ({challData,challDataReg}) => {

    // const filter_no_sponsors = challData.filter((chall)=>(
    //     chall.challengeSponsors.length === 0
    // ));

    // const filter_have_sponsors = challData.filter((chall)=>(
    //     chall.challengeSponsors.length !== 0
    // ));

    //console.log jangan diapus

    // console.log("filter chall no sponsor", filter_no_sponsors);

    // console.log("filter chall HAVE sponsor", filter_have_sponsors);


    return ( 
        <>  
            {challData.map((data,i) => (  
            // {challData.map((data,i) => (  

                data.challengeSponsors.length === 0 ? (
                
                // {/* {slides.map((index) => (   */}
                    <div className={styles.embla__card__slide} key={i}> {/*embla__slide ini buat cont car atau setiap card nya (bukan buat image doang yak))*/}
                        
                        <div className={styles.firstInnerContCard}>
                            <div className={styles.upMainCard}>
                                <div className={styles.divMainImageCard}>
                                            <Image
                                                // src={DataImageLocalEmbla(index)}
                                                src={`${data.pictureUrl}`}
                                                alt="Percobaan"
                                                width={200}
                                                height={200}
                                                // layout="fill"
                                                objectFit="contain"
                                            />
                                </div>
                                <div className={styles.divMainDesc}>
                                    {/* {
                                        challDataReg.map((data,i) => (
                                            <div key={i} style={{width:'90%',minHeight:'30%',marginLeft:'auto',marginRight:'auto',paddingBottom:10,borderBottom:'1px solid black'}}>
                                                <p className={styles.pChallTitleText}>{data.title}</p>
                                            </div>
                                        )
                                        )
                                    } */}
                                     <div style={{width:'90%',minHeight:'30%',marginLeft:'auto',marginRight:'auto',paddingBottom:10,borderBottom:'1px solid black'}}>
                                         <p className={styles.pChallTitleText}>{data.title}</p>
                                    </div>

                                    <div className={styles.hastag}>
                                        <div className={styles.innerHastag}>
                                            <div style={{marginRight:10,marginTop:5.5}}>
                                                <Image
                                                    // src={CthCampaigner}
                                                    src={`${data.createdByUser.profile.picture}`}
                                                    alt="Campaigner"
                                                    width={21}
                                                    height={21}
                                                    // layout="fill"
                                                    objectFit="contain"
                                                />
                                            </div>
                                            <p className={styles.pCampaigner}>{data.createdByUser.username}</p>
                                        </div>
                                        {/* <div style={{marginRight:10}}>
                                            |
                                        </div> */}
                                        <div>
                                            <p className={styles.pHastag}>#{data.campaign.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.secondPartCard}>
                                <div className={styles.innerSecondPartCard}>
                                    <div style={{marginRight:30, display:'flex', alignItems:'center'}}>
                                        <div style={{marginRight:10,marginTop:5.5}}>
                                            <Image
                                                src={IconOutlineGroup}
                                                alt="Supporters"
                                                width={21}
                                                height={21}
                                                objectFit="contain"
                                            />
                                        </div>
                                        <p className={styles.pSecondCard}>{data.challengeSnapshot.totalMember} Supporters</p>
                                    </div>
                                    <div style={{display:'flex', alignItems:'center'}}>
                                        <div style={{marginRight:10,marginTop:5.5}}>
                                            <Image
                                                src={IconUpHand}
                                                alt="Actions"
                                                width={21}
                                                height={21}
                                                objectFit="contain"
                                            />
                                        </div>
                                        <p className={styles.pSecondCard}>{data.totalAction} Actions</p>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                ) : 
                // di bagian ini card yang punya sponsors **************************
                (


                    <div className={styles.embla__card__slide} key={i}> {/*embla__slide ini buat cont car atau setiap card nya (bukan buat image doang yak))*/}
                        
                        <div className={styles.firstInnerContCard}>
                            <div className={styles.upMainCard}>
                                <div className={styles.divMainImageCard}>
                                            <Image
                                                // src={DataImageLocalEmbla(index)}
                                                src={`${data.pictureUrl}`}
                                                alt="Percobaan"
                                                width={200}
                                                height={200}
                                                // layout="fill"
                                                objectFit="contain"
                                            />
                                </div>
                                <div className={styles.divMainDesc}>
                                    <div style={{width:'90%',minHeight:'30%',marginLeft:'auto',marginRight:'auto',paddingBottom:10,borderBottom:'1px solid black'}}>
                                        <p className={styles.pChallTitleText}>{data.title}</p>
                                        {/* <hr style={{backgroundColor:'black'}}/> */}
                                    </div>
                                    <div className={styles.hastag}>
                                        <div className={styles.innerHastag}>
                                            <div style={{marginRight:10,marginTop:5.5}}>
                                                <Image
                                                    // src={CthCampaigner}
                                                    src={`${data.createdByUser.profile.picture}`}
                                                    alt="Campaigner"
                                                    width={21}
                                                    height={21}
                                                    // layout="fill"
                                                    objectFit="contain"
                                                />
                                            </div>
                                            <p className={styles.pCampaigner}>{data.createdByUser.username}</p>
                                        </div>
                                        {/* <div style={{marginRight:10}}>
                                            |
                                        </div> */}
                                        <div>
                                            <p className={styles.pHastag}>#{data.campaign.name}</p>
                                        </div>
                                    </div>
                                    <div className={styles.divMainSponsors}>
                                        <div className={styles.divForTextActionFrom}>
                                            <p style={{fontSize:12,fontWeight:600,color:'white',marginRight:10,marginBottom:0}}>{data.totalAction} actions = {data.incentiveData.converted}</p>
                                        </div>
                                        <div className={styles.mainDivForGroupImgSponsor}>
                                            {
                                                //sponsor lebih dari sama dengan 3 dy ambil satuan
                                                data.challengeSponsors.length >= 3 ? (
                                                    // null
                                                    <>
                                                    <div style={{width:41,height:41,marginRight:5}}>
                                                        <Image
                                                            src={`${data.challengeSponsors[0].sponsor.pictureUrl}`}
                                                            alt="Sponsors"
                                                            width={41}
                                                            height={41}
                                                            objectFit="contain"
                                                        />
                                                    </div>
                                                    <div style={{width:41,height:41,marginRight:5}}>
                                                        <Image
                                                            src={`${data.challengeSponsors[1].sponsor.pictureUrl}`}
                                                            alt="Sponsors"
                                                            width={41}
                                                            height={41}
                                                            objectFit="contain"
                                                        />
                                                    </div>
                                                    <div style={{width:41,height:41,marginRight:5}}>
                                                        <Image
                                                            src={`${data.challengeSponsors[2].sponsor.pictureUrl}`}
                                                            alt="Sponsors"
                                                            width={41}
                                                            height={41}
                                                            objectFit="contain"
                                                        />
                                                    </div>
                                                    </>
                                                ) : (
                                                    // sponsor kurang dari 3 dy nge map
                                                    data.challengeSponsors.map((sponsorDt,i)=>(

                                                        <div style={{width:41,height:41,marginRight:5}} key={i}>
                                                            <Image
                                                                src={`${sponsorDt.sponsor.pictureUrl}`}
                                                                alt="Sponsors"
                                                                width={41}
                                                                height={41}
                                                                objectFit="contain"
                                                            />
                                                        </div>
                                                    ))
                                                )
                                            }
                                           
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.secondPartCard}>
                                <div className={styles.innerSecondPartCard}>
                                    <div style={{marginRight:30, display:'flex', alignItems:'center'}}>
                                        <div style={{marginRight:10,marginTop:5.5}}>
                                            <Image
                                                src={IconOutlineGroup}
                                                alt="Supporters"
                                                width={21}
                                                height={21}
                                                objectFit="contain"
                                            />
                                        </div>
                                        <p className={styles.pSecondCard}>{data.challengeSnapshot.totalMember} Supporters</p>
                                    </div>
                                    <div style={{display:'flex', alignItems:'center'}}>
                                        <div style={{marginRight:10,marginTop:5.5}}>
                                            <Image
                                                src={IconUpHand}
                                                alt="Actions"
                                                width={21}
                                                height={21}
                                                objectFit="contain"
                                            />
                                        </div>
                                        <p className={styles.pSecondCard}>{data.totalAction} Actions</p>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    
                    </div>



                )
          ))}
        </>
     );
}
 
export default CardChallange;