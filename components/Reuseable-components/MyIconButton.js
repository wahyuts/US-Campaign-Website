import styles from '../../styles/MyIconButton.module.css';

const MyIconButton = ({children, onClick}) => {
    return ( 
        <div>
            <button onClick={onClick} className={styles.myIconButton}>
                {children}
            </button>
        </div>
     );
}
 
export default MyIconButton;