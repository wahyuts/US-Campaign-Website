import Head from "next/head";
import Carrer from "../../components/programs-page/carrer";
import ContactUsPrograms from "../../components/programs-page/contact-us-programs";
import Events from "../../components/programs-page/Events";
import ProgramsNavBar from "../../components/programs-page/programs-navbar";
import SocialFairWeek from "../../components/programs-page/social-fair-week";
import UsPrograms from "../../components/programs-page/us-programs";

const Programs = () => {
    return ( 
        <div>
            <Head>
                <title>Campaign.com || Programs</title>
            </Head>
            <ProgramsNavBar/>
            <SocialFairWeek/>
            <Events/>
            <UsPrograms/>
            <Carrer/>
            <ContactUsPrograms/>
        </div>
     );
}
 
export default Programs;