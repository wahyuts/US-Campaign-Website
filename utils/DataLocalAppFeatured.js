
import media1 from "../public/assests/images/mobile01.png";
import media2 from "../public/assests/images/mobile02.png";
import media3 from "../public/assests/images/mobile03.png";
import media4 from "../public/assests/images/mobile04.png";
import media5 from "../public/assests/images/mobile05.png";

// export const media = [media1, media2, media3, media4];
export const media = [
    {   
        number: "01",
        photo: media1,
        title: "Discover Challenge",
        desc: "Find fun and interesting social campaign challenges to support here."
    },
    {   
        number: "02",
        photo: media2,
        title: "Take Actions",
        desc: "After joining a challenge, complete all actions of support to contribute to the social campaign."
    },
    {   
        number: "03",
        photo: media3,
        title: "Donate Without Money",
        desc: "Each time a challenge is completed, a donation from the sponsor will be unlocked for the campaign organizer."
    },
    {   
        number: "04",
        photo: media4,
        title: "Chack The Latest News",
        desc: "Track the progress of your campaign, challenge, and actions here."
    },
    {   
        number: "05",
        photo: media5,
        title: "Track Social Impact",
        desc: "Stay updated with the latest news, social issues, and any updates from your campaigns!"
    },
];

export const DataLocalAppFeatured = index => media[index % media.length];