import styles from "../../styles/Organizer.module.css";
import { useRouter } from 'next/router';

import { Image, Modal } from "react-bootstrap";
import { useState } from "react";
import OwlCarousel from "react-owl-carousel";
const options = {
    dots: false,
    nav: true,
    navText: [
      "<Image src='/about/left-arrow1.png' alt='kiri'/>",
      "<Image src='/about/right-arrow1.png' alt='kanan'/>",
    ],
    responsive: {
      0: {
        items: 1,
        margin: 0,
        nav: true,
        loop: true,
        autoplay: false,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
      },
      701: {
        items: 1,
        margin: 0,
        nav: true,
      },
      1200: {
        items: 1.2,
        margin: 0,
        nav: true,
        loop: true,
      },
    },
  };
const challenge ={
    title1 : "#GrowthOverGrades: it's the learning that counts",
    title2 : "#SelfCareHustle: amidst the bustle, prioritize yourself with PERMIAS NYC",
    title3 : "#WaterForKarekaNduku: Help Us Help Them; Let Kareka Nduku have access to clean water",
    title4 : "I Am Not a Label: Go Beyond the Hustle with Kerja.io",
    title5 : "One World Many Cultures: Embracing Diversity for Equality",
    organizer1 : "permiasseattle",
    organizer2 : "permias",
    organizer3 : "solarchapterofficial",
    organizer4 : "kerjaioteam",
    organizer5 : "permiasnasional",
    campaign1 : "#GrowthOverGrades",
    campaign2 : "#SelfCareHustle",
    campaign3 : "#WaterForKarekaNduku",
    campaign4 : "#IAmNotALabel",
    campaign5 : "#OneWorldManyCultures",
    join : "How to Join the Challenge",
    donation : "Donation from Sponsor to the Organizer",
    descjoin1 : (
    <>
    Unlock donation by posting <b>4 actions</b> of different pictures according to the Challenge.
    </>
    ),
    descjoin2 : (<>
    Unlock donation by posting <b>3 actions</b> of different pictures according to the Challenge.
    </>),
    descdonation1 : "The sponsors are donating $4.9 for every completed and verified social Challenges.",
    descdonation2 : "The sponsors are donating $4 for every completed and verified social Challenges.",
    desc1 : (
      <>
      According to a study on praise by Carol Dweck, children solely praised for their 
      final grades tend to have a fixed mindset - hesitant to take up challenges. 
      While those praised for their efforts, tend to have a growth mindset - more open to learning.
      <br/><br/>
      Nowadays, parents and students place grades as the sole indicator to one&#39;s 
      intelligence and success, eliminating the process or efforts in the process. 
      This is harmful towards a child&#39;s mindset. Join us and become a group of young people with 
      a growth mindset! By completing the #GrowthOverGrades campaign challenge, you will inspire 
      this generation to do the same and view education as a valuable tool to grow. 
      </>
    ),
    desc2 : (
      <>
      95% percent of college counseling center directors surveyed said the number of students 
      with significant psychological problems is a growing concern in their center &amp; on campus, 
      according to the latest Association for University and College Counseling Center Directors survey 
      of counseling center directors.
      <br/>
      Having a busy schedule has made students forget the importance of self care and healthy lifestyle.
      <br/>
      Follow us and improve your lifestyle and mental health! By completing #SelfCareHustle campaign challenge, 
      you will inspire your generation to change their view on health and lifestyle. 
      </>
    ),
    desc3 : (
      <>
      Residents who live in Kareka Nduku have to walk 2 hours daily to reach a clean water source. 
      These residents range from young toddlers to seniors who take four hours only to draw out 
      and carry water through cobbled streets back to their village. 
      Kareka Nduku is just one of many villages in Indonesia that still lacks access to clean water. 
      As we raise awareness regarding this issue, we are reminded by how important water is 
      and sympathize with our brothers and sisters who are not as privileged as we are. 
      Indonesia is perceived as a country that has not been able to increase the development 
      of its regions evenly. The lack of basic necessities such as water is critical to the health 
      of families in Indonesia especially in rural areas. By joining this challenge, 
      you are raising awareness regarding this issue as well as becoming part of our journey to 
      help the people at Kareka Nduku. All the donations received by Solar Chapter will be used to 
      build a solar water pump system for residents at Kareka Nduku village, NTT, Indonesia. The goal 
      of this campaign is to improve the quality of life of people at Kareka Nduku village 
      by providing easy access to clean water.
      </>
    ),
    desc4 : (
      <>
      In June 2020, the Centers for Disease Control and Prevention (CDC) Trusted Source 
      reported an uptick in diagnoses of anxiety and depressive disorders — three to four 
      times higher in 2020 than in 2019! Heavily impacted by the COVID-19 Pandemic, 
      we think we have more time on our hands and end up stuffing our schedules with ongoing meetings, 
      assignments, and little to no downtime. 
      <br/>
      We are so focused on what we can do to be &#39;productive&#39;, 
      we often fail to hit the brakes and take time for ourselves.
      With this in mind, we at Kerja.io, a student-led organization based in the United States, 
      invites you to see beyond the labels placed on individuals within a society, 
      highlight the issues of stress and burnout in the workplace, as well as educate ourselves 
      on the importance of taking care of your mental health. Each completed challenge 
      will unlock $5 from Yayasan Dunia Lebih Baik to help Kerja.io expand their reach 
      and create educational events to promote self-growth for youths seeking career opportunities. 
      </>
    ),
    desc5 : (
      <>
      Culture plays an important role in the history of humankind. 
      According to Price&#39;s Atlas of Ethnographic Societies, 
      there are about over 3,814 distinct cultures in the world! 
      For centuries, culture has been the glue of civilization. 
      Yet ironically, our differences are also what break us apart. 
      In the midst of the pandemic, certain groups and cultures around 
      the world have experienced violence and hatred.  
      There have been almost 4,000 reported Asian-hate-related incidents 
      in the United States alone!
      <br/>
      For this reason, as one of the most well-known and active 
      Indonesian organizations in the United States, PERMIAS Nasional 
      decides to encourage all of you to raise awareness on the 
      importance of cultural diversity, as well as exhibit the beauty 
      of Indonesian culture to our fellow friends from other backgrounds. 
      Each completed challenge will unlock $5 from Yayasan Dunia Lebih Baik to help us, PERMIAS Nasional, to promote cultural diversity. 
      </>
    ),

  };
