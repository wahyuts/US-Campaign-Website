import DescSection from "../../components/artifacts/desc-section";
import Breadcrumbs from "../../components/artifacts/breadcrumbs";
import HowWeWork from "../../components/about/how-we-work";
import OurJourney from "../../components/about/our-journey";
import styles from "../../styles/About.module.css";
import dynamic from "next/dynamic";
const CarouselValues = dynamic(
  () => import("../../components/about/carousel-our-values"),
  { ssr: false }
);
const CarouselVisiMisi = dynamic(
  () => import("../../components/about/vision-mission"),
  { ssr: false }
);

export default function About() {
  const aboutus={
  title:"About Us",
  desc: (
    <>
    <b>Campaign.com</b>  is a social action platform that provides 
    a safe and dedicated space for campaign organizers to 
    challenge their supporters to take social action and 
    open up donations from sponsors. Each campaign 
    challenge consists of a series of social actions aimed 
    at educating and developing new social habits in the daily lives of our users.

    </>
  ),   
  };
  const howwework={
    title:"How We Work",
  };
  const ourvalues = {
   
      title_value: "Our Value",
      desc_values: (
        <>
          In 2019, after years of soul searching and discovery, we finally found our four guiding values that keep us focused at Campaign.com: Social Only, Full Collaboration, Safe Space, and Have Fun.
        </>
      ),
      desc_social_value: (
        <>
We are commited to provide a platform where everyone can for communities for social issues that different communities are fighting for. We learn from communities, amplify
them, and actively collaborate with them.
        </>
      ),
      desc_collab_value: (
        <>
We practice conscious, real, honest and active collaborations among
one another and with everyone else we come
in contact with.
        </>
      ),
      desc_safe_value: (
        <>
Our online and offline platforms and activities are judgment-free, inclusive, accessible, and encouraging so that knowledge sharing, collaboration, and
change can take place.
        </>
      ),
      desc_havefun_value: (
        <>
We recognize that while social issues are no joke, we can inspire more people when we present them with engaging, rewarding, and positive ways of learning and exploration of social issues.
        </>
      ),
  };
  const visionmission={
    title:"Our Vision and Mission",
    title1:"To make the world a better place for everyone",
    title2:"Creating safe spaces to take action #ForChange",
    desc1: (
      <>
      Our vision reflects our commitment that making the world a better place 
      is a continuous process that takes concrete action. Besides that, 
      our vision states that we are not just doing this for ourselves but also for others.
      </>
    ), 
    desc2: (
      <>
      Our mission statement focuses on today and what we do. 
      We understand that safe spaces should not be taken for granted, 
      for they require effort and collaboration. When we have safe spaces, 
      more people will be motivated take action #ForChange! Our mission drives us 
      and is the core of our business. Plus, it shapes our objectives, the steps we take, 
      and the culture we create at Campaign.com.
      </>
    ),     
  };
  return (
    <>
    <div className={styles["section-1"]}>
        <div className="container">
          <div className={styles["section-content1"]}>
            <Breadcrumbs text1="Home" text2="About Us" />
            <DescSection
              title={aboutus.title}
              desc={aboutus.desc}
              imgUrl="/about/about-us.png"
            />
          </div>
        </div>
      </div>
    <CarouselVisiMisi visionmission={visionmission}/>
    <HowWeWork title={howwework.title}/>
    <CarouselValues ourvalues={ourvalues}/>
    <OurJourney/>
    
    </>
  );
}
