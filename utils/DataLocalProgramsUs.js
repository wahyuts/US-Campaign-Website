import media1 from "../public/assests/images/USA-Ambasador.png";
// import media2 from "../public/assests/images/USA-Ambasador.png";
// import media3 from "../public/assests/images/Event3.png";

// export const media = [media1, media2, media3, media4];
export const media = [
    {   
        photo: media1,
        title: "US Student Ambassador Program",
        desc: "Campaign.com is aiming to make a bigger impact through their international expansion plans. This program recruits college students in the US, who have the ability to expand the company’s outreach among the target market and increase the company’s brand presence in the country."
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

export const DataLocalProgramsUs = index => media[index % media.length];