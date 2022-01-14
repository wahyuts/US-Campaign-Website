import styles from "../../styles/Organizer.module.css";
import OrganizerList from "../../components/Reuseable-components/organizerList";
import Breadcrumbs from "../../components/artifacts/breadcrumbs";
import OrganizerOnboarding from "../../components/organizer/organizerOnboarding";
import OrganizerContact from "../../components/organizer/organizerContact";
import dynamic from "next/dynamic";
const OrganizerSuccessStories = dynamic(
    () => import("../../components/organizer/organizerSuccessStories"),
    { ssr: false }
  );
const OrganizerChallenge = dynamic(
    () => import("../../components/Reuseable-components/challengeCarousel"),
    { ssr: false }
  );
const OrganizerBenefit = dynamic(
    () => import("../../components/organizer/organizerBenefit"),
    { ssr: false }
);
const OrganizerGuideBook = dynamic(
  () => import("../../components/organizer/organizerGuideBook"),
  { ssr: false }
);
export default function Organizer() {
    const benefit ={
        title:      "Our Organizer’s Recognition & Benefits",
        benefit1:   "Increase your organization’s brand awareness, reach, and community.",
        benefit2:   "Encourage your supporters to take proactive actions & unlock donations from sponsors.",
        benefit3:   "A safe space and platform raise public awareness on the chosen social issue.",
        benefit4:   "Expand your sponsor network by establishing new sponsorship collaborations.",
        benefit5:   "Receive funds for your organization/non-profit.",
    }
    const stories ={
        name_stories1:   "dr. Alvinsyah Pramono",
        name_stories2:   "Wendy Sunanda",
        name_stories3:   "Permias New York",
        name_stories4:   "Kerja.io",
        title_stories1: "PERMIAS Nasional",
        title_stories2: "Permias Seattle ",
        job_stories1 : "President of PERMIAS Nasional 2020-21",
        job_stories2 : "President of Permias Seattle",
        desc_stories1: (
            <>
            “For a very long time, international students in the USA have been dealing with diversity issues. 
            It also applies to the condition in Indonesia today. There are no such big differences between both 
            countries, and I think our #OneWorldManyCultures campaign challenge will be a very nice 
            initiative to start with. And help our nation learn to be pluralists.”
            </>
          ),   
          desc_stories2: (
            <>
            “We are very grateful for campaign.com that has provided us with the perfect platform 
            to raise awareness on the challenges students around the world encounter! 
            The campaign team has really helped us bring our organization’s vision to life.”
            </>
          ), 
          desc_stories3: (
            <>
           “Living in a fast-paced city like New York can take a toll on our mental health. 
           We are thankful that Campaign.com has given us the platform to launch our #SelfCareHustle campaign, 
           a reminder to look after our physical and mental well-being amid our busy schedules.”
            </>
          ), 
          desc_stories4: (
            <>
            “We all assume different roles in our lives. Sometimes, its easy to focus on certain aspects 
            of our identity over others. Thank you Campaign.com for providing us with a unique and powerful 
            platform to voice our belief that every individual should not be labeled.”
            </>
          ), 
    }
    
return (
<>
        <div className="container mt-5">
            <Breadcrumbs text1="Home" text2="Organizer" />
        </div>
<OrganizerList/>
<OrganizerBenefit benefit={benefit}/>
<OrganizerChallenge/>
<OrganizerOnboarding/>
<OrganizerSuccessStories stories={stories}/>
<OrganizerGuideBook/>
<OrganizerContact/>
</>
);
}