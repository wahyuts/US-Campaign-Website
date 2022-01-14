import styles from "../../styles/RoleAndHirring.module.css"

const RoleAndHirring = () => {
    return ( 
        <div className={styles.mainCont}>
            <div className={styles.innerMainCont}>
                <div className={styles.boxRole}>
                    <h2 className={styles.h2fontRole}>About The Role</h2>
                    <hr style={{width:100,border: '3px solid #0082FF', marginLeft:'auto',marginRight:'auto',marginBottom:40}}/>
                    <div style={{width:'90%',marginLeft:'auto',marginRight:'auto',marginBottom:50}}>
                        <ul>
                            <li>4-month program</li>
                            <li>Part-time, Remote position with approx. 10 working hrs/week.</li>
                            <li>Responsible for expanding our outreach for our third US market research.</li>
                            <li>Responsible for advocating for Campaign.com and promoting our company’s events on the #ForChange app among your college community.</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.boxRole2}>
                    <h2 className={styles.h2fontRole}>Hiring Criteria</h2>
                    <hr style={{width:100,border: '3px solid #0082FF', marginLeft:'auto',marginRight:'auto',marginBottom:40}}/>
                    <div style={{width:'90%',marginLeft:'auto',marginRight:'auto',marginBottom:50}}>
                        <ul>
                            <li>Passionate about social issues and want to make the world a better place.</li>
                            <li>Excellent communication and time management skills.</li>
                            <li>Enthusiastic and initiative-taking.</li>
                            <li>Currently enrolled in a US institution in any major/ concentration and any year (with a qualified US institute email like .edu).</li>
                            <li>Comfortable working remotely, both independently and collaboratively across a diverse team across multiple time zones.</li>
                            <li>Familiarity with Google workspace is a plus.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default RoleAndHirring;