export default function ChallengeCarousel() {
  const [challenge0, setChallenge0] = useState(false);
  const [challenge1, setChallenge1] = useState(false);
  const [challenge2, setChallenge2] = useState(false);
  const [challenge3, setChallenge3] = useState(false);
  const [challenge4, setChallenge4] = useState(false);

  const router = useRouter();
  const currentPath = router.pathname;

  let titleOrg = (
    currentPath === "/organizers" ? (
      <div className={styles["title-section"]}>
        {"Campaign Challenges & Collaborations"}
      </div>
    ) : ( null )
  )

  let titleSponsorPage = (
    currentPath === "/sponsors" ? (
      <div id="sponsChall01" className={styles["title-section"]}>
        {"Featured Challenge on Campaign #ForChange App "}
      </div>
    ) : ( null)
  )

    return (
        <div className={styles["section-challenge"]}>
            <div className="container p-0">
            <div className={`text-center ${styles["section-content"]}`}>
            {titleOrg}
            {titleSponsorPage}
            {/* <div className={styles["title-section"]}>
              {"Campaign Challenges & Collaborations"}
        </div> */}
        <OwlCarousel className="owl-carousel owl-theme p-0" {...options}>
      <div className="item" onClick={() => setChallenge0(true)}>
      <div className={styles["card-challenge"]} >
        <div className="row">
          <div className="col-xl-3 col-5">
          <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/challenge/challengepostergrowthovergrades24sep21.jpg" 
                className={styles["img-challenge"]} />
          </div>
          <div className={`col-xl-9 col-7 ${styles["div-desc"]}`}>
            <div className="d-flex">
            <Image alt="logo-isu" src="/organizer/education-icon.svg" 
                className={styles["img-isu"]} />
                 <Image alt="logo-isu" src="/organizer/health-icon.svg" 
                className={styles["img-isu"]} />
            <div className={`${styles["tag-isu"]} ${styles["education"]}`}>
            <div className="d-flex">
            <Image alt="" src="/organizer/education.svg" 
              />
              <p className={styles["desc-isu"]}>Education</p>
            </div>
            
                  
                </div>
                <div className={`${styles["tag-isu"]} ${styles["health"]}`}>
            <div className="d-flex">
            <Image alt="" src="/organizer/health.svg" 
              />
              <p className={styles["desc-isu"]}>Health</p>
            </div>
            
                  
                </div>
            </div>
        <div className={styles["title-challenge"]}>
        {challenge.title1}
        </div>
        <div className={`d-flex ${styles["div-organizer"]}`}>
          <Image alt="" src="/organizer/permiasseattle.svg" 
                className={styles["img-logo"]}/>
           <p className={styles.organizer}>
           {challenge.organizer1}
           </p>
           <span className={styles.border}></span>   
           <p className={styles.part}>
           Part of the Campaign 
           </p>
           <p className={styles.campaign}>
           {challenge.campaign1}
          </p> 
            </div>
            <div className={`d-flex ${styles["div-organizer-mob"]}`}>
           <p className={styles.organizer}>
           {challenge.organizer1}
           </p>
           <p className={styles.organizer}>
           {"x"}
          </p> 
           <p className={styles.organizer}>
           {"YDLB"}
          </p> 
            </div>
          </div>
        
        </div>
      <div className="d-flex mt-3 mb-3">
      <div className={`col-9 ${styles["tag-sponsor"]}`} >
      Sponsored by YDLB
      </div>
      <div className="col-3">
      <Image alt="sponsor-logo" src="/organizer/ydlb-icon.svg" className={styles["img-sponsor-mob"]}/>
      <Image alt="sponsor-logo" src="https://storage.googleapis.com/campaign-backend-development-bucket/sponsor/YDLB.png" className={styles["img-sponsor-des"]}/>
      </div>
       </div>
      <div className={styles["desc-challenge"]}>
      According to a study on praise by Carol Dweck, children solely praised for their final grades tend to have a fixed mindset - hesitant to take up challenges. While those praised for their efforts, See more
      </div>
<div className="row mt-4">
  <div className="col-12 col-xl-6 px-4">
    <h4 className={styles.join}>
    {challenge.join}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descjoin1}
    </p>
  </div>
  <div className="col-12 col-xl-6 px-4">
  <h4 className={styles.join}>
    {challenge.donation}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descdonation1}
    </p>
  </div>
</div>
<div className={styles["button-challenge"]}>
<a href="#" className={styles["btn-challenge"]} >See Challenge</a>
</div>
      </div>
     
      </div>
      <div className="item" onClick={() => setChallenge1(true)}>
      <div className={styles["card-challenge"]} >
        <div className="row">
          <div className="col-xl-3 col-5">
          <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/challenge/challengeposterselfcarehustle02okt21.png" 
                className={styles["img-challenge"]} />
          </div>
          <div className={`col-xl-9 col-7 ${styles["div-desc"]}`}>
            <div className="d-flex">
            <Image alt="logo-isu" src="/organizer/health-icon.svg" 
                className={styles["img-isu"]} />
            <div className={`${styles["tag-isu"]} ${styles["health"]}`}>
            <div className="d-flex">
            <Image alt="" src="/organizer/health.svg" 
              />
              <p className={styles["desc-isu"]}>Health</p>
            </div>
            
                  
                </div>
                
            </div>
        <div className={styles["title-challenge"]}>
        {challenge.title2}
        </div>
        <div className={`d-flex ${styles["div-organizer"]}`}>
          <Image alt="" src="/organizer/permiasny.svg" 
                className={styles["img-logo"]}/>
           <p className={styles.organizer}>
           {challenge.organizer2}
           </p>
           <span className={styles.border}></span>   
           <p className={styles.part}>
           Part of the Campaign 
           </p>
           <p className={styles.campaign}>
           {challenge.campaign2}
          </p> 
            </div>
          </div>
        
        </div>
      <div className="d-flex mt-3 mb-3">
      <div className={`col-9 ${styles["tag-sponsor"]}`} >
      Sponsored by YDLB
      </div>
      <div className="col-3">
      <Image alt="sponsor-logo" src="/organizer/ydlb-icon.svg" className={styles["img-sponsor-mob"]}/>
      <Image alt="sponsor-logo" src="https://storage.googleapis.com/campaign-backend-development-bucket/sponsor/YDLB.png" className={styles["img-sponsor-des"]}/>
      </div>
       </div>
      <div className={styles["desc-challenge"]}>
      95% percent of college counseling center directors surveyed said the number of students with significant psychological problems is a growing concern in their center & on campus, See more
      </div>
