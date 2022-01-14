import {useState} from 'react';

const ForModalDownload = () => {
    const [openModal,setOpenModal] = useState(false);

    const clickModal = () => {
        setOpenModal(!openModal)
    }

    return {
        openModal,
        clickModal
    }

};

export default ForModalDownload
