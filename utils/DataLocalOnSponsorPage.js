import media1 from "../public/assests/images/sps1.png";
import media2 from "../public/assests/images/sps2.png";
import media3 from "../public/assests/images/sps3.png";
import media4 from "../public/assests/images/sps4.png";
import media5 from "../public/assests/images/sps5.png";
import media6 from "../public/assests/images/sps6.png";


export const media = [
    {
        photo: media1,
        desc: "Sponsor logo on all communication materials"
    },
    {
        photo: media2,
        desc: "Features on our social media channels"
    },
    {
        photo: media3,
        desc: "Speaking slots at amplification events"
    },
    {
        photo: media4,
        desc: "Ad-libs during all activations"
    },
    {
        photo: media5,
        desc: "Logo & recognition on Campaign #ForChange App"
    },{
        photo: media6,
        desc: "Media exposure via Campaign.com events"
    },
];

export const DataLocalOnSponsorPage = index => media[index % media.length];