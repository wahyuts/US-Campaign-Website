import media1 from "../public/assests/images/photo1.png";
import media2 from "../public/assests/images/photo2.png";
import media3 from "../public/assests/images/photo3.png";
import media4 from "../public/assests/images/photo4.png";
// import media6 from "../public/assests/images/posterChall.png";


// export const media = [media1, media2, media3, media4];
export const media = [
    {
        photo: media1,
        name: "Yoevan Wiraatmaja",
        job: "CEO PT Dampac Pharma",
        comment: `"Campaign.com is our best partner in conducting, organizing and creating positive and sustainable social campaigns for the community."`
    },
    {
        photo: media2,
        name: "Wulan Danoekoesoemo",
        job: "Lentera Sintas Indonesia",
        comment: `"Thank you for the support! Love working with Campaign.com on many different levels. Great partnership."`
    },
    {
        photo: media3,
        name: "Soeb Kagda",
        job: "CEO Indonesia Economic Forum",
        comment: `"We share the same vision for Indonesia an I look forward to creating for a movement that will inspire Indonesia's youth in a positive manner."`
    },
    {
        photo: media4,
        name: "Prastiwi Wulandari",
        job: "App User",
        comment: `"Finally, a useful app for social issues. We can create our won campaigns and chat people immediately. This app inspires people globally to care about social issues and be a part of change."`
    },
];

export const DataLocalPhotoReview = index => media[index % media.length];