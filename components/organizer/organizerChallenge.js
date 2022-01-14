import styles from "../../styles/Organizer.module.css";
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
export default function OrganizerChallenge(props) {
  const {challenge} = props;
  const [challenge0, setChallenge0] = useState(false);
  const [challenge1, setChallenge1] = useState(false);
  const [challenge2, setChallenge2] = useState(false);
  const [challenge3, setChallenge3] = useState(false);
  const [challenge4, setChallenge4] = useState(false);


    return (
        <div className={styles["section-challenge"]}>
            <div className="container p-0">
            <div className={`text-center ${styles["section-content"]}`}>
            <div className={styles["title-section"]}>
              {"Campaign Challenges & Collaborations"}
        </div>
        <OwlCarousel className="owl-carousel owl-theme p-0" {...options}>
      <div className="item" onClick={() => setChallenge0(true)}>
      <div className={styles["card-challenge"]} >
        <div className="row">
          <div className="col-3">
          <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/challenge/challengepostergrowthovergrades24sep21.jpg" 
                className={styles["img-challenge"]} />
          </div>
          <div className={`col-9 ${styles["div-desc"]}`}>
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
          </div>
        
        </div>
      <div className="d-flex mt-3 mb-3">
      <div className={`col-9 ${styles["tag-sponsor"]}`} >
      Sponsored by YDLB
      </div>
      <div className="col-3">
      <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/sponsor/YDLB.png"/>

      </div>
       </div>
      <div className={styles["desc-challenge"]}>
      According to a study on praise by Carol Dweck, children solely praised for their final grades tend to have a fixed mindset - hesitant to take up challenges. While those praised for their efforts, See more
      </div>
<div className="d-flex mt-3">
  <div className="col-6 p-4">
    <h4 className={styles.join}>
    {challenge.join}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descjoin1}
    </p>
  </div>
  <div className="col-6 p-4">
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
          <div className="col-3">
          <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/challenge/challengeposterselfcarehustle02okt21.png" 
                className={styles["img-challenge"]} />
          </div>
          <div className={`col-9 ${styles["div-desc"]}`}>
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
      <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/sponsor/YDLB.png"/>

      </div>
       </div>
      <div className={styles["desc-challenge"]}>
      According to a study on praise by Carol Dweck, children solely praised for their final grades tend to have a fixed mindset - hesitant to take up challenges. While those praised for their efforts, See more
      </div>
<div className="d-flex mt-3">
  <div className="col-6 p-4">
    <h4 className={styles.join}>
    {challenge.join}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descjoin1}
    </p>
  </div>
  <div className="col-6 p-4">
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
          <div className="col-3">
          <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/challenge/d213274d-c80a-44a0-a957-4f55e1ac7120.png" 
                className={styles["img-challenge"]} />
          </div>
          <div className={`col-9 ${styles["div-desc"]}`}>
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
      Sponsored by YDLB
      </div>
      <div className="col-3">
      <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/sponsor/YDLB.png"/>

      </div>
      <div className="col-3">
      <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/sponsor/YDLB.png"/>

      </div>
       </div>
      <div className={styles["desc-challenge"]}>
      According to a study on praise by Carol Dweck, children solely praised for their final grades tend to have a fixed mindset - hesitant to take up challenges. While those praised for their efforts, See more
      </div>
<div className="d-flex mt-3">
  <div className="col-6 p-4">
    <h4 className={styles.join}>
    {challenge.join}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descjoin1}
    </p>
  </div>
  <div className="col-6 p-4">
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
          <div className="col-3">
          <Image alt="" src="https://static-images.campaign.com/?t=upd&w=500&file=postercelengkerjaioiamnotalabel.png" 
                className={styles["img-challenge"]} />
          </div>
          <div className={`col-9 ${styles["div-desc"]}`}>
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
      <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/sponsor/YDLB.png"/>

      </div>
       </div>
      <div className={styles["desc-challenge"]}>
      According to a study on praise by Carol Dweck, children solely praised for their final grades tend to have a fixed mindset - hesitant to take up challenges. While those praised for their efforts, See more
      </div>
<div className="d-flex mt-3">
  <div className="col-6 p-4">
    <h4 className={styles.join}>
    {challenge.join}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descjoin1}
    </p>
  </div>
  <div className="col-6 p-4">
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
          <div className="col-3">
          <Image alt="" src="https://static-images.campaign.com/?t=upd&w=500&file=postercelengpermias.jpg" 
                className={styles["img-challenge"]} />
          </div>
          <div className={`col-9 ${styles["div-desc"]}`}>
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
      <Image alt="" src="https://storage.googleapis.com/campaign-backend-development-bucket/sponsor/YDLB.png"/>

      </div>
       </div>
      <div className={styles["desc-challenge"]}>
      According to a study on praise by Carol Dweck, children solely praised for their final grades tend to have a fixed mindset - hesitant to take up challenges. While those praised for their efforts, See more
      </div>
<div className="d-flex mt-3">
  <div className="col-6 p-4">
    <h4 className={styles.join}>
    {challenge.join}
    </h4>
    <p className={styles.descjoin}>
      {challenge.descjoin1}
    </p>
  </div>
  <div className="col-6 p-4">
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
                    show={challenge4}
                    size="xl"
                    onHide={() => setChallenge4(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    dialogClassName={styles["modal-des"]}
                    contentClassName={styles["modal-des"]}


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
            </div>
            </div>
            </div>
    );
}