<div className="row mt-4">
  <div className="col-12 col-xl-6 px-4">
    <h4 className={styles.join}>
    {challenge.join}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descjoin1}
    </p>
  </div>
  <div className="col-12 col-xl-6 px-4">
  <h4 className={styles.join}>
    {challenge.donation}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descdonation1}
    </p>
  </div>
</div>
<div className={styles["button-challenge"]}>
<a href="#" className={styles["btn-challenge"]}>See Challenge</a>
</div>
      </div>
     
      </div>
      <div className="item" onClick={() => setChallenge2(true)}>
      <div className={styles["card-challenge"]} >
        <div className="row">
          <div className="col-xl-3 col-5">
          <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/challenge/d213274d-c80a-44a0-a957-4f55e1ac7120.png" 
                className={styles["img-challenge"]} />
          </div>
          <div className={`col-xl-9 col-7 ${styles["div-desc"]}`}>
            <div className="d-flex">
            <Image alt="logo-isu" src="/organizer/environment-icon.svg" 
                className={styles["img-isu"]} />
            <div className={`${styles["tag-isu"]} ${styles["environment"]}`}>
            <div className="d-flex">
            <Image alt="" src="/organizer/environment.svg" 
              />
              <p className={styles["desc-isu"]}>Environment</p>
            </div>
            
                  
                </div>
                
            </div>
        <div className={styles["title-challenge"]}>
        {challenge.title3}
        </div>
        <div className={`d-flex ${styles["div-organizer"]}`}>
          <Image alt="" src="/organizer/solar.svg" 
                className={styles["img-logo"]}/>
           <p className={styles.organizer}>
           {challenge.organizer3}
           </p>
           <span className={styles.border}></span>   
           <p className={styles.part}>
           Part of the Campaign 
           </p>
           <p className={styles.campaign}>
           {challenge.campaign3}
          </p> 
            </div>
          </div>
        
        </div>
      <div className="d-flex mt-3 mb-3">
      <div className={`col-6 ${styles["tag-sponsor"]}`} >
      Sponsored by 
      </div>
      <div className="col-3">
      <Image alt="sponsor-logo" src="/organizer/travelio-icon.svg" className={styles["img-sponsor-mob"]}/>
      <Image alt="sponsor-logo" src="https://storage.googleapis.com/campaign-backend-development-bucket/sponsor/Traveliologo1.jpg" className={styles["img-sponsor-des"]}/>
      </div>
      <div className="col-3">
      <Image alt="sponsor-logo" src="/organizer/ydlb-icon.svg" className={styles["img-sponsor-mob"]}/>
      <Image alt="sponsor-logo" src="https://storage.googleapis.com/campaign-backend-development-bucket/sponsor/YDLB.png" className={styles["img-sponsor-des"]}/>

      </div>
       </div>
      <div className={styles["desc-challenge"]}>
      Residents who live in Kareka Nduku have to walk 2 hours daily to reach a clean water source. These residents range from young toddlers to seniors who take four hours only to draw out and carry water... See more
      </div>
<div className="row mt-4">
  <div className="col-12 col-xl-6 px-4">
    <h4 className={styles.join}>
    {challenge.join}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descjoin1}
    </p>
  </div>
  <div className="col-12 col-xl-6 px-4">
  <h4 className={styles.join}>
    {challenge.donation}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descdonation1}
    </p>
  </div>
</div>
<div className={styles["button-challenge"]}>
<a href="#" className={styles["btn-challenge"]}>See Challenge</a>
</div>
      </div>
     
      </div>
      <div className="item" onClick={() => setChallenge3(true)}>
      <div className={styles["card-challenge"]} >
        <div className="row">
          <div className="col-xl-3 col-5">
          <Image alt="" src="https://static-images.campaign.com/?t=upd&w=500&file=postercelengkerjaioiamnotalabel.png" 
                className={styles["img-challenge"]} />
          </div>
          <div className={`col-xl-9 col-7 ${styles["div-desc"]}`}>
            <div className="d-flex">
            <Image alt="logo-isu" src="/organizer/equality-icon.svg" 
                className={styles["img-isu"]} />
            <div className={`${styles["tag-isu"]} ${styles["equality"]}`}>
            <div className="d-flex">
           
            <Image alt="" src="/organizer/equality.svg" 
              />
              <p className={styles["desc-isu"]}>Equality</p>
            </div>
            
                  
                </div>
            </div>
        <div className={styles["title-challenge"]}>
        {challenge.title1}
        </div>
        <div className={`d-flex ${styles["div-organizer"]}`}>
          <Image alt="" src="/organizer/kerjaio.svg" 
                className={styles["img-logo"]}/>
           <p className={styles.organizer}>
           {challenge.organizer4}
           </p>
           <span className={styles.border}></span>   
           <p className={styles.part}>
           Part of the Campaign 
           </p>
           <p className={styles.campaign}>
           {challenge.campaign4}
          </p> 
            </div>
          </div>
        
        </div>
      <div className="d-flex mt-3 mb-3">
      <div className={`col-9 ${styles["tag-sponsor"]}`} >
      Sponsored by YDLB
      </div>
      <div className="col-3">
      <Image alt="sponsor-logo" src="/organizer/ydlb-icon.svg" className={styles["img-sponsor-mob"]}/>
      <Image alt="sponsor-logo" src="https://storage.googleapis.com/campaign-backend-development-bucket/sponsor/YDLB.png" className={styles["img-sponsor-des"]}/>
      </div>
       </div>
      <div className={styles["desc-challenge"]}>
      In June 2020, the Centers for Disease Control and Prevention (CDC) Trusted Source reported an uptick in diagnoses of anxiety and depressive disorders — three to four times higher in 2020 than in 2019! See more
      </div>
