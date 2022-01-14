import MainButton from "../Reuseable-components/MainButton";
import styles from '../../styles/NextBatch.module.css';


const NextBatch = () => {
    return ( 
        <div style={{width:'100%', marginBottom:50}}>
            <div className={styles.innerCont}>
                <div style={{width:'70%',marginLeft:'auto',marginRight:'auto',paddingTop:50}}>
                    <p style={{textAlign:'center'}}>The next batch of the US Student Ambassador Program will take place after February 2022. 
                        If you are a highly motivated college student in the United States interested in expanding your impact with the Campaign.com community, 
                        sign up here!</p>
                </div>
                <div style={{width:233,marginLeft:'auto',marginRight:'auto',paddingBottom:50}}>
                    <MainButton>
                        Sign Up
                    </MainButton>
                </div>
                
            </div>
            <div className={styles.innerCont2}>
                <p style={{textAlign:'left'}}>Everythings better with friends! We highly encourage you to get others from your school to apply to this program to work as a team and create a better collaborative environment.
                    Follow us on Instaram @campaign_usa to keep yourself informed about the open call of our next batch!</p>
            </div>
        </div>
     );
}
 
export default NextBatch;