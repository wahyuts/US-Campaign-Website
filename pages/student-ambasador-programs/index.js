import Head from "next/head";
// import Carrer from "../../components/programs-page/carrer";
// import ContactUsPrograms from "../../components/programs-page/contact-us-programs";
// import Events from "../../components/programs-page/Events";
// import ProgramsNavBar from "../../components/programs-page/programs-navbar";
// import SocialFairWeek from "../../components/programs-page/social-fair-week";
import AmbasadorNavBar from "../../components/student-ambasador-comp/AmbasadorNavBar";
import AmbasadorProgramDesc from "../../components/student-ambasador-comp/AmbasadorProgramDesc";
import Benefits from "../../components/student-ambasador-comp/Benefits";
import NextBatch from "../../components/student-ambasador-comp/NextBatch";
import RoleAndHirring from "../../components/student-ambasador-comp/RoleAndHirring";
// import UsPrograms from "../../components/programs-page/us-programs";

const StudentAmbasador = () => {
    return ( 
        <div>
            <Head>
                <title>Campaign.com || Student Ambasador Programs</title>
            </Head>
            <AmbasadorNavBar/>
            <AmbasadorProgramDesc/>
            <RoleAndHirring/>
            <Benefits/>
            <NextBatch/>
            {/* <Events/>
            <UsPrograms/>
            <Carrer/>
            <ContactUsPrograms/> */}
        </div>
     );
}
 
export default StudentAmbasador;