<div className="row mt-4">
  <div className="col-12 col-xl-6 px-4">
    <h4 className={styles.join}>
    {challenge.join}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descjoin1}
    </p>
  </div>
  <div className="col-12 col-xl-6 px-4">
  <h4 className={styles.join}>
    {challenge.donation}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descdonation1}
    </p>
  </div>
</div>
<div className={styles["button-challenge"]}>
<a href="#" className={styles["btn-challenge"]}>See Challenge</a>
</div>
      </div>
     
      </div>
      <div className="item" onClick={() => setChallenge4(true)}>
      <div className={styles["card-challenge"]} >
        <div className="row">
          <div className="col-xl-3 col-5">
          <Image alt="" src="https://static-images.campaign.com/?t=upd&w=500&file=postercelengpermias.jpg" 
                className={styles["img-challenge"]} />
          </div>
          <div className={`col-xl-9 col-7 ${styles["div-desc"]}`}>
            <div className="d-flex">
            <Image alt="logo-isu" src="/organizer/equality-icon.svg" 
                className={styles["img-isu"]} />
            <div className={`${styles["tag-isu"]} ${styles["equality"]}`}>
            <div className="d-flex">
            <Image alt="" src="/organizer/equality.svg" 
              />
              <p className={styles["desc-isu"]}>Equality</p>
            </div>
            
                  
                </div>
                
            </div>
        <div className={styles["title-challenge"]}>
        {challenge.title1}
        </div>
        <div className={`d-flex ${styles["div-organizer"]}`}>
          <Image alt="" src="/organizer/permias.svg" 
                className={styles["img-logo"]}/>
           <p className={styles.organizer}>
           {challenge.organizer5}
           </p>
           <span className={styles.border}></span>   
           <p className={styles.part}>
           Part of the Campaign 
           </p>
           <p className={styles.campaign}>
           {challenge.campaign5}
          </p> 
            </div>
          </div>
        
        </div>
      <div className="d-flex mt-3 mb-3">
      <div className={`col-9 ${styles["tag-sponsor"]}`} >
      Sponsored by YDLB
      </div>
      <div className="col-3">
      <Image alt="sponsor-logo" src="/organizer/ydlb-icon.svg" className={styles["img-sponsor-mob"]}/>
      <Image alt="sponsor-logo" src="https://storage.googleapis.com/campaign-backend-development-bucket/sponsor/YDLB.png" className={styles["img-sponsor-des"]}/>

      </div>
       </div>
      <div className={styles["desc-challenge"]}>
      Culture plays an important role in the history of humankind. According to Price&#39;s Atlas of Ethnographic Societies, there are about over 3,814 distinct cultures in the world! For centuries, culture has been the glue of civilization. See more
      </div>
<div className="row mt-4">
  <div className="col-12 col-xl-6 px-4">
    <h4 className={styles.join}>
    {challenge.join}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descjoin1}
    </p>
  </div>
  <div className="col-12 col-xl-6 px-4">
  <h4 className={styles.join}>
    {challenge.donation}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descdonation1}
    </p>
  </div>
