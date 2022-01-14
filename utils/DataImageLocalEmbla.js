import media1 from "../public/assests/images/posterChall.png";
import media2 from "../public/assests/images/posterChall.png";
import media3 from "../public/assests/images/posterChall.png";
import media4 from "../public/assests/images/posterChall.png";
import media5 from "../public/assests/images/posterChall.png";
// import media6 from "../public/assests/images/posterChall.png";


export const media = [media1, media2, media3, media4, media5];
export const DataImageLocalEmbla = index => media[index % media.length];