import styles from "../../styles/About.module.css";
import { Image, Modal } from "react-bootstrap";
import { useState } from "react";
function OurJourney() {
  const [timeline0, setTimeline0] = useState(false);
  const [timeline1, setTimeline1] = useState(false);
  const [timeline2, setTimeline2] = useState(false);
  const [timeline3, setTimeline3] = useState(false);
  const [timeline4, setTimeline4] = useState(false);
  const [timeline5, setTimeline5] = useState(false);
  const [timeline6, setTimeline6] = useState(false);
  const [timeline7, setTimeline7] = useState(false);
  const [timeline8, setTimeline8] = useState(false);
  const [readMore1, setReadMore1] = useState(false);
  let readmore = "Read More ";
  let readless = "Read Less ";
  const linkName1 = readMore1 ? readless : readmore;
  let extraContent1 = (
    <>
      cities in Indonesia started to materialize. In January, we formed a team
      in Yogyakarta—our first that is based outside of Jakarta. We look forward
      to collaborating with even more communities in the country and making more
      impact in the weeks, months and years to come. We are also getting ready
      for the first Campaign.com festival, Festival ForChange, launching in
      April. More details coming soon. Stay tuned!&ensp;
    </>
  );
  const [readMore2, setReadMore2] = useState(false);
  const linkName2 = readMore2 ? readless : readmore;
  let extraContent2 = (
    <>
      1.0 was launched in January with the purpose of developing the capacity of
      YSEALI members in Indonesia to become social entrepreneurs. Over 100
      social enterprises from all over Indonesia participated in over 7 events.
      In May, we launched a new feature, Challenges. With this feature,
      communities can provide an opportunity for people to take action for
      change immediately. Since we launched this feature, over 100 communities
      have joined us to create Challenges, and over 8,000 users have taken
      actions.&ensp;
    </>
  );
  const [readMore3, setReadMore3] = useState(false);
  const linkName3 = readMore3 ? readless : readmore;
  let extraContent3 = (
    <>
      that didn’t seem to be fulfilling all the needs of a sustainable social
      movement. The Campaign #ForChange app became a new home. This year, we
      were also inspired by our collaboration with Search For Common Ground
      Indonesia. Their campaign #AkuTemanmu is to unite the diverse races,
      religions, and ethnic groups among Indonesians despite negative narratives
      or stereotypes perpetuated by mainstream media.&ensp;
    </>
  );
  const [readMore4, setReadMore4] = useState(false);
  const linkName4 = readMore4 ? readless : readmore;
  let extraContent4 = (
    <>
      testpack product, emphasized the importance for family planning and
      indulging in every precious moment of a woman’s pregnancy. In November, we
      worked on #DareToDream with the Indonesian Economic Forum. It encouraged
      Indonesia’s youth to envision the kind of country they want in 2045 and
      the different actions they can take to make it a reality. Through these
      collaborations, we learned that there are many ways to execute
      partnerships with brands that feel and are authentic, meaningful and
      impactful, as well as aligned with our values.&ensp;
    </>
  );
  const [readMore5, setReadMore5] = useState(false);
  const linkName5 = readMore5 ? readless : readmore;
  let extraContent5 = (
    <>
      a conversation about sexual violence. This was our first time fully
      collaborating with social communities. Today, the campaign has led to over
      20 film screenings at universities, 300 school talks, and thousands of
      participants. In July, we collaborated with WWF, the biggest international
      organization we’ve ever worked with so far. #DoubleTigers was a campaign
      to increase the population of Sumatran tigers. We asked people to upload a
      photo of a Sumatran tiger a message to our website. The response exceeded
      our expectations—we engaged over 3,000 participants and helped raise
      hundreds of millions of rupiah for the cause.&ensp;
    </>
  );
  const [readMore6, setReadMore6] = useState(false);
  const linkName6 = readMore6 ? readless : readmore;
  let extraContent6 = (
    <>
      happened during the #ALSIceBucketChallenge is something that still drives
      us today. We want to make it easy for anyone to make a difference while
      having fun doing it. That is our mission to create a safe space to take
      action #ForChange. Our vision? To make the world a better place for
      everyone.&ensp;
    </>
  );
  const [readMore7, setReadMore7] = useState(false);
  const linkName7 = readMore7 ? readless : readmore;
  let extraContent7 = (
    <>
      disease, as well as USD220 million for research. This taught us that
      successful campaigning can get people to care about anything.But why
      aren’t there more viral challenges like this for social issues?&ensp;
    </>
  );
  let content0 = (
    <>
      To achieve our global vision in making the world a better place, Campaign.com continues 
                  to seek expansion of its impact towards 
                  international waters such as the United States&ensp;
    </>
  );
  let content1 = (
    <>
      We kicked off the year with 20 Actions for 2020, inspiring Changemakers to
      make supporting 20 communities one of their New Year’s Resolutions. This
      year, our dream to expand to 20&ensp;
    </>
  );
  let content2 = (
    <>
      We chose to embrace and commit to supporting social campaigns only.
      Collaborating with @america, we launched Young Changemakers Social
      Enterprise (YCSE) Academy&ensp;
    </>
  );
  let content3 = (
    <>
      In 2018, we launched our app on iOS and Android. Admittedly, this first
      iteration of the app was clunky and far from perfect. But it was a
      much-needed alternative to other social media platforms&ensp;
    </>
  );
  let content4 = (
    <>
      In September, we collaborated with Sensitif on a campaign called
      #FromThisMoment. The campaign, which was launched in conjunction with the
      launch of the brand’s new&ensp;
    </>
  );
  let content5 = (
    <>
      A big year for us. In May, we established a collaboration with Yayasan
      Lentera Indonesia and Magdalene for the campaign #MulaiBicara, which was
      aimed at starting&ensp;
    </>
  );
  let content6 = (
    <>
      This year, our CEO founded Campaign.com with a small team of believers as
      we tried to make it easier for people to come together to make a
      difference. The magic that&ensp;
    </>
  );
  let content7 = (
    <>
      #ALSIceBucketChallenge, which was started in the US, became an internet
      sensation and raised massive awareness on the amyotrophic lateral
      sclerosis (ALS)&ensp;
    </>
  );
  let content8 = (
    <>
      PT. Uni Tokopo Teknologi was born as an IT consulting firm, but the plan
      was to launch a global startup from Indonesia that could inspire other
      startups. The soul searching began.&ensp;
    </>
  );
  return (
    <div className={styles["section-6"]}>
      <div className="container">
        <div className={`text-center ${styles["section-content"]}`}>
          <div className={styles["title-section"]}>Our Journey</div>
          <div className={`mt-5 ${styles["timeline"]}`}>
          <div
              className={`${styles["timeline1"]} mb-5 ${styles["box-timeline"]} ${styles["right"]}`}
              id="timeline0"
            >
              <div className={`row  ${styles["content-right"]} ${styles["border-top"]}`}>
                <div className="col-xl-4 text-left mt-3 p-0">
                  <Image
                    src="https://www.campaign.com/assets/uni_img/CampaignUs/2021.png"
                    className={styles["img-timeline"]}
                    onClick={() => setTimeline0(true)}
                    alt="timeline 2019"
                  />
                  <Modal
                    show={timeline0}
                    size="md"
                    onHide={() => setTimeline0(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Body>
                      <Image
                        src="https://www.campaign.com/assets/uni_img/CampaignUs/2021-full.jpg"
                        className={styles["img-modal-timeline"]}
                        alt="timeline2019modal"
                      />
                    </Modal.Body>
                  </Modal>
                </div>
                <div className={`col-xl-8 p-0 ${styles["padding-left"]}`}>
                <div className={styles["title-timeline"]}>2021</div>
                  <div className={styles["desc-timeline"]}>
                  {content0} 
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles["timeline1"]} mb-5 ${styles["box-timeline"]} ${styles["left"]}`}
              id="timeline1"
            >
              <div
                className={`row content flex-row-reverse ${styles["content"]} ${styles["border-top"]}`}
              >
                <div className="col-xl-4 text-left mt-3 p-0">
                  <Image
                    src="https://www.campaign.com/assets/uni_img/CampaignUs/2020.png"
                    className={styles["img-timeline"]}
                    onClick={() => setTimeline1(true)}
                    alt="timeline2020"
                  />
                  <Modal
                    show={timeline1}
                    size="md"
                    onHide={() => setTimeline1(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Body>
                      <Image
                        src="https://campaign.com/assets/uni_img/about/timeline2020-com.png"
                        className={styles["img-modal-timeline"]}
                        alt="timeline2020modal"
                      />
                    </Modal.Body>
                  </Modal>
                </div>
                <div className={`col-xl-8 p-0 ${styles["padding-right"]}`}>
                <div className={styles["title-timeline"]}>2020</div>
                  <div className={styles["desc-timeline"]}>
                    {content1}
                    {readMore1 && extraContent1}
                    <a
                      className={styles["desc-readmore"]}
                      onClick={() => {
                        setReadMore1(!readMore1);
                      }}
                    >
                      {linkName1}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles["timeline2"]} mb-5 ${styles["box-timeline"]} ${styles["right"]}`}
              id="timeline2"
            >
              <div className={`row  ${styles["content-right"]} ${styles["border-top"]}`}>
                <div className="col-xl-4 text-left mt-3 p-0">
                  <Image
                    src="https://www.campaign.com/assets/uni_img/CampaignUs/2019.png"
                    className={styles["img-timeline"]}
                    onClick={() => setTimeline2(true)}
                    alt="timeline 2019"
                  />
                  <Modal
                    show={timeline2}
                    size="md"
                    onHide={() => setTimeline2(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Body>
                      <Image
                        src="https://campaign.com/assets/uni_img/about/timeline2019-com.png"
                        className={styles["img-modal-timeline"]}
                        alt="timeline2019modal"
                      />
                    </Modal.Body>
                  </Modal>
                </div>
                <div className={`col-xl-8 p-0 ${styles["padding-left"]}`}>
                <div className={styles["title-timeline"]}>2019</div>
                  <div className={styles["desc-timeline"]}>
                    {content2}
                    {readMore2 && extraContent2}
                    <a
                      className={styles["desc-readmore"]}
                      onClick={() => {
                        setReadMore2(!readMore2);
                      }}
                    >
                      {linkName2}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles["timeline3"]} mb-5 ${styles["box-timeline"]} ${styles["left"]}`}
              id="timeline3"
            >
              <div
                className={`row content flex-row-reverse ${styles["content"]} ${styles["border-top"]}`}
              >
                <div className="col-xl-4 text-left mt-3 p-0">
                  <Image
                    src="https://www.campaign.com/assets/uni_img/CampaignUs/2018.png"
                    className={styles["img-timeline"]}
                    onClick={() => setTimeline3(true)}
                    alt="timeline2018"
                  />
                  <Modal
                    show={timeline3}
                    size="md"
                    onHide={() => setTimeline3(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Body>
                      <Image
                        src="https://campaign.com/assets/uni_img/about/timeline2018-com.png"
                        className={styles["img-modal-timeline"]}
                        alt="timeline2018modal"
                      />
                    </Modal.Body>
                  </Modal>
                </div>
                <div className={`col-xl-8 p-0 ${styles["padding-right"]}`}>
                <div className={styles["title-timeline"]}>2018</div>
                  <div className={styles["desc-timeline"]}>
                    {content3}
                    {readMore3 && extraContent3}
                    <a
                      className={styles["desc-readmore"]}
                      onClick={() => {
                        setReadMore3(!readMore3);
                      }}
                    >
                      {linkName3}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles["timeline4"]} mb-5 ${styles["box-timeline"]} ${styles["right"]}`}
              id="timeline4"
            >
              <div className={`row  ${styles["content-right"]} ${styles["border-top"]}`}>
                <div className="col-xl-4 text-left mt-3 p-0">
                  <Image
                    src="https://www.campaign.com/assets/uni_img/CampaignUs/2017.png"
                    className={styles["img-timeline"]}
                    onClick={() => setTimeline4(true)}
                    alt="timeline2017"
                  />
                  <Modal
                    show={timeline4}
                    size="md"
                    onHide={() => setTimeline4(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Body>
                      <Image
                        src="https://campaign.com/assets/uni_img/about/timeline2017-com.png"
                        className={styles["img-modal-timeline"]}
                        alt="timeline2017modal"
                      />
                    </Modal.Body>
                  </Modal>
                </div>
                <div className={`col-xl-8 p-0 ${styles["padding-left"]}`}>
                <div className={styles["title-timeline"]}>2017</div>
                  <div className={styles["desc-timeline"]}>
                    {content4}
                    {readMore4 && extraContent4}
                    <a
                      className={styles["desc-readmore"]}
                      onClick={() => {
                        setReadMore4(!readMore4);
                      }}
                    >
                      {linkName4}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles["timeline5"]} mb-5 ${styles["box-timeline"]} ${styles["left"]}`}
              id="timeline5"
            >
              <div
                className={`row content flex-row-reverse ${styles["content"]} ${styles["border-top"]}`}
              >
                <div className="col-xl-4 text-left mt-3 p-0">
                  <Image
                    src="https://www.campaign.com/assets/uni_img/CampaignUs/2016.png"
                    className={styles["img-timeline"]}
                    onClick={() => setTimeline5(true)}
                    alt="timeline2016"
                  />
                  <Modal
                    show={timeline5}
                    size="md"
                    onHide={() => setTimeline5(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Body>
                      <Image
                        src="https://storage.googleapis.com/imagescampaign/publish/homepage/AboutUs/timeline-2016.png"
                        className={styles["img-modal-timeline"]}
                        alt="timeline2016modal"
                      />
                    </Modal.Body>
                  </Modal>
                </div>
                <div className={`col-xl-8 p-0 ${styles["padding-right"]}`}>
                <div className={styles["title-timeline"]}>2016</div>
                  <div className={styles["desc-timeline"]}>
                    {content5}
                    {readMore5 && extraContent5}
                    <a
                      className={styles["desc-readmore"]}
                      onClick={() => {
                        setReadMore5(!readMore5);
                      }}
                    >
                      {linkName5}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles["timeline6"]} mb-5 ${styles["box-timeline"]} ${styles["right"]}`}
              id="timeline6"
            >
              <div className={`row  ${styles["content-right"]} ${styles["border-top"]}`}>
                <div className="col-xl-4 text-left mt-3 p-0">
                  <Image
                    src="https://www.campaign.com/assets/uni_img/CampaignUs/2015.png"
                    className={styles["img-timeline"]}
                    onClick={() => setTimeline6(true)}
                    alt="timeline2015"
                  />
                  <Modal
                    show={timeline6}
                    size="md"
                    onHide={() => setTimeline6(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Body>
                      <Image
                        src="https://campaign.com/assets/uni_img/about/timeline2015-com.png"
                        className={styles["img-modal-timeline"]}
                        alt="timeline2015modal"
                      />
                    </Modal.Body>
                  </Modal>
                </div>
                <div className="col-xl-8">
                <div className={styles["title-timeline"]}>2015</div>
                  <div className={styles["desc-timeline"]}>
                    {content6}
                    {readMore6 && extraContent6}
                    <a
                      className={styles["desc-readmore"]}
                      onClick={() => {
                        setReadMore6(!readMore6);
                      }}
                    >
                      {linkName6}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles["timeline7"]} mb-5 ${styles["box-timeline"]} ${styles["left"]}`}
              id="timeline7"
            >
              <div
                className={`row content flex-row-reverse ${styles["content"]} ${styles["border-top"]}`}
              >
                <div className="col-xl-4 text-left mt-3 p-0">
                  <Image
                    src="https://www.campaign.com/assets/uni_img/CampaignUs/2014.png"
                    className={styles["img-timeline"]}
                    onClick={() => setTimeline7(true)}
                    alt="timeline2014"
                  />
                  <Modal
                    show={timeline7}
                    size="md"
                    onHide={() => setTimeline7(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Body>
                      <Image
                        src="https://campaign.com/assets/uni_img/about/timeline2014-com.png"
                        className={styles["img-modal-timeline"]}
                        alt="timeline2014modal"
                      />
                    </Modal.Body>
                  </Modal>
                </div>
                <div className={`col-xl-8 p-0 ${styles["padding-right"]}`}>
                <div className={styles["title-timeline"]}>2014</div>
                  <div className={styles["desc-timeline"]}>
                    {content7}
                    {readMore7 && extraContent7}
                    <a
                      className={styles["desc-readmore"]}
                      onClick={() => {
                        setReadMore7(!readMore7);
                      }}
                    >
                      {linkName7}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles["timeline8"]} mb-5 ${styles["box-timeline"]} ${styles["right"]}`}
              id="timeline8"
            >
              <div className={`row  ${styles["content-right"]} ${styles["border-top"]}`}>
                <div className="col-xl-4 text-left mt-3 p-0">
                  <Image
                    src="https://www.campaign.com/assets/uni_img/CampaignUs/2013.png"
                    className={styles["img-timeline"]}
                    onClick={() => setTimeline8(true)}
                    alt="timeline2013"
                  />
                  <Modal
                    show={timeline8}
                    size="md"
                    onHide={() => setTimeline8(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Body>
                      <Image
                        src="https://storage.googleapis.com/imagescampaign/publish/homepage/AboutUs/timeline-2013.png"
                        className={styles["img-modal-timeline"]}
                        alt="timeline2013modal"
                      />
                    </Modal.Body>
                  </Modal>
                </div>
                <div className={`col-xl-8 p-0 ${styles["padding-left"]}`}>
                <div className={styles["title-timeline"]}>2013</div>
                  <div className={styles["desc-timeline"]}>{content8}</div>
                </div>
              </div>
            </div>
            <div
              className={`${styles["timeline7"]} mb-5 ${styles["box-timeline"]} ${styles["left"]} ${styles["last"]}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurJourney;