</div>
<div className={styles["button-challenge"]}>
<a href="#" className={styles["btn-challenge"]}>See Challenge</a>
</div>
      </div>
     
      </div>
      </OwlCarousel>
      <Modal
                    show={challenge0}
                    size="xl"
                    onHide={() => setChallenge0(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    dialogClassName={styles["modal-des"]}
                  >
                        <Modal.Header className={styles["no-border"]} closeButton>
  </Modal.Header>
                    <Modal.Body>
                    <div className={styles["card-challenge1"]} >
        <div className="row">
          <div className="col-8">
          <div className="d-flex">
            <div className={`${styles["tag-isu"]} ${styles["education"]}`}>
            <div className="d-flex">
            <Image alt="" src="/organizer/education.svg" 
              />
              <p className={styles["desc-isu"]}>Education</p>
            </div>
            
                  
                </div>
                <div className={`${styles["tag-isu"]} ${styles["health"]}`}>
            <div className="d-flex">
            <Image alt="" src="/organizer/health.svg" 
              />
              <p className={styles["desc-isu"]}>Health</p>
            </div>
            
                  
                </div>
            </div>
            <div className={styles["title-challenge"]}>
        {challenge.title1}
        </div>
        <div className={`d-flex ${styles["div-organizer1"]}`}>
          <Image alt="" src="/organizer/permiasseattle.svg" 
                className={styles["img-logo"]}/>
           <p className={styles.organizer}>
           {challenge.organizer1}
           </p>
           <span className={styles.border}></span>   
           <p className={styles.part}>
           Part of the Campaign 
           </p>
           <p className={styles.campaign}>
           {challenge.campaign1}
          </p> 
            </div>
            <div className="d-flex mt-3 mb-3">
      <div className={`col-9 ${styles["tag-sponsor"]}`} >
      Sponsored by YDLB
      </div>
      <div className="col-3">
      <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/sponsor/YDLB.png"
      className={styles["img-sponsor"]}/>

      </div>
       </div>
      <div className={styles["desc-challenge"]}>
        {challenge.desc1}
      </div>
          </div>
          <div className="col-4">
          <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/challenge/challengepostergrowthovergrades24sep21.jpg" 
                className={styles["img-challenge1"]} />
<h5 className={styles.join1}>
    {challenge.join}
    </h5>
    <p className={styles.descjoin1}>
      {challenge.descjoin1}
    </p>
    <h5 className={styles.join1}>
    {challenge.donation}
    </h5>
    <p className={styles.descjoin1}>
      {challenge.descdonation1}
    </p>

    <div className={`mt-5 ${styles["button-challenge"]}`}>
<a href="#" className={styles["btn-challenge"]} >See Challenge</a>
</div>
          
          </div>
        </div>
      </div>
                    </Modal.Body>
      </Modal>
      <Modal
                    show={challenge0}
                    size="xl"
                    onHide={() => setChallenge0(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    dialogClassName={styles["modal-mob"]}
                  >
                        <Modal.Header className={styles["no-border"]} closeButton>
  </Modal.Header>
                    <Modal.Body>
                    
        <div className="row">
          <div className="col-xl-3 col-5">
          <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/challenge/challengepostergrowthovergrades24sep21.jpg" 
                className={styles["img-challenge"]} />
          </div>
          <div className={`col-xl-9 col-7 ${styles["div-desc"]}`}>
            <div className="d-flex">
            <Image alt="logo-isu" src="/organizer/education-icon.svg" 
                className={styles["img-isu"]} />
                 <Image alt="logo-isu" src="/organizer/health-icon.svg" 
                className={styles["img-isu"]} />
            </div>
        <div className={styles["title-challenge"]}>
        {challenge.title1}
        </div>
        <div className={`d-flex ${styles["div-organizer"]}`}>
          <Image alt="" src="/organizer/permiasseattle.svg" 
                className={styles["img-logo"]}/>
           <p className={styles.organizer}>
           {challenge.organizer1}
           </p>
           <span className={styles.border}></span>   
           <p className={styles.part}>
           Part of the Campaign 
           </p>
           <p className={styles.campaign}>
           {challenge.campaign1}
          </p> 
            </div>
            <div className={`d-flex ${styles["div-organizer-mob"]}`}>
           <p className={styles.organizer}>
           {challenge.organizer1}
           </p>
           <p className={styles.organizer}>
           {"x"}
          </p> 
           <p className={styles.organizer}>
           {"YDLB"}
          </p> 
            </div>
          </div>
        
        </div>
      <div className="d-flex mt-3 mb-3">
      <div className={`col-9 ${styles["tag-sponsor"]}`} >
      Sponsored by YDLB
      </div>
      <div className="col-3">
      <Image alt="sponsor-logo" src="/organizer/ydlb-icon.svg" 
      className={styles["img-sponsor-mob"]}
      />

      </div>
       </div>
      <div className={styles["desc-challenge"]}>
        {challenge.desc1}
      </div>
<div className="row mt-4">
  <div className="col-12 col-xl-6 px-4">
    <h4 className={styles.join}>
    {challenge.join}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descjoin1}
    </p>
  </div>
  <div className="col-12 col-xl-6 px-4">
  <h4 className={styles.join}>
    {challenge.donation}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descdonation1}
    </p>
  </div>
</div>
<div className={styles["button-challenge"]}>
<a href="#" className={styles["btn-challenge"]} >See Challenge</a>
</div>
      
                    </Modal.Body>
      </Modal>
      <Modal
                    show={challenge1}
                    size="xl"
                    onHide={() => setChallenge1(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    dialogClassName={styles["modal-des"]}
                  >
                        <Modal.Header className={styles["no-border"]} closeButton>
  </Modal.Header>
                    <Modal.Body>
                    <div className={styles["card-challenge1"]} >
        <div className="row">
          <div className="col-8">
          <div className="d-flex">
            <div className={`${styles["tag-isu"]} ${styles["health"]}`}>
            <div className="d-flex">
            <Image alt="" src="/organizer/health.svg" 
              />
              <p className={styles["desc-isu"]}>Health</p>
            </div>
            
                  
                </div>
                
            </div>
            <div className={styles["title-challenge"]}>
        {challenge.title2}
        </div>
        <div className={`d-flex ${styles["div-organizer1"]}`}>
          <Image alt="" src="/organizer/permiasny.svg" 
                className={styles["img-logo"]}/>
           <p className={styles.organizer}>
           {challenge.organizer2}
           </p>
           <span className={styles.border}></span>   
           <p className={styles.part}>
           Part of the Campaign 
           </p>
           <p className={styles.campaign}>
           {challenge.campaign1}
          </p> 
            </div>
            <div className="d-flex mt-3 mb-3">
      <div className={`col-9 ${styles["tag-sponsor"]}`} >
      Sponsored by YDLB
      </div>
      <div className="col-3">
      <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/sponsor/YDLB.png"
      className={styles["img-sponsor"]}/>

      </div>
       </div>
      <div className={styles["desc-challenge"]}>
        {challenge.desc2}
      </div>
          </div>
          <div className="col-4">
          <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/challenge/challengeposterselfcarehustle02okt21.png" 
                className={styles["img-challenge1"]} />
<h5 className={styles.join1}>
    {challenge.join}
    </h5>
    <p className={styles.descjoin1}>
      {challenge.descjoin1}
    </p>
    <h5 className={styles.join1}>
    {challenge.donation}
    </h5>
    <p className={styles.descjoin1}>
      {challenge.descdonation1}
    </p>

    <div className={`mt-5 ${styles["button-challenge"]}`}>
<a href="#" className={styles["btn-challenge"]} >See Challenge</a>
</div>
          
          </div>
        </div>
      </div>
                    </Modal.Body>
      </Modal>
      <Modal
                    show={challenge1}
                    size="xl"
                    onHide={() => setChallenge1(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    dialogClassName={styles["modal-mob"]}
                  >
                        <Modal.Header className={styles["no-border"]} closeButton>
  </Modal.Header>
                    <Modal.Body>
                    
                    <div className="row">
          <div className="col-xl-3 col-5">
          <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/challenge/challengeposterselfcarehustle02okt21.png" 
                className={styles["img-challenge"]} />
          </div>
          <div className={`col-xl-9 col-7 ${styles["div-desc"]}`}>
            <div className="d-flex">
            <Image alt="logo-isu" src="/organizer/health-icon.svg" 
                className={styles["img-isu"]} />
            <div className={`${styles["tag-isu"]} ${styles["health"]}`}>
            <div className="d-flex">
            <Image alt="" src="/organizer/health.svg" 
              />
              <p className={styles["desc-isu"]}>Health</p>
            </div>
            
                  
                </div>
                
            </div>
        <div className={styles["title-challenge"]}>
        {challenge.title2}
        </div>
        <div className={`d-flex ${styles["div-organizer"]}`}>
          <Image alt="" src="/organizer/permiasny.svg" 
                className={styles["img-logo"]}/>
           <p className={styles.organizer}>
           {challenge.organizer2}
           </p>
           <span className={styles.border}></span>   
           <p className={styles.part}>
           Part of the Campaign 
           </p>
           <p className={styles.campaign}>
           {challenge.campaign2}
          </p> 
            </div>
          </div>
        
        </div>
      <div className="d-flex mt-3 mb-3">
      <div className={`col-9 ${styles["tag-sponsor"]}`} >
      Sponsored by YDLB
      </div>
      <div className="col-3">
      <Image alt="sponsor-logo" src="/organizer/ydlb-icon.svg" className={styles["img-sponsor-mob"]}/>
      <Image alt="sponsor-logo" src="https://storage.googleapis.com/campaign-backend-development-bucket/sponsor/YDLB.png" className={styles["img-sponsor-des"]}/>
      </div>
       </div>
      <div className={styles["desc-challenge"]}>
      95% percent of college counseling center directors surveyed said the number of students with significant psychological problems is a growing concern in their center & on campus, See more
      </div>
<div className="row mt-4">
  <div className="col-12 col-xl-6 px-4">
    <h4 className={styles.join}>
    {challenge.join}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descjoin1}
    </p>
  </div>
  <div className="col-12 col-xl-6 px-4">
  <h4 className={styles.join}>
    {challenge.donation}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descdonation1}
    </p>
  </div>
</div>
<div className={styles["button-challenge"]}>
<a href="#" className={styles["btn-challenge"]}>See Challenge</a>
</div>
      
                    </Modal.Body>
      </Modal>
      <Modal
                    show={challenge2}
                    size="xl"
                    onHide={() => setChallenge2(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    dialogClassName={styles["modal-des"]}
                  >
                        <Modal.Header className={styles["no-border"]} closeButton>
  </Modal.Header>
                    <Modal.Body>
                    <div className={styles["card-challenge1"]} >
        <div className="row">
          <div className="col-8">
          <div className="d-flex">
            <div className={`${styles["tag-isu"]} ${styles["environment"]}`}>
            <div className="d-flex">
            <Image alt="" src="/organizer/environment.svg" 
              />
              <p className={styles["desc-isu"]}>Environment</p>
            </div>
            
                  
                </div>
            </div>
            <div className={styles["title-challenge"]}>
        {challenge.title1}
        </div>
        <div className={`d-flex ${styles["div-organizer1"]}`}>
          <Image alt="" src="/organizer/solar.svg" 
                className={styles["img-logo"]}/>
           <p className={styles.organizer}>
           {challenge.organizer3}
           </p>
           <span className={styles.border}></span>   
           <p className={styles.part}>
           Part of the Campaign 
           </p>
           <p className={styles.campaign}>
           {challenge.campaign3}
          </p> 
            </div>
            <div className="d-flex mt-3 mb-3">
      <div className={`col-9 ${styles["tag-sponsor"]}`} >
      Sponsored by YDLB
      </div>
      <div className="col-3">
      <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/sponsor/YDLB.png"
      className={styles["img-sponsor"]}/>

      </div>
       </div>
      <div className={styles["desc-challenge"]}>
        {challenge.desc3}
      </div>
          </div>
          <div className="col-4">
          <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/challenge/d213274d-c80a-44a0-a957-4f55e1ac7120.png" 
                className={styles["img-challenge1"]} />
<h5 className={styles.join1}>
    {challenge.join}
    </h5>
    <p className={styles.descjoin1}>
      {challenge.descjoin1}
    </p>
    <h5 className={styles.join1}>
    {challenge.donation}
    </h5>
    <p className={styles.descjoin1}>
      {challenge.descdonation1}
    </p>

    <div className={`mt-5 ${styles["button-challenge"]}`}>
<a href="#" className={styles["btn-challenge"]} >See Challenge</a>
</div>
          
          </div>
        </div>
      </div>
                    </Modal.Body>
      </Modal>
      <Modal
                    show={challenge2}
                    size="xl"
                    onHide={() => setChallenge2(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    dialogClassName={styles["modal-mob"]}
                  >
                        <Modal.Header className={styles["no-border"]} closeButton>
  </Modal.Header>
                    <Modal.Body>
                    <div className="row">
          <div className="col-xl-3 col-5">
          <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/challenge/d213274d-c80a-44a0-a957-4f55e1ac7120.png" 
                className={styles["img-challenge"]} />
          </div>
          <div className={`col-xl-9 col-7 ${styles["div-desc"]}`}>
            <div className="d-flex">
            <Image alt="logo-isu" src="/organizer/environment-icon.svg" 
                className={styles["img-isu"]} />
            <div className={`${styles["tag-isu"]} ${styles["environment"]}`}>
            <div className="d-flex">
            <Image alt="" src="/organizer/environment.svg" 
              />
              <p className={styles["desc-isu"]}>Environment</p>
            </div>
            
                  
                </div>
                
            </div>
        <div className={styles["title-challenge"]}>
        {challenge.title3}
        </div>
        <div className={`d-flex ${styles["div-organizer"]}`}>
          <Image alt="" src="/organizer/solar.svg" 
                className={styles["img-logo"]}/>
           <p className={styles.organizer}>
           {challenge.organizer3}
           </p>
           <span className={styles.border}></span>   
           <p className={styles.part}>
           Part of the Campaign 
           </p>
           <p className={styles.campaign}>
           {challenge.campaign3}
          </p> 
            </div>
          </div>
        
        </div>
      <div className="d-flex mt-3 mb-3">
      <div className={`col-6 ${styles["tag-sponsor"]}`} >
      Sponsored by 
      </div>
      <div className="col-3">
      <Image alt="sponsor-logo" src="/organizer/travelio-icon.svg" className={styles["img-sponsor-mob"]}/>
      <Image alt="sponsor-logo" src="https://storage.googleapis.com/campaign-backend-development-bucket/sponsor/Traveliologo1.jpg" className={styles["img-sponsor-des"]}/>
      </div>
      <div className="col-3">
      <Image alt="sponsor-logo" src="/organizer/ydlb-icon.svg" className={styles["img-sponsor-mob"]}/>
      <Image alt="sponsor-logo" src="https://storage.googleapis.com/campaign-backend-development-bucket/sponsor/YDLB.png" className={styles["img-sponsor-des"]}/>

      </div>
       </div>
      <div className={styles["desc-challenge"]}>
      Residents who live in Kareka Nduku have to walk 2 hours daily to reach a clean water source. These residents range from young toddlers to seniors who take four hours only to draw out and carry water... See more
      </div>
<div className="row mt-4">
  <div className="col-12 col-xl-6 px-4">
    <h4 className={styles.join}>
    {challenge.join}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descjoin1}
    </p>
  </div>
  <div className="col-12 col-xl-6 px-4">
  <h4 className={styles.join}>
    {challenge.donation}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descdonation1}
    </p>
  </div>
</div>
<div className={styles["button-challenge"]}>
<a href="#" className={styles["btn-challenge"]}>See Challenge</a>
</div>
      
                    </Modal.Body>
      </Modal>
      <Modal
                    show={challenge3}
                    size="xl"
                    onHide={() => setChallenge3(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    dialogClassName={styles["modal-des"]}
                  >
                        <Modal.Header className={styles["no-border"]} closeButton>
  </Modal.Header>
                    <Modal.Body>
                    <div className={styles["card-challenge1"]} >
        <div className="row">
          <div className="col-8">
          <div className="d-flex">
            <div className={`${styles["tag-isu"]} ${styles["equality"]}`}>
            <div className="d-flex">
            <Image alt="" src="/organizer/equality.svg" 
              />
              <p className={styles["desc-isu"]}>Equality</p>
            </div>
            
                  
                </div>
              
            </div>
            <div className={styles["title-challenge"]}>
        {challenge.title4}
        </div>
        <div className={`d-flex ${styles["div-organizer1"]}`}>
          <Image alt="" src="/organizer/kerjaio.svg" 
                className={styles["img-logo"]}/>
           <p className={styles.organizer}>
           {challenge.organizer4}
           </p>
           <span className={styles.border}></span>   
           <p className={styles.part}>
           Part of the Campaign 
           </p>
           <p className={styles.campaign}>
           {challenge.campaign4}
          </p> 
            </div>
            <div className="d-flex mt-3 mb-3">
      <div className={`col-9 ${styles["tag-sponsor"]}`} >
      Sponsored by YDLB
      </div>
      <div className="col-3">
      <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/sponsor/YDLB.png"
      className={styles["img-sponsor"]}/>

      </div>
       </div>
      <div className={styles["desc-challenge"]}>
        {challenge.desc4}
      </div>
          </div>
          <div className="col-4">
          <Image alt="" src="https://static-images.campaign.com/?t=upd&w=500&file=postercelengkerjaioiamnotalabel.png" 
                className={styles["img-challenge1"]} />
<h5 className={styles.join1}>
    {challenge.join}
    </h5>
    <p className={styles.descjoin1}>
      {challenge.descjoin1}
    </p>
    <h5 className={styles.join1}>
    {challenge.donation}
    </h5>
    <p className={styles.descjoin1}>
      {challenge.descdonation1}
    </p>

    <div className={`mt-5 ${styles["button-challenge"]}`}>
<a href="#" className={styles["btn-challenge"]} >See Challenge</a>
</div>
          
          </div>
        </div>
      </div>
                    </Modal.Body>
      </Modal>
      <Modal
                    show={challenge3}
                    size="xl"
                    onHide={() => setChallenge3(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    dialogClassName={styles["modal-mob"]}
                  >
                        <Modal.Header className={styles["no-border"]} closeButton>
  </Modal.Header>
                    <Modal.Body>
                    <div className="row">
          <div className="col-xl-3 col-5">
          <Image alt="" src="https://static-images.campaign.com/?t=upd&w=500&file=postercelengkerjaioiamnotalabel.png" 
                className={styles["img-challenge"]} />
          </div>
          <div className={`col-xl-9 col-7 ${styles["div-desc"]}`}>
            <div className="d-flex">
            <Image alt="logo-isu" src="/organizer/equality-icon.svg" 
                className={styles["img-isu"]} />
            <div className={`${styles["tag-isu"]} ${styles["equality"]}`}>
            <div className="d-flex">
           
            <Image alt="" src="/organizer/equality.svg" 
              />
              <p className={styles["desc-isu"]}>Equality</p>
            </div>
            
                  
                </div>
            </div>
        <div className={styles["title-challenge"]}>
        {challenge.title1}
        </div>
        <div className={`d-flex ${styles["div-organizer"]}`}>
          <Image alt="" src="/organizer/kerjaio.svg" 
                className={styles["img-logo"]}/>
           <p className={styles.organizer}>
           {challenge.organizer4}
           </p>
           <span className={styles.border}></span>   
           <p className={styles.part}>
           Part of the Campaign 
           </p>
           <p className={styles.campaign}>
           {challenge.campaign4}
          </p> 
            </div>
          </div>
        
        </div>
      <div className="d-flex mt-3 mb-3">
      <div className={`col-9 ${styles["tag-sponsor"]}`} >
      Sponsored by YDLB
      </div>
      <div className="col-3">
      <Image alt="sponsor-logo" src="/organizer/ydlb-icon.svg" className={styles["img-sponsor-mob"]}/>
      <Image alt="sponsor-logo" src="https://storage.googleapis.com/campaign-backend-development-bucket/sponsor/YDLB.png" className={styles["img-sponsor-des"]}/>
      </div>
       </div>
      <div className={styles["desc-challenge"]}>
      In June 2020, the Centers for Disease Control and Prevention (CDC) Trusted Source reported an uptick in diagnoses of anxiety and depressive disorders — three to four times higher in 2020 than in 2019! See more
      </div>
<div className="row mt-4">
  <div className="col-12 col-xl-6 px-4">
    <h4 className={styles.join}>
    {challenge.join}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descjoin1}
    </p>
  </div>
  <div className="col-12 col-xl-6 px-4">
  <h4 className={styles.join}>
    {challenge.donation}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descdonation1}
    </p>
  </div>
</div>
<div className={styles["button-challenge"]}>
<a href="#" className={styles["btn-challenge"]}>See Challenge</a>
</div>
      
                    </Modal.Body>
      </Modal>
      <Modal
                    show={challenge4}
                    size="xl"
                    onHide={() => setChallenge4(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                     dialogClassName={styles["modal-des"]}
                  >
                        <Modal.Header className={styles["no-border"]} closeButton>
  </Modal.Header>
                    <Modal.Body>
                    <div className={styles["card-challenge1"]} >
        <div className="row">
          <div className="col-8">
          <div className="d-flex">
            <div className={`${styles["tag-isu"]} ${styles["equality"]}`}>
            <div className="d-flex">
            <Image alt="" src="/organizer/equality.svg" 
              />
              <p className={styles["desc-isu"]}>Equality</p>
            </div>
            
                  
                </div>
            </div>
            <div className={styles["title-challenge"]}>
        {challenge.title5}
        </div>
        <div className={`d-flex ${styles["div-organizer1"]}`}>
          <Image alt="" src="/organizer/permiasseattle.svg" 
                className={styles["img-logo"]}/>
           <p className={styles.organizer}>
           {challenge.organizer5}
           </p>
           <span className={styles.border}></span>   
           <p className={styles.part}>
           Part of the Campaign 
           </p>
           <p className={styles.campaign}>
           {challenge.campaign5}
          </p> 
            </div>
            <div className="d-flex mt-3 mb-3">
      <div className={`col-9 ${styles["tag-sponsor"]}`} >
      Sponsored by YDLB
      </div>
      <div className="col-3">
      <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/sponsor/YDLB.png"
      className={styles["img-sponsor"]}/>

      </div>
       </div>
      <div className={styles["desc-challenge"]}>
        {challenge.desc5}
      </div>
          </div>
          <div className="col-4">
          <Image alt="" src="https://static-images.campaign.com/?t=upd&w=500&file=postercelengpermias.jpg" 
                className={styles["img-challenge1"]} />
<h5 className={styles.join1}>
    {challenge.join}
    </h5>
    <p className={styles.descjoin1}>
      {challenge.descjoin1}
    </p>
    <h5 className={styles.join1}>
    {challenge.donation}
    </h5>
    <p className={styles.descjoin1}>
      {challenge.descdonation1}
    </p>

    <div className={`mt-5 ${styles["button-challenge"]}`}>
<a href="#" className={styles["btn-challenge"]} >See Challenge</a>
</div>
          
          </div>
        </div>
      </div>
                    </Modal.Body>
      </Modal>
      <Modal
                    show={challenge4}
                    size="xl"
                    onHide={() => setChallenge4(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    dialogClassName={styles["modal-mob"]}
                  >
                        <Modal.Header className={styles["no-border"]} closeButton>
  </Modal.Header>
                    <Modal.Body>
                    <div className="row">
          <div className="col-xl-3 col-5">
          <Image alt="" src="https://static-images.campaign.com/?t=upd&w=500&file=postercelengpermias.jpg" 
                className={styles["img-challenge"]} />
          </div>
          <div className={`col-xl-9 col-7 ${styles["div-desc"]}`}>
            <div className="d-flex">
            <Image alt="logo-isu" src="/organizer/equality-icon.svg" 
                className={styles["img-isu"]} />
            <div className={`${styles["tag-isu"]} ${styles["equality"]}`}>
            <div className="d-flex">
            <Image alt="" src="/organizer/equality.svg" 
              />
              <p className={styles["desc-isu"]}>Equality</p>
            </div>
            
                  
                </div>
                
            </div>
        <div className={styles["title-challenge"]}>
        {challenge.title1}
        </div>
        <div className={`d-flex ${styles["div-organizer"]}`}>
          <Image alt="" src="/organizer/permias.svg" 
                className={styles["img-logo"]}/>
           <p className={styles.organizer}>
           {challenge.organizer5}
           </p>
           <span className={styles.border}></span>   
           <p className={styles.part}>
           Part of the Campaign 
           </p>
           <p className={styles.campaign}>
           {challenge.campaign5}
          </p> 
            </div>
          </div>
        
        </div>
      <div className="d-flex mt-3 mb-3">
      <div className={`col-9 ${styles["tag-sponsor"]}`} >
      Sponsored by YDLB
      </div>
      <div className="col-3">
      <Image alt="sponsor-logo" src="/organizer/ydlb-icon.svg" className={styles["img-sponsor-mob"]}/>
      <Image alt="sponsor-logo" src="https://storage.googleapis.com/campaign-backend-development-bucket/sponsor/YDLB.png" className={styles["img-sponsor-des"]}/>

      </div>
       </div>
      <div className={styles["desc-challenge"]}>
      Culture plays an important role in the history of humankind. According to Price&#39;s Atlas of Ethnographic Societies, there are about over 3,814 distinct cultures in the world! For centuries, culture has been the glue of civilization. See more
      </div>
<div className="row mt-4">
  <div className="col-12 col-xl-6 px-4">
    <h4 className={styles.join}>
    {challenge.join}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descjoin1}
    </p>
  </div>
  <div className="col-12 col-xl-6 px-4">
  <h4 className={styles.join}>
    {challenge.donation}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descdonation1}
    </p>
  </div>
</div>
<div className={styles["button-challenge"]}>
<a href="#" className={styles["btn-challenge"]}>See Challenge</a>
</div>
      
                    </Modal.Body>
      </Modal>
            </div>
            </div>
            </div>
    );
}