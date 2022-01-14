import styles from "../../styles/Footer.module.css";
import { Image, Dropdown } from "react-bootstrap";
import { useRouter } from 'next/router';
import Link from "next/link";
function Footer() {
  const router = useRouter();

  const handleClickHomepage = (e) => {
    e.preventDefault();
    router.push('/');
  }

  const handleClickAboutUs = (e) => {
      e.preventDefault();
      router.push('/about');
  }

  const handleClickPrograms = (e) => {
      e.preventDefault();
      router.push('/programs');
  }

  const handleClickOrganizers = (e) => {
      e.preventDefault();
      router.push('/organizers');
  }

  const handleClickSponsors = (e) => {                 
      e.preventDefault();
      router.push('/sponsors');
  }

  const handleClickFAQ = (e) => {
      e.preventDefault();
      window.open('https://www.campaign.com/faq')
      // router.push('/faq');
  }

  return (
    <>
      <div
        className="footer d-flex align-bottom"
        style={{
          backgroundColor: "#000",
          width: "100%",
        }}
      >
        <div className="container">
          <div className={styles.sectionhdft}>
            <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-7 col-sm-6">
                <div className="row pb-3">
                  <div className="col-xl-4 col-12 col-lg-6 col-md-6 col-sm-6 mb-4">
                    {/* <Link href={`/`} passHref> */}
                    <a onClick={handleClickHomepage}>
                      <div className={styles.logoftnew}>
                        <Image
                          alt="logoCampaign"
                          src="https://storage.googleapis.com/imagescampaign/publish/homepage/logocampaign-new.png"
                        />
                      </div>
                    </a>
                    {/* </Link> */}
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-xl-auto col-12 col-lg-auto col-md-auto col-sm-auto pb-3">
                    {/* <Link href={`/about`} passHref> */}
                    <a onClick={handleClickAboutUs}>
                      <div className={styles.descmenuft}>About Us</div>
                    </a>
                    {/* </Link> */}
                  </div>
                  <div className="col-xl-auto col-12 col-lg-auto col-md-auto col-sm-auto pb-3">
                    {/* <Link href={`/organizer`} passHref> */}
                    <a onClick={handleClickPrograms}>
                      <div className={styles.descmenuft}>Programs</div>
                    </a>
                    {/* </Link> */}
                  </div>
                  <div className="col-xl-auto col-12 col-lg-auto col-md-auto col-sm-auto pb-3">
                    {/* <Link href={`/sponsor`} passHref> */}
                    <a onClick={handleClickOrganizers}>
                      <div className={styles.descmenuft}>Organizers</div>
                    </a>
                    {/* </Link> */}
                  </div>
                  <div className="col-xl-auto col-12 col-lg-auto col-md-auto col-sm-auto pb-3">
                    {/* <Link href={`/pressroom`} passHref> */}
                    <a onClick={handleClickSponsors}>
                      <div className={styles.descmenuft}>Sponsors</div>
                    </a>
                    {/* </Link> */}
                  </div>
                  <div className="col-xl-auto col-12 col-lg-auto col-md-auto col-sm-auto pb-3">
                    {/* <Link href={`/faq`} passHref> */}
                    <a onClick={handleClickFAQ}>
                      <div className={styles.descmenuft}>FAQ</div>
                    </a>
                    {/* </Link> */}
                  </div>
                  <div className="col-xl-auto col-12 col-lg-auto col-md-auto col-sm-auto pb-3">
                    {/* <Link href={`/contact`} passHref> */}
                    <a onClick={handleClickAboutUs}>
                      <div className={styles.descmenuft}>Contact</div>
                    </a>
                    {/* </Link> */}
                  </div>
                  <div className="col-xl-auto col-12 col-lg-auto col-md-auto col-sm-auto pb-3">
                    {/* <Link href={`/ambassador`} passHref> */}
                    <a href="#">
                      <div className={styles.descmenuft}>
                        Campaign Ambassador
                      </div>
                    </a>
                    {/* </Link> */}
                  </div>
                  <div className="col-xl-auto col-12 col-lg-auto col-md-auto col-sm-auto pb-3">
                    {/* <Link href={`/terms`} passHref> */}
                    <a href="#">
                      <div className={styles.descmenuft}>
                        Terms &amp; Conditions{" "}
                      </div>
                    </a>
                    {/* </Link> */}
                  </div>
                  <div className="col-xl-auto col-12 col-lg-auto col-md-auto col-sm-auto pb-3">
                    {/* <Link href={`/privacy`} passHref> */}
                    <a href="#">
                      <div className={styles.descmenuft}>Privacy Policy</div>
                    </a>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-6 col-12">
                <div className={`row mb-3 ${styles.location} ${styles.flexend}`}>
                  <div className={`col-12 col-xl-7 d-flex mb-3 mt-3 p-0 ${styles.flexend}`}>
                <Image
                          src="/location.svg"
                          className={styles.logolocation}
                          alt="location"
                        />
                         <div className={`col-xl-auto col-auto ${styles.desclocation}`}>
                    Location
                  </div>
                  </div>
                  <div className={`col-12 col-xl-5 ${styles.flexend}`}>
                  <Dropdown>
  <Dropdown.Toggle className={styles.optionlocation} id="dropdown-basic">
    USA
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="https://us.campaign.com/">USA</Dropdown.Item>
    <Dropdown.Item href="https://www.campaign.com/">Indonesia</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
                
                </div>
                <div className={`row ${styles.flexend}`} id="footer-right">
                  <div className="col-xl-auto col-auto col-md-auto col-lg-auto col-sm-4 pb-2 pl-1">
                    <center>
                      <a href="https://www.facebook.com/CampaignID">
                        <Image
                          src="https://storage.googleapis.com/imagescampaign/upload/ic_facebook.svg"
                          className={styles.logocampaignft}
                          alt="facebook"
                        />
                      </a>
                    </center>
                  </div>
                  <div className="col-xl-auto col-auto col-md-auto col-lg-auto col-sm-4 pb-2 pl-1">
                    <center>
                      <a href="https://twitter.com/campaign_ID">
                        <Image
                          src="https://storage.googleapis.com/imagescampaign/upload/ic_twitter.svg"
                          className={styles.logocampaignft}
                          alt="twitter"
                        />
                      </a>
                    </center>
                  </div>
                  <div className="col-xl-auto col-auto col-md-auto col-lg-auto col-sm-4 pb-2 pl-1">
                    <a href="https://www.instagram.com/campaign_id/">
                      <Image
                        src="https://www.campaign.com/assets/uni_img/pressroom/logoinstagram.svg"
                        className={styles.logotiktok}
                        alt="instagram"
                      />
                    </a>
                  </div>
                  <div className="col-xl-auto col-auto col-md-auto col-lg-auto col-sm-4 pb-2 pl-2">
                    <a href="https://www.linkedin.com/company/campaign-com">
                      <Image
                        src="https://www.campaign.com/assets/uni_img/pressroom/logolinkedin.svg"
                        className={styles.logotiktok}
                        alt="linkedin"
                      />
                    </a>
                  </div>
                  <div className="col-xl-auto col-auto col-md-auto col-lg-auto col-sm-4 pb-2 pl-2">
                    <a href="https://vt.tiktok.com/ZSJmUvUXv/">
                      <Image
                        src="https://www.campaign.com/assets/uni_img/pressroom/logotiktok.svg"
                        className={styles.logotiktok}
                        alt="tiktok"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className={`row mt-3 ${styles.flexend}`}
                  id="footer-right-copy"
                >
                  <div className={`col-xl-auto col-auto ${styles.descmenuft}`}>
                    Copyright © 2021 Campaign
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
