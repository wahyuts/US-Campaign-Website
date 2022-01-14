
import media1 from "../public/assests/images/Event1.png";
import media2 from "../public/assests/images/Event2.png";
import media3 from "../public/assests/images/Event3.png";

// export const media = [media1, media2, media3, media4];
export const media = [
    {   
        photo: media1,
        title: "@america x Campaign Global Entrepreneurs Week",
        desc: "Come join us at @america’s US Embassy American Center’s Global Entrepreneurship Week Campaign.com will share its journey in becoming Google PlayStore’s Best App for Good 2020. Featuring Campaign.com ’s amazing US-based organizer - Kerja.io."
    },
    {   
        photo: media2,
        title: "Permias Nasional Social Strikes Back",
        desc: "Social Strikes Back aims to destigmatize this perception of social enterprises in Indonesia and encourage the young generation to pursue their careers and contribute to the growth in the creative and social industry by sharing the success stories of influential leaders in the industry featuring Campaign.com, WWF Indonesia, and Nichoa Chocolate."
    },
    {   
        photo: media3,
        title: "Kerja.io Fall Career Fair",
        desc: "Campaign.com has inclusive and diverse teams globally. To further expand our reach to outstanding candidates, we partnered with Kerja.io on their Fall Career Fair 2021."
    },
];

export const DataLocalEventUs = index => media[index % media.length];