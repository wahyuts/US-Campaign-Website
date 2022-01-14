import media1 from "../public/assests/images/International-expansion.png";
// import media2 from "../public/assests/images/USA-Ambasador.png";
// import media3 from "../public/assests/images/Event3.png";

// export const media = [media1, media2, media3, media4];
export const media = [
    {   
        photo: media1,
        title: "International Expansion Intern Recruitment",
        desc: "This internship is open to US students and graduates currently enrolled in US institutions. Job role is highly recommended to those with strategic planning, audience acquisition, and product development experiences to expand initiatives within the US market.",
        desc2: "Available Job Roles and Departments:",
        loker1: "Program Development & Marketing",
        loker2: "Communications & Social Media Strategy ",
        loker3 : "Research & Development",
        loker4 : "Outreach & Sponsorship "
    },


    // {   
    //     photo: media2,
    //     title: "US Student Ambassador Program 2",
    //     desc: "Social Strikes Back aims to destigmatize this perception of social enterprises in Indonesia "
    // },
    // {   
    //     photo: media3,
    //     title: "Kerja.io Fall Career Fair",
    //     desc: "Campaign.com has inclusive and diverse teams globally. To further expand our reach to outstanding candidates, we partnered with Kerja.io on their Fall Career Fair 2021."
    // },
];

export const DataLocalCarrer = index => media[index % media.length];