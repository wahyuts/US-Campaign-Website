import styles from '../../styles/MainButton.module.css';

const MainButton = ({children, onClick}) => {
    return ( 
        <div>
            <button onClick={onClick} className={styles.mainBlueButton}>
                {children}
            </button>
        </div>
     );
}
 
export default MainButton;