import Head from "next/head";
import dynamic from "next/dynamic";
import OrganizerList from "../../components/Reuseable-components/organizerList";
import ContactUsSponsor from "../../components/sponsor-comp/ContactUsSponsor";
import SponsorBanner from "../../components/sponsor-comp/SponsorBanner";
import WhatYouWillGet from "../../components/sponsor-comp/WhatYouWillGet";
// import NoSSR from "../../utils/NoSSR";sss

const OrganizerChallenge = dynamic(
    () => import("../../components/Reuseable-components/challengeCarousel"),
    { ssr: false }
  );

const Sponsors = () => {
    return ( 
        <div>
            <Head>
                <title>Campaign.com || Sponsors</title>
            </Head>
            <OrganizerList/>
            <SponsorBanner/>
            <WhatYouWillGet/>
            <OrganizerChallenge/>
            {/* <ChallengeCarousel/> */}
            <ContactUsSponsor/>
        </div>
     );
}
 
export default Sponsors;