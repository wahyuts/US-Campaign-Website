// import Image from "next/image";
// import ImageVideo from '../../public/assests/images/vidbanner.png';
import React, {useState} from "react";
import YouTube from "react-youtube";
// import Modal from "react-modal";
import styles from '../../styles/ModalVideo.module.css';
import ReactResponsiveHook from '../../utils/ReactResponsiveHook';



// const modalStyles = {
//     content: {
//       top: "50%",
//       left: "50%",
//       right: "auto",
//       bottom: "auto",
//       marginRight: "-50%",
//       transform: "translate(-50%, -50%)"
//     }
//   };

const ModalVideo = () => {
    const [videoUrl, setVideoUrl] = useState("");
    const { isMobile, isTablet, isDesktop } = ReactResponsiveHook();


    // const handleClickImage = () => {
    //     setVideoUrl("https://www.youtube.com/watch?v=sAw-BuP5Vs8&t=1s")
    // }

    // const handleExerciseComplete = () => console.log("Do something");

    //Pake let videoCode jika link utube berasal dari api BE
    let videoCode;
    if (videoUrl) {
        videoCode = videoUrl.split("v=")[1].split("&")[0];
    }

    //Pake tembakVidCode jika sudah mengetahui code name video dari link utube nya
    // code name videonya bisa dilihat dari url utube  The video id is the string after v= and before the &.
    let tembakVidCode = "sAw-BuP5Vs8"

    // console.log("VIDCODE",videoCode);

    const checkElapsedTime = (e) => {
        console.log(e.target.playerInfo.playerState);
        const duration = e.target.getDuration();
        const currentTime = e.target.getCurrentTime();
        if (currentTime / duration > 0.95) {
          setModalIsOpen(true);
        }
      };

      const opts = {
        playerVars: {
          height: '352',
          width: '426',
          autoplay: 0
        }
      };
    // https://www.youtube.com/watch?v=sAw-BuP5Vs8&t=1s

    let YoutubeMedia = (
        <div style={{paddingTop:60}}>
            {/* <div className={styles.ModalVideo} onClick={handleClickImage}>
                <Image src={ImageVideo} alt="Video" width={626} height={352} objectFit='contain' />
            </div> */}

            <div className={styles.ModalVideo}>
                <YouTube
                    // videoId={videoCode}
                    videoId={tembakVidCode}
                    containerClassName="embed embed-youtube"
                    onStateChange={(e) => checkElapsedTime(e)}
                    opts={opts}
                />
            </div>
        </div>
    )
    return ( 
        <>
            {isMobile ? (
                isTablet ? (
                    isDesktop ? (
                        YoutubeMedia
                    ) : (
                        YoutubeMedia
                    )
                ) : (
                    YoutubeMedia
                )
            ) : (
                null
            )}
        </>
     );
}
 
export default ModalVideo;
