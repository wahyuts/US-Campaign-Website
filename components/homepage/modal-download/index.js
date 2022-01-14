// import React, { useState } from 'react';
// import ForModalDownload from '../../../utils/ForModalDownload';

import styles from '../../../styles/ModalDownload.module.css';

const ModalDownload = ({clickModal}) => {

    // disini cuma button nya aja buat download modal
    // modal nya ada di MainHeadNav dengan variable theModal

    //Fungsi klik nya dan state modal ada di ForModalDownload.js
    // Why ada disana ? karena gak pake redux/state management

    return ( 
        <>
            <div className={styles.btnDownload} onClick={clickModal}>
                Download
            </div>
        </>
     );
}
 
export default ModalDownload;