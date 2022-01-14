import Image from 'next/image';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import BotReceivedMail from '../../../public/assests/images/botReceivedMail.png';
import styles from "../../../styles/FormReceiveUpdates.module.css";
import MainButton from '../../Reuseable-components/MainButton';

const FormReceiveUpdates = () => {

    const formik = useFormik (
        {
            initialValues: {
                email: "",
                name: ""
            },
            validationSchema: Yup.object({
                email: Yup.string()
                    .email("Invalid email format")
                    .required("Required!"),
                name: Yup.string()
                    // .min(6, "Minimum 6 characters")
                    .required("Required!")
            }),

            // onSubmit: values => { 
            //     dispatch(loginUser(values, History));
            // }
        }
    )

    return ( 
        <div className={styles.mainContReceiveUpdate}>
            <div className={styles.innerContReceiveUpdate}>
            <div className={styles.contImageBot } >
                <div className={styles.onlyForImage}>
                    <Image
                        src={BotReceivedMail}
                        alt="Bot Mail"
                        // width={350}
                        // height={350}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
            </div>

            <div className={styles.contMainForm}>
                <div className={styles.innerContMainForm}>
                    <div style={{width:'85%'}}>
                        <h2 className = {styles.h2TitleReceiveUpdate}>Be the First to Receive Updates from Campaign.com</h2>
                    </div>

                    <div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className={styles.divForm}>
                                <label className={styles.labelForm}>Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    className={styles.inputField} />

                                    {formik.errors.email && formik.touched.email && (
                                        <p className={styles.errorMsg}>{formik.errors.email}</p>
                                    )}
                            </div>
                            <div className={styles.divForm}>
                                <label className={styles.labelForm}>Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    className={styles.inputField} />

                                    {formik.errors.name && formik.touched.email && (
                                        <p className={styles.errorMsg}>{formik.errors.email}</p>
                                    )}
                            </div>
                            <div className={styles.btnSendUpdate} type="submit">
                                <MainButton>
                                    Send Me Updates
                                </MainButton>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            </div>
        </div>
     );
}
 
export default FormReceiveUpdates;