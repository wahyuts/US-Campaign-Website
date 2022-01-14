import media1 from "../public/assests/images/Ben1.png";
import media2 from "../public/assests/images/Ben2.png";
import media3 from "../public/assests/images/Ben3.png";
import media4 from "../public/assests/images/Ben4.png";

export const media = [
    {
        photo: media1,
        desc: "Gift cards up to $100"
    },
    {
        photo: media2,
        desc: "Career development consultation"
    },
    {
        photo: media3,
        desc: "Professional and personal development workshops"
    },
    {
        photo: media4,
        desc: "Networking opportunities"
    },
];

export const DataLocalBennefit = index => media[index % media